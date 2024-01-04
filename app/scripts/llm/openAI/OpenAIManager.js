const _ = require('lodash')
const Alerts = require('../../utils/Alerts')

class OpenAIManager {
  static async pdfBasedQuestion ({apiKey, documents, callback, prompt}) {
    chrome.runtime.sendMessage({ scope: 'askLLM', cmd: 'openAI', data: {documents: documents, apiKey: apiKey, query: prompt} }, function (response) {
      if (chrome.runtime.lastError) {
        Alerts.showErrorToast('Unable to ask OpenAI: ' + chrome.runtime.lastError.message)
      } else if (response.res.error) {
        Alerts.showErrorToast('Unable to ask OpenAI: ' + response.res.error)
      } else {
        const jsonString = response.res.text
        console.log('ANSWER: ' + jsonString)
        let retrievedJSON = jsonString.substring(jsonString.indexOf('{') + 1)
        let lastIndex = retrievedJSON.lastIndexOf('}')
        retrievedJSON = retrievedJSON.substring(0, lastIndex)
        retrievedJSON = retrievedJSON.replace(/(\r\n|\n|\r)/gm, '')
        if (!retrievedJSON.startsWith('{')) {
          retrievedJSON = '{' + retrievedJSON
        }
        if (!retrievedJSON.endsWith('}')) {
          retrievedJSON = retrievedJSON + '}'
        }
        try {
          const jsonObject = JSON.parse(retrievedJSON)
          if (_.isFunction(callback)) {
            callback(jsonObject)
          }
        } catch (err) {
          Alerts.errorAlert({
            text: 'Please try again. Try to repeat the question. Provided answer has been: ' + retrievedJSON,
            title: 'Error parsing the answer'
          })
        }
      }
    })
  }
}

module.exports = OpenAIManager
