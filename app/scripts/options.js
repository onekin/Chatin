
const $ = require('jquery')
const _ = require('lodash')
window.$ = $

const MindmeisterClient = require('./mindmeister/MindmeisterClient')
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
      Alerts.showOptionsToast('Authorization with Mindmeister done successfully')
    }).catch((error) => {
      Alerts.showErrorToast(error.message)
    })
  }
})

document.querySelector('#numberOfAuthorsParameterButton').addEventListener('click', () => {
  let currentValue = document.querySelector('#numberOfAuthorsParameterInput').value
  let messageLabel = document.querySelector('#numberOfAuthorsParameterMessage')
  if (checkNumberOfAuthorsParameter(currentValue)) {
    setNumberOfAuthorsParameter(currentValue, messageLabel)
  } else {
    messageLabel.innerHTML = 'Invalid parameter'
  }
})

MindmeisterClient.checkToken().then(() => {
  let div = document.getElementById('mindmeisterEnable')
  div.className = div.className.replace('disabled', 'enabled')
  let aux = document.getElementById('mindmeisterEnableCheckbox')
  aux.checked = true
  aux.disabled = true
})

if (window.location.href.includes('pages/options.html')) {
  const defaultLLM = 'openAI'
  // Storage type
  document.querySelector('#LLMDropdown').addEventListener('change', (event) => {
    // Get value
    if (event.target.selectedOptions && event.target.selectedOptions[0] && event.target.selectedOptions[0].value) {
      setLLM(event.target.selectedOptions[0].value)
      // Show/hide configuration for selected storage
      showSelectedLLMConfiguration(event.target.selectedOptions[0].value)
    }
  })

  chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, ({ llm = defaultLLM }) => {
    document.querySelector('#LLMDropdown').value = llm || defaultLLM
    showSelectedLLMConfiguration(llm || defaultLLM)
  })

  chrome.runtime.sendMessage({ scope: 'parameterManager', cmd: 'getNumberOfAuthorsParameter' }, ({ parameter }) => {
    if (parameter && parameter !== '') {
      document.querySelector('#numberOfAuthorsParameterInput').value = parameter
    } else {
      document.querySelector('#numberOfAuthorsParameterInput').value = 3
      setNumberOfAuthorsParameter(3)
    }
  })

  // Get all the buttons with the same class name
  const validationButtons = document.getElementsByClassName('APIKeyValidationButton')
  // Iterate over the buttons and add a listener to each button
  Array.from(validationButtons).forEach(button => {
    button.addEventListener('click', () => {
      let selectedLLM = document.querySelector('#LLMDropdown').value
      let button = document.querySelector('#' + selectedLLM + '-APIKeyValidationButton')
      if (button.innerHTML === 'Change API Key value') {
        let input = document.querySelector('#' + selectedLLM + '-APIKey')
        input.disabled = false
        button.innerHTML = 'Save'
      } else {
        let apiKey = document.querySelector('#' + selectedLLM + '-APIKey').value
        if (selectedLLM && apiKey) {
          setAPIKey(selectedLLM, apiKey)
        }
      }
    })
  })
}

function setLLM (llm) {
  chrome.runtime.sendMessage({
    scope: 'llm',
    cmd: 'setSelectedLLM',
    data: {llm: llm}
  }, ({llm}) => {
    console.debug('LLM selected ' + llm)
  })
}

function showSelectedLLMConfiguration (selectedLLM) {
  // Hide all storage configurations
  let APIKeyConfigurationCards = document.querySelectorAll('.APIKey-Configuration')
  APIKeyConfigurationCards.forEach((APIKeyConfigurationCard) => {
    APIKeyConfigurationCard.setAttribute('aria-hidden', 'true')
  })
  // Show corresponding selected LLM configuration card
  let selectedLLMConfiguration = document.querySelector('#' + selectedLLM + '-ApiKeyContainer')
  chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getAPIKEY', data: selectedLLM }, ({ apiKey }) => {
    if (apiKey && apiKey !== '') {
      console.log('Retrieved API Key' + apiKey)
      let input = document.querySelector('#' + selectedLLM + '-APIKey')
      input.value = apiKey
      input.disabled = true
      let button = document.querySelector('#' + selectedLLM + '-APIKeyValidationButton')
      button.innerHTML = 'Change API Key value'
    } else {
      console.log('No retrieved API Key')
      document.querySelector('#' + selectedLLM + '-APIKey').value = ''
      document.querySelector('#' + selectedLLM + '-APIKey').placeholder = 'No API Key stored'
    }
  })
  if (_.isElement(selectedLLMConfiguration)) {
    selectedLLMConfiguration.setAttribute('aria-hidden', 'false')
  }
}

function setAPIKey (selectedLLM, apiKey) {
  chrome.runtime.sendMessage({
    scope: 'llm',
    cmd: 'setAPIKEY',
    data: {llm: selectedLLM, apiKey: apiKey}
  }, ({apiKey}) => {
    console.log('APIKey stored ' + apiKey)
    let button = document.querySelector('#' + selectedLLM + '-APIKeyValidationButton')
    button.innerHTML = 'Change API Key value'
    let input = document.querySelector('#' + selectedLLM + '-APIKey')
    input.disabled = true
  })
}

function setNumberOfAuthorsParameter (numberOfAuthorsParameter, messageLabel) {
  chrome.runtime.sendMessage({
    scope: 'parameterManager',
    cmd: 'setNumberOfAuthorsParameter',
    data: {numberOfAuthorsParameter: numberOfAuthorsParameter}
  }, ({numberOfAuthorsParameter}) => {
    console.debug('setNumberOfAuthorsParameter ' + numberOfAuthorsParameter)
    if (messageLabel) {
      messageLabel.innerHTML = 'Value saved'
    }
  })
}

function checkNumberOfAuthorsParameter (parameter) {
  if (parameter <= 10) {
    return true
  } else {
    return false
  }
}
