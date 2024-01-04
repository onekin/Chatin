const Utils = require('../utils/Utils')
const { v4: uuidv4 } = require('uuid')
const ChatGPTModeStorageKey = 'CHATGPT_MODE'
const ChatGPTAPIKeyStorageKey = 'CHATGPT_API_KEY'

class ChatGPTBackground {
  constructor () {
    this._mode = null
  }
  init () {
    let that = this
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.scope === 'chatgptClient') {
        if (message.action === 'processInBackground') {
          if (message.method === 'performQuestion') {
            that.performQuestion(message.args.question).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error.message}))
          } else if (message.method === 'getMode') {
            that.getMode().then((mode) => sendResponse({response: mode}), (error) => sendResponse({error: error.message}))
          } else if (message.method === 'setMode') {
            that.setMode(message.args.mode).then((rsp) => sendResponse({response: true}), () => sendResponse({error: true}))
          } else if (message.method === 'getApiKey') {
            that.getApiKey().then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          } else if (message.method === 'setApiKey') {
            that.setApiKey(message.args.apiKey).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
          }
        }
        return true
      }
    })
  }
  getMode () {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(ChatGPTModeStorageKey, (options) => {
        let mode = options[ChatGPTModeStorageKey] || null
        resolve(mode || 'chatgptLoginMode')
      })
    })
  }
  setMode (mode) {
    return new Promise((resolve, reject) => {
      let opts = {}
      opts[ChatGPTModeStorageKey] = mode
      chrome.storage.sync.set(opts, () => {
        resolve()
      })
    })
  }

  async performQuestion (question) {
    let mode = await this.getMode()
    switch (mode) {
      case 'chatgptLoginMode':
        return this.performQuestionLogin(question)
      case 'chatgptApiKeyMode':
        return this.performQuestionAPIKey(question)
    }
  }
  /**
   * LOGIN MODE
   */
  async getToken () {
    let opts = {
      method: 'GET',
      url: 'https://chat.openai.com/api/auth/session'
    }
    try {
      let resp = await Utils.performRequest(opts)
      let ret = await resp.json()
      return ret.accessToken || null
    } catch (error) {
      return Promise.reject(new Error('Unable to obtain ChatGPT token'))
    }
  }
  async removeConversation (conversationId, token) {
    let body = {
      'is_visible': false
    }
    let opts = {
      method: 'PATCH',
      url: 'https://chat.openai.com/backend-api/conversation/' + conversationId,
      params: JSON.stringify(body),
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
    try {
      let resp = await Utils.performRequest(opts)
      let ret = await resp.json()
      return ret
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async conversation (question, token) {
    let items = {
      'model': 'text-davinci-002-render',
      'parent_message_id': uuidv4(),
      'action': 'next',
      'messages': [
        {'id': uuidv4(),
          'role': 'user',
          'content': {
            'content_type': 'text',
            'parts': [question]
          }
        }
      ]
    }
    let opts = {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
    try {
      const resp = await fetch('https://chat.openai.com/backend-api/conversation', opts)
      if (!resp.ok) {
        return Promise.reject(new Error('Error communicating with ChatGPT'))
      }
      const reader = resp.body.getReader()
      let str = ''
      while (true) {
        const {value, done} = await reader.read()
        if (done) break
        let str2 = new TextDecoder().decode(value)
        str += str2
      }
      let dataChunks = str.split('\ndata:')
      if (dataChunks.length > 1) {
        let data = dataChunks[dataChunks.length - 2].replace('data:', '')
        let dataJson
        try {
          dataJson = JSON.parse(data)
        } catch (error) {
          return Promise.reject(new Error(`Error parsing ChatGPT's answer: ${data}`))
        }
        return dataJson
      }
      return {}
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async performQuestionLogin (question) {
    try {
      let token = await this.getToken()
      if (token == null) return Promise.reject(new Error('Unable to obtain ChatGPT token'))
      let answer = await this.conversation(question, token)
      if (answer.message == null) return Promise.reject(new Error(`Error parsing ChatGPT's answer`))
      if (answer.conversation_id != null) this.removeConversation(answer.conversation_id, token)
      return answer.message.content.parts[0]
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /**
   * API KEY MODE
   */
  performQuestionAPIKey (question) {
    let that = this
    return new Promise((resolve, reject) => {
      that.getApiKey().then((apiKey) => {
        if (apiKey == null || apiKey === '') {
          reject(new Error('Missing API key. Please, provide one in the options page.'))
          return
        }
        let items = {
          'model': 'gpt-4-1106-preview',
          'messages': [
            {'role': 'user', 'content': question}
          ],
          'temperature': 0.7
        }
        let opts = {
          method: 'POST',
          url: 'https://api.openai.com/v1/chat/completions',
          params: JSON.stringify(items),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
          }
        }
        Utils.performRequest(opts).then((resp) => resp.json()).then((ret) => {
          if (ret.choices == null || ret.choices.length === 0) reject(new Error('No answer from ChatGPT'))
          else resolve(ret.choices[0].message.content)
        }).catch((error) => {
          try {
            error.response.json().then((err) => {
              if (err.error != null && err.error.message != null) reject(new Error(err.error.message))
              else reject(new Error('Unknown ChatGPT error'))
            })
          } catch (e) {
            reject(new Error('Unparsable response from ChatGPT'))
          }
        })
      })
    })
  }

  getApiKey () {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(ChatGPTAPIKeyStorageKey, (options) => {
        let token = options[ChatGPTAPIKeyStorageKey] || null
        resolve(token)
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
          resolve(true)
        })
      }).catch((error) => reject(error))
    })
  }
  testApiKey (key) {
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
        if (ret.data == null) reject(new Error('Invalid API key'))
        else resolve(true)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

module.exports = ChatGPTBackground
