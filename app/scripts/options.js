
const $ = require('jquery')
window.$ = $

const MindmeisterClient = require('./mindmeister/MindmeisterClient')
const ChatGPTClient = require('./chatgpt/ChatGPTClient')
const Alerts = require('./utils/Alerts')

document.getElementById('mindmeisterEnableCheckbox').addEventListener('change', function () {
  var enabled = document.getElementById('mindmeisterEnableCheckbox').checked
  if (enabled) {
    MindmeisterClient.authorize().then(() => {
      var div = document.getElementById('mindmeisterEnable')
      div.className = div.className.replace('disabled', 'enabled')
      var aux = document.getElementById('mindmeisterEnableCheckbox')
      aux.checked = true
      aux.disabled = true
      Alerts.showToast('Authorization with Mindmeister done successfully')
    }).catch((error) => {
      Alerts.showErrorToast(error.message)
    })
  }
})

MindmeisterClient.checkToken().then(() => {
  let div = document.getElementById('mindmeisterEnable')
  div.className = div.className.replace('disabled', 'enabled')
  let aux = document.getElementById('mindmeisterEnableCheckbox')
  aux.checked = true
  aux.disabled = true
})

ChatGPTClient.getApiKey().then((key) => {
  if (key == null || key === '') return
  let div = document.getElementById('chatGPTAPIKey')
  div.value = key
})

document.getElementById('chatGPTAPIKeyValidationButton').addEventListener('click', (e) => {
  let div = document.getElementById('chatGPTAPIKey')
  Alerts.showLoadingWindow('Testing API key...')
  ChatGPTClient.setApiKey(div.value).then(() => {
    Alerts.showToast('The API key is valid. It has been stored successfully!')
  }).catch((err) => {
    Alerts.showErrorToast('Invalid API key. Please, provide a valid one or consider using the login option:' + err.message)
  })
})

ChatGPTClient.getMode().then((mode) => {
  let modeEl = document.querySelector(`.chatgptMode[value=${mode}]`)
  modeEl.classList.toggle('selectedMode')
})

let chatGPTModeElements = document.querySelectorAll('.chatgptMode')
chatGPTModeElements.forEach((el) => {
  el.addEventListener('click', () => {
    let selectedMode = document.querySelector('.selectedMode').getAttribute('value')
    let mode = el.getAttribute('value')
    if (selectedMode != null && selectedMode === mode) return
    ChatGPTClient.setMode(mode).then(() => {
      let enabledMode = document.querySelector('.selectedMode')
      enabledMode.classList.remove('selectedMode')
      el.classList.add('selectedMode')
    })
  })
})

document.querySelector('#ChatGPTApiKeyContainer').addEventListener('click', (e) => {
  e.stopPropagation()
})
