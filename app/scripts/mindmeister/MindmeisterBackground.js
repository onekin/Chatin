
const APIClientId = 'XxUt7w0Xri-9hmIvvRNaIbMe4HrOml2giLDT5qFT5W8'
const TokenStorageKey = 'MINDMEISTER_ACCESS_TOKEN'
const Utils = require('../utils/Utils')

// const PromptStyles = require('../chatin/PromptStyles')

class MindmeisterBackground {
  constructor () {
    this._currentNodeId = -100
    this._currentChangeId = 100
    this._csrfToken = null
  }
  getCurrentNodeId () {
    this._currentNodeId--
    return this._currentNodeId
  }
  getCurrentChangeId () {
    this._currentChangeId++
    return this._currentChangeId
  }
  init () {
    let that = this
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.scope === 'mindmeisterClient') {
        if (message.action === 'checkToken') {
          that.checkToken().then(() => {
            sendResponse({response: true})
          }, (error) => sendResponse({error: error}))
        } else if (message.action === 'authorize') {
          that.authorize().then(() => {
            sendResponse({response: true})
          }, (error) => sendResponse({error: error}))
        } else if (message.action === 'processInBackground') {
          if (message.method === 'getMap') {
            that.getMap(message.args.mapId).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'createMindmapFromTemplate') {
            that.createMindmapFromTemplate(message.args.templateFileUrl).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'getAttachedFile') {
            that.getAttachedFile(message.args.fileId).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'getToken') {
            that.getTokenJS().then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'getBelongingMap') {
            that.getBelongingMap(message.args.nodeId).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
            // } else if (message.method === 'changeNodeIcon') {
            //   that.changeNodeIcon(message.args.mapId, message.args.nodeId, message.args.icon).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
            // } else if (message.method === 'addNode') {
            //   that.addNode(message.args.mapId, message.args.parentId, message.args.newNode).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'addNode') {
            that.addNode(message.args.mapId, message.args.newNodes).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'addNodes') {
            that.addNodes(message.args.mapId, message.args.newNodes).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'removeNodes') {
            that.removeNodes(message.args.mapId, message.args.removeNodes).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'modifyNodes') {
            that.modifyNodes(message.args.mapId, message.args.nodes).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'doActions') {
            that.doActions(message.args.mapId, message.args.insertions, message.args.updates, message.args.deletions).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'linkShare') {
            that.linkShare(message.args.mapId).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          }
        }
      }
      return true
    })

    chrome.webRequest.onSendHeaders.addListener(
      (details) => {
        for (var i = 0; i < details.requestHeaders.length; i++) {
          if (details.requestHeaders[i].name.toLowerCase() === 'x-csrf-token') {
            that._csrfToken = details.requestHeaders[i].value
            break
          } else if (details.requestHeaders[i].name.toLowerCase() === 'cookie') {
            that._cookie = details.requestHeaders[i].value
            break
          }
        }
        return {requestHeaders: details.requestHeaders}
      },
      {urls: ['https://www.mindmeister.com/*', 'https://mindmeister.com/*']},
      ['requestHeaders', 'extraHeaders']
    )

    /* chrome.webRequest.onBeforeSendHeaders.addListener(
      (details) => {
        let originHeader = details.requestHeaders.find((h) => { return h.name.toLowerCase() === 'origin' })
        if (originHeader == null || !originHeader.value.includes('chrome-extension://')) return
        let headersToRemove = ['accept', 'origin', 'sec-fetch-mode', 'sec-fetch-dest', 'accept-language', 'sec-ch-ua', 'sec-ch-ua-platform', 'sec-ch-ua-mobile', 'user-agent', 'sec-fetch-site']
        let newH = details.requestHeaders.filter((h) => { return headersToRemove.indexOf(h.name.toLowerCase()) === -1 })

        let cookieH = newH.find((h) => { return h.name.toLowerCase() === 'cookie' })
        if (cookieH != null) cookieH.value = that._cookie
        return {requestHeaders: newH}
      },
      {urls: ['https://www.mindmeister.com/generic_files/*','https://www.mindmeister.com/sharing/*']},
      ['requestHeaders', 'extraHeaders', 'blocking']
    ) */
  }

  authorize () {
    let that = this
    return new Promise((resolve, reject) => {
      chrome.identity.launchWebAuthFlow({
        interactive: true,
        url: `https://www.mindmeister.com/oauth2/authorize?client_id=${APIClientId}&scope=mindmeister&redirect_uri=https://${chrome.runtime.id}.chromiumapp.org&response_type=token`
      }, (url) => {
        let urlParams = new URLSearchParams(url.replace(/.*#/gi, ''))
        let token = urlParams.get('access_token')
        that.storeToken(token).then(() => resolve())
      })
    })
  }

  storeToken (token) {
    return new Promise((resolve, reject) => {
      let opts = {}
      opts[TokenStorageKey] = token
      chrome.storage.sync.set(opts, () => {
        resolve()
      })
    })
  }

  removeToken () {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.remove([TokenStorageKey], () => {
        resolve()
      })
    })
  }

  getToken () {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(TokenStorageKey, (options) => {
        let token = options[TokenStorageKey] || null
        if (token == null) reject(new Error('error'))
        else resolve(token)
      })
    })
  }

  checkToken () {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        let items = {
          access_token: token,
          method: 'mm.test.login'
        }
        let opts = {
          method: 'GET',
          url: 'https://www.mindmeister.com/services/rest/oauth2',
          params: items
        }
        Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
          if (ret.rsp.stat !== 'ok') {
            that.removeToken().then(() => {
              reject(reject(new Error('error')))
            })
          } else resolve()
        })
      }, (error) => {
        reject(error)
      })
    })
  }

  getUserId () {
    // todo
  }

  getMapNo (mapId) {
    let that = this
    return new Promise((resolve, reject) => {
      let data = { idea_id: mapId, isEmbeddedView: false, isPrintView: false, isPublicView: false }
      fetch('https://www.mindmeister.com/maps/content.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'x-csrf-token': that._csrfToken
        },
        body: JSON.stringify(data)
      })
        .then((resp) => resp.json())
        .then((ret) => {
          if (ret.map == null) {
            reject(new Error('error'))
          } else {
            resolve(ret)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  getMap (mapId) {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        let items = {
          access_token: token,
          method: 'mm.maps.getMap',
          map_id: mapId
        }
        let opts = {
          method: 'GET',
          url: 'https://www.mindmeister.com/services/rest/oauth2',
          params: items
        }
        Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
          if (ret.rsp.stat !== 'ok') reject(ret.err.msg)
          else resolve(ret.rsp)
        })
      }, (error) => { reject(error) })
    })
  }

  getBelongingMap (nodeId) {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        let items = {
          access_token: token,
          method: 'mm.ideas.getMap',
          idea_id: nodeId
        }
        let opts = {
          method: 'GET',
          url: 'https://www.mindmeister.com/services/rest/oauth2',
          params: items
        }
        Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
          if (ret.rsp.stat !== 'ok') reject(ret.err.msg)
          else resolve(ret.rsp.map.id)
        })
      }, (error) => { reject(error) })
    })
  }

  uploadImage (mapId, image) {
    let that = this
    return new Promise((resolve, reject) => {
      // that.getToken().then((token) => {
      // fetch(fileUrl).then((response) => response.arrayBuffer()).then((fileContent) => {
      // that.getFileByUrl(fileUrl).then((file) => {
      // var fileContent = new File([file], 'image.png')
      // const formData  = new FormData()
      /*
      formData.append('method', 'mm.files.add')
      formData.append('map_id', mapId)
      formData.append('file_type', 'idea_image')
      formData.append('file', fileContent)
      formData.append('access_token', token)
      */
      let data = { 'filetype': 'idea_image', 'source': 3, 'name': image.mindmeisterName, 'width': 23, 'height': 23 }
      fetch('https://www.mindmeister.com/generic_files/upload.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'x-csrf-token': that._csrfToken
        },
        body: JSON.stringify(data)
      })
        .then((resp) => resp.json())
        .then((ret) => {
          if (ret == null || ret.file == null || ret.file.id == null) {
            reject(new Error('Error uploading file'))
          } else {
            resolve(ret.file.id)
          }
        })
        .catch((error) => {
          reject(new Error(error.message))
        })
      /* var xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          var response = JSON.parse(this.responseText)
          if (response.file != null) resolve(response.file.id)
          else if (response.err != null) reject(response.err.msg)
        }
      })
      xhr.open('POST', 'https://www.mindmeister.com/services/rest/oauth2')
      xhr.send(formData) */
      // })
      // }, (error) => { reject(error) })
    })
  }

  addNodeToChangeList (changeList, mapId, node) {
    let nodeId = this.getCurrentNodeId()
    let changeId = this.getCurrentChangeId()
    let insertAction = {
      'client_id': changeId,
      'idea_id': nodeId,
      'entity': 'Idea',
      'operation': 'Add',
      'new_data': {
        'parentId': parseInt(node.parentId),
        'title': Utils.prettifyNodeText(node.text),
        'rank': 1,
        'layout': null,
        'isFree': false,
        'isFloating': false,
        'x': 398, // todo
        'y': 235
      }
    }
    changeList.addChange(insertAction)
    if (node.note != null) {
      let noteAction = {
        'client_id': this.getCurrentChangeId(),
        'idea_id': nodeId,
        'entity': 'Note',
        'operation': 'Edit',
        'new_data': {
          'note': node.note
        },
        'old_data': null
      }
      changeList.addChange(noteAction)
    }
    if (node.style != null) {
      let styleAction = {
        'client_id': this.getCurrentChangeId(),
        'entity': 'Style',
        'idea_id': parseInt(nodeId),
        'operation': 'Edit',
        'new_data': node.style
      }
      changeList.addChange(styleAction)
    }
    if (node.image != null) {
      let imageId = changeList.getImageId(node.image.mindmeisterName)
      let addImageAction = {
        'client_id': this.getCurrentChangeId(),
        'entity': 'Image',
        'idea_id': parseInt(nodeId),
        'operation': 'Add',
        'new_data': {
          'idea_image_id': imageId,
          'height': 23,
          'width': 23,
          'source': 3,
          'image_identifier': node.image.mindmeisterName
        }
      }
      changeList.addChange(addImageAction)
    }
  }

  addNodeToChangeListToRemove (changeList, mapId, node) {
    let nodeId = node.id
    let changeId = this.getCurrentChangeId()
    let removeAction = {
      'client_id': changeId,
      'idea_id': nodeId,
      'entity': 'Idea',
      'operation': 'Remove'
    }
    changeList.addChange(removeAction)
  }

  addNodeToChangeListAPI (changeList, mapId, node) {
    let nodeId = this.getCurrentNodeId()
    let changeId = this.getCurrentChangeId()
    let insertAction = {
      'id': changeId,
      'idea_id': nodeId,
      'type': 'Insert',
      'new_data': {
        'parentId': node.parentId,
        'title': Utils.prettifyNodeText(node.text),
        'rank': 1,
        'isFree': false,
        'isFloating': false,
        'offsetX': 0,
        'offsetY': 0,
        'x': 1173.93, // todo
        'isBoundary': false,
        'comments': [],
        'attachments': [],
        'id': nodeId,
        'parent': node.parentId, // todo
        'pos': [1173.93, 212.81]} // todo
    }
    if (node.note != null) insertAction.new_data.note = node.note
    changeList.addChange(insertAction)
    if (node.style != null) {
      let styleAction = {
        'id': this.getCurrentChangeId(),
        'idea_id': nodeId,
        'type': 'TextStyle',
        'new_data': {
          'style': node.style
        }
      }
      styleAction['new_data']['style']['id'] = nodeId
      changeList.addChange(styleAction)
    }
    if (node.image != null) {
      let imageId = changeList.getImageId(node.image.mindmeisterName)
      let addImageAction = {
        'id': this.getCurrentChangeId(),
        'idea_id': nodeId,
        'type': 'AddImage',
        'new_data':
          {'idea_image_id': imageId}
      }
      let resizeImageAction = {
        'id': this.getCurrentChangeId(),
        'idea_id': nodeId,
        'type': 'ResizeImage',
        'new_data': {
          'idea_image_id': imageId,
          'height': 23,
          'position': 3,
          'width': 23
        }
      }
      changeList.addChange(addImageAction)
      changeList.addChange(resizeImageAction)
    }
  }

  modifyNodeToChangeList (changeList, mapId, node) {
    if (node.style != null) {
      let styleAction = {
        'client_id': this.getCurrentChangeId(),
        'entity': 'Style',
        'idea_id': parseInt(node.id),
        'operation': 'Edit',
        'new_data': node.style
      }
      changeList.addChange(styleAction)
    }
    if (node.image != null) {
      let imageId = changeList.getImageId(node.image.mindmeisterName)
      let addImageAction = {
        'client_id': this.getCurrentChangeId(),
        'entity': 'Image',
        'idea_id': parseInt(node.id),
        'operation': 'Add',
        'new_data': {
          'idea_image_id': imageId,
          'height': 23,
          'width': 23,
          'source': 3,
          'image_identifier': node.image.mindmeisterName
        }
      }
      changeList.addChange(addImageAction)
    }
  }

  modifyNodeToChangeListAPI (changeList, mapId, node) {
    if (node.style != null) {
      let styleAction = {
        'id': this.getCurrentChangeId(),
        'idea_id': node.id,
        'type': 'TextStyle',
        'new_data': {
          'style': node.style
        }
      }
      styleAction['new_data']['style']['id'] = node.id
      changeList.addChange(styleAction)
    }
    if (node.image != null) {
      let imageId = changeList.getImageId(node.image.mindmeisterName)
      let addImageAction = {
        'id': this.getCurrentChangeId(),
        'idea_id': node.id,
        'type': 'AddImage',
        'new_data':
          {'idea_image_id': imageId}
      }
      let resizeImageAction = {
        'id': this.getCurrentChangeId(),
        'idea_id': node.id,
        'type': 'ResizeImage',
        'new_data': {
          'idea_image_id': imageId,
          'height': 23,
          'position': 3,
          'width': 23
        }
      }
      changeList.addChange(addImageAction)
      changeList.addChange(resizeImageAction)
    }
  }

  uploadNeccesaryImagesForChangeList (mapId, changeList) {
    let that = this
    return new Promise((resolve, reject) => {
      let promiseList = []
      changeList.images.forEach(i => {
        // eslint-disable-next-line promise/param-names
        promiseList.push(new Promise((res, rej) => {
          that.uploadImage(mapId, i).then(imageId => {
            changeList.setImageId(i.mindmeisterName, imageId)
            res()
          })
        }))
      })
      if (promiseList.length === 0) {
        resolve()
      } else {
        Promise.all(promiseList).then(() => {
          resolve()
        })
      }
    })
  }

  uploadNeccesaryImagesForChangeListAPI (mapId, changeList) {
    let that = this
    return new Promise((resolve, reject) => {
      let promiseList = []
      changeList.images.forEach(i => {
        // eslint-disable-next-line promise/param-names
        promiseList.push(new Promise((resolveInner, rejectInner) => {
          that.uploadImage(mapId, i).then(imageId => {
            changeList.setImageId(i.mindmeisterName, imageId)
            resolveInner()
          }).catch(rejectInner)
        }))
      })
      if (promiseList.length === 0) {
        resolve()
      } else {
        Promise.all(promiseList).then(resolve).catch(reject)
      }
    })
  }

  addNodes (mapId, nodes) {
    let that = this
    return new Promise((resolve, reject) => {
      let changeList = new ChangeList()
      nodes.forEach((n) => {
        if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image)
      })
      this.uploadNeccesaryImagesForChangeList(mapId, changeList).then(() => {
        nodes.forEach((n) => {
          this.addNodeToChangeList(changeList, mapId, n)
        })
        that.doChanges(mapId, changeList.changes).then(() => {
          resolve('ok')
        })
      })
    })
  }

  addNode (mapId, nodes) {
    let that = this
    return new Promise((resolve, reject) => {
      let changeList = new ChangeList()
      nodes.forEach((n) => {
        this.addNodeToChangeList(changeList, mapId, n)
      })
      that.doChanges(mapId, changeList.changes).then(() => {
        resolve('ok')
      })
    })
  }

  removeNodes (mapId, nodes) {
    let that = this
    return new Promise((resolve, reject) => {
      let changeList = new ChangeList()
      nodes.forEach((n) => {
        this.addNodeToChangeListToRemove(changeList, mapId, n)
      })
      that.doChanges(mapId, changeList.changes).then(() => {
        resolve('ok')
      })
    })
  }

  modifyNodes (mapId, nodes) {
    let that = this
    return new Promise((resolve, reject) => {
      let changeList = new ChangeList()
      nodes.forEach((n) => {
        if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image)
      })
      this.uploadNeccesaryImagesForChangeList(mapId, changeList).then(() => {
        nodes.forEach((n) => {
          this.modifyNodeToChangeList(changeList, mapId, n)
        })
        that.doChanges(mapId, changeList.changes).then(() => {
          resolve('ok')
        })
      })
    })
  }

  doChanges (mapId, changes) {
    let that = this
    return new Promise((resolve, reject) => {
      let data = {'changes': changes, 'revision': 999, 'root_id': parseInt(mapId)}
      fetch('https://www.mindmeister.com/panda/maps/do.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'x-csrf-token': that._csrfToken
        },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(ret => {
          if (ret.errors != null && ret.errors.length > 0) {
            reject(new Error(ret.errors[0]))
          } else {
            resolve()
          }
        })
        .catch(error => {
          reject(new Error(error.message))
        })
    })
  }

  doChangesAPI (mapId, changes) {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        let items = {
          method: 'mm.realtime.do',
          map_id: mapId,
          data: JSON.stringify(changes),
          access_token: token,
          client_revision: 999999
        }
        let opts = {
          method: 'POST',
          url: 'https://www.mindmeister.com/services/rest/oauth2',
          params: items,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
          if (ret.rsp != null && ret.rsp.err != null) reject(ret.err.msg)
          else resolve()
        })
      }, (error) => { reject(error) })
    })
  }
  getFileByUrl (fileUrl) {
    // let that = this
    return new Promise((resolve, reject) => {
      fetch(fileUrl).then((response) => response.arrayBuffer()).then((response) => {
        resolve(response)
      })
    })
  }

  doActions (mapId, insertions = [], updates = [], deletions = []) {
    let that = this
    return new Promise((resolve, reject) => {
      try {
        let changeList = new ChangeList()
        updates.forEach((n) => {
          if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image)
        })
        insertions.forEach((n) => {
          if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image)
        })
        this.uploadNeccesaryImagesForChangeList(mapId, changeList).then(() => {
          insertions.forEach((n) => {
            this.addNodeToChangeList(changeList, mapId, n)
          })
          updates.forEach((n) => {
            this.modifyNodeToChangeList(changeList, mapId, n)
          })
          that.doChanges(mapId, changeList.changes).then(() => {
            resolve('ok')
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  createMindmapFromTemplate (fileUrl) {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        that.getFileByUrl(fileUrl).then((file) => {
          let url = 'https://www.mindmeister.com/services/rest/oauth2'
          let blob = new File([file], 'Template.mind')
          let data = new FormData()
          data.append('access_token', token)
          data.append('method', 'mm.maps.import')
          data.append('file', blob)
          // let d = new URLSearchParams(data)
          fetch(url, {
            method: 'POST',
            body: data
          })
            .then(response => response.json())
            .then(json => {
              if (json.rsp != null) resolve(json.rsp.map.id)
              else if (json.err != null) reject(json.err.msg)
            })
            .catch(err => reject(err))
        })
      }, (error) => { reject(error) })
    })
  }

  getTokenJS () {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        resolve(token)
      }).catch(error => {
        reject(error)
      })
    })
  }

  linkShare (mapId) {
    let that = this
    return new Promise((resolve, reject) => {
      fetch(`https://www.mindmeister.com/sharing/link_share.json?root_id=${parseInt(mapId)}&editor=panda&on=true&write=true`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'x-csrf-token': that._csrfToken
        }
      })
        .then((resp) => resp.json())
        .then((ret) => {
          if (ret.url == null) {
            reject(new Error('error'))
          } else {
            resolve('ok')
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  linkShareAPI (mapId) {
    let that = this
    return new Promise((resolve, reject) => {
      that.getToken().then((token) => {
        let items = {
          access_token: token,
          method: 'mm.maps.linkShare',
          map_id: mapId,
          permission: 2
        }
        let opts = {
          method: 'GET',
          url: 'https://www.mindmeister.com/services/rest/oauth2',
          params: items,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }
        Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
          if (ret.rsp.stat !== 'ok') reject(ret.err.msg)
          else resolve('ok')
        })
      }, (error) => { reject(error) })
    })
  }
}

class ChangeList {
  constructor () {
    this._changeList = []
    this._images = []
  }
  get images () {
    return this._images
  }
  hasImage (image) {
    return this._images.find((i) => { return i.mindmeisterName === image.mindmeisterName }) != null
  }
  getImageId (mindmeisterName) {
    let img = this._images.find((i) => { return i.mindmeisterName === mindmeisterName })
    if (img == null || img.id == null) return null
    return img.id
  }
  addImage (image) {
    this._images.push({url: image.fileUrl, mindmeisterName: image.mindmeisterName, id: null})
  }
  setImageId (mindmeisterName, id) {
    let img = this._images.find((i) => { return i.mindmeisterName === mindmeisterName })
    if (img != null) img.id = id
  }
  addChange (change) {
    this._changeList.push(change)
  }
  get changes () {
    return this._changeList
  }
}

module.exports = MindmeisterBackground
