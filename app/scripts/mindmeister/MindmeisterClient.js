
class MindmeisterClient {
  static processInBackground (method, args) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({scope: 'mindmeisterClient', action: 'processInBackground', method: method, args: args}, (response) => {
        if (response.response != null) resolve(response.response)
        else if (response.error != null) reject(response.error)
      })
    })
  }
  static authorize () {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({scope: 'mindmeisterClient', action: 'authorize'}, (response) => {
        if (response.response != null) resolve(response.response)
        else if (response.error != null) reject(response.error)
      })
    })
  }
  static checkToken () {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({scope: 'mindmeisterClient', action: 'checkToken'}, (response) => {
        if (response.response != null) resolve(response.response)
        else if (response.error != null) reject(response.error)
      })
    })
  }
  static getMap (mapId) {
    return this.processInBackground('getMap', {mapId: mapId})
  }

  static getToken (mapId) {
    return this.processInBackground('getToken', {})
  }

  static createMindmapFromTemplate (templateFileUrl) {
    return this.processInBackground('createMindmapFromTemplate', {templateFileUrl: templateFileUrl})
  }

  static getBelongingMap (nodeId) {
    return this.processInBackground('getBelongingMap', {nodeId: nodeId})
  }

  static getAttachedFile (fileId) {
    return this.processInBackground('getAttachedFile', {fileId: fileId})
  }

  static changeNodeIcon (mapId, nodeId, icon) {
    return this.processInBackground('changeNodeIcon', {mapId: mapId, nodeId: nodeId, icon: icon})
  }

  static addNode (mapId, newNodes) {
    return this.processInBackground('addNode', {mapId: mapId, newNodes: newNodes})
  }

  static addNodes (mapId, newNodes) {
    return this.processInBackground('addNodes', {mapId: mapId, newNodes: newNodes})
  }

  static removeNodes (mapId, removeNodes) {
    return this.processInBackground('removeNodes', {mapId: mapId, removeNodes: removeNodes})
  }

  static modifyNodes (mapId, nodes) {
    return this.processInBackground('modifyNodes', {mapId: mapId, nodes: nodes})
  }
  static doActions (mapId, insertions, updates, deletions) {
    return this.processInBackground('doActions', {mapId: mapId, insertions: insertions, updates: updates, deletions: deletions})
  }
  static linkShare (mapId) {
    return this.processInBackground('linkShare', {mapId: mapId})
  }
}

module.exports = MindmeisterClient
