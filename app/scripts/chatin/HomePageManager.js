
const MindmeisterClient = require('../mindmeister/MindmeisterClient')
const Alerts = require('../utils/Alerts')
const Locators = require('../mindmeister/wrapper/Locators')
const Utils = require('../utils/Utils')
class HomePageManager {
  constructor () {
    this._templates = {
      'chatin': 'resources/mindmapTemplates/RQScoping.mind'
    }
    // nothing todo here
  }

  importTemplate (template) {
    let that = this
    Alerts.showLoadingWindow('Creating mind map from template...')
    MindmeisterClient.createMindmapFromTemplate(chrome.runtime.getURL(that._templates[template])).then((mapId) => {
      Utils.sleep(2000).then(() => {
        MindmeisterClient.linkShare(mapId).then(() => {
          Alerts.closeLoadingWindow()
          window.location.href = `https://www.mindmeister.com/map/${mapId}`
        })
      })
    }).catch(() => {
      Alerts.showErrorToast('There was an error while creating the mind map')
    })
  }

  init () {
    let that = this
    let locator = Locators.NEW_MINDMAP_BUTTON
    let target = document.querySelector(locator)
    if (target == null) {
      window.setTimeout(() => {
        that.init()
      }, 500)
      return
    }

    that.insertTemplateButton()
    that.manageResize()
  }

  insertTemplateButton () {
    let that = this
    let locator = Locators.NEW_MINDMAP_BUTTON
    let target = document.querySelector(locator)
    let observerFunc = () => {
      let insertedTeplate = document.querySelector(Locators.CHATIN_MINDMAP_TEMPLATE)
      if (insertedTeplate != null) return
      let chatinTemplateInsertionPoint = document.querySelector(Locators.TEMPLATE_BUTTON_INSERTION_POINT)
      if (chatinTemplateInsertionPoint == null) return
      let templateElementToClone = document.querySelector(Locators.TEMPLATE_ELEMENT_TO_CLONE)
      let chatinTemplate = templateElementToClone.cloneNode(true)
      chatinTemplate.id = 'chatinTemplate'
      chatinTemplate.classList.add('chatinTemplate')
      chatinTemplate.querySelector(Locators.MINDMAP_TEMPLATE_NAME).innerText = 'Chatin'
      let templateImage = chatinTemplate.querySelector('svg')
      let templateImageContainer = templateImage.parentNode
      templateImageContainer.removeChild(templateImage)
      let chatinTemplateImage = document.createElement('img')
      // todo --> move to css
      chatinTemplateImage.style.height = '44px'
      chatinTemplateImage.src = chrome.runtime.getURL('images/arturo.png')
      templateImageContainer.style.height = ''
      templateImageContainer.style.width = ''
      templateImageContainer.appendChild(chatinTemplateImage)
      chatinTemplate.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        that.importTemplate('chatin')
      }, false)
      chatinTemplateInsertionPoint.insertBefore(chatinTemplate, chatinTemplateInsertionPoint.children[1])
    }
    let obs = new MutationObserver(function (mutations) {
      observerFunc()
    })
    if (target != null) {
      obs.observe(target, {
        attributes: true
      })
    }
    observerFunc()
  }

  manageResize () {
    let sizeCheck = () => {
      let referenceTemplateSelector = Locators.NEW_MINDMAP_BUTTON
      let referenceTemplate = document.querySelector(referenceTemplateSelector)
      if (referenceTemplate == null) return
      let chatinTemplateLocator = Locators.CHATIN_MINDMAP_TEMPLATE
      let templates = document.querySelectorAll(chatinTemplateLocator)
      templates.forEach((template) => {
        template.style.width = referenceTemplate.style.width
      })
    }
    window.setInterval(sizeCheck, 100)
  }
}

module.exports = HomePageManager
