
class chatGPTClient {
  static processInBackground (method, args) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({scope: 'chatgptClient', action: 'processInBackground', method: method, args: args}, (response) => {
        if (response.response != null) resolve(response.response)
        else if (response.error != null) reject(response.error)
      })
    })
  }

  static performQuestion (question) {
    return this.processInBackground('performQuestion', {question: question})
  }

  static getApiKey () {
    return this.processInBackground('getApiKey')
  }

  static setApiKey (key) {
    return this.processInBackground('setApiKey', {apiKey: key})
  }

  static getMode () {
    return this.processInBackground('getMode')
  }

  static setMode (mode) {
    return this.processInBackground('setMode', {mode: mode})
  }
}

module.exports = chatGPTClient
