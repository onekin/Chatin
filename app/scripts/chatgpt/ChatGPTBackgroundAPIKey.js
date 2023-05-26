const Utils = require('../utils/Utils')
const ChatGPTAPIKeyStorageKey = 'CHATGPT_API_KEY'

class ChatGPTBackground {
  constructor () {
    this._apiKey = null
  }
  init () {
    let that = this
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.scope === 'chatgptClient') {
        if (message.action === 'checkAPIKey') {
          // todo
        } else if (message.action === 'processInBackground') {
          if (message.method === 'performQuestion') {
            that.performQuestion(message.args.question).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'getApiKey') {
            that.getApiKey().then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'setApiKey') {
            that.setApiKey(message.args.apiKey).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          }
        }
        return true
      }
    })

    that.getApiKey().then((key) => {
      that._apiKey = key
    }, (error) => {
      // do nothing
    })
  }

  performQuestion (question) {
    let that = this
    return new Promise((resolve, reject) => {
      if (that._apiKey == null || that._apiKey === '') {
        reject('error')
        return
      }
      let items = {
        'model': 'gpt-3.5-turbo',
        'messages': [
          {'role': 'user',
            'content': question}
        ],
        'temperature': 0.7
      }
      let opts = {
        method: 'POST',
        url: 'https://api.openai.com/v1/chat/completions',
        params: JSON.stringify(items),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + that._apiKey
        }
      }
      Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
        if (ret.choices == null || ret.choices.length === 0) reject('error')
        else resolve(ret.choices[0].message.content)
      }).catch((error) => {
        try {
          error.response.json().then((err) => {
            if (err.error != null && err.error.message != null) reject(err.error.message)
            else reject(error)
          })
        } catch (e) {
          reject(error)
        }
      })
    })
  }

  testApiKey (key) {
    let that = this
    return new Promise((resolve, reject) => {
      let opts = {
        method: 'GET',
        url: 'https://api.openai.com/v1/models',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + key
        }
      }
      Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
        if (ret.data == null) reject('error')
        else {
          resolve('ok')
        }
      }).catch((error) => {
        reject('error')
      })
    })
  }

  getApiKey () {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(ChatGPTAPIKeyStorageKey, (options) => {
        let token = options[ChatGPTAPIKeyStorageKey] || null
        if (token == null) reject('error')
        else resolve(token)
      })
    })
  }

  setApiKey (key) {
    let that = this
    return new Promise((resolve, reject) => {
      that.testApiKey(key).then(() => {
        let opts = {}
        opts[ChatGPTAPIKeyStorageKey] = key
        chrome.storage.sync.set(opts, () => {
          that._apiKey = key
          resolve('ok')
        })
      }).catch((error) => { reject(error) })
    })
  }

}

module.exports = ChatGPTBackground
