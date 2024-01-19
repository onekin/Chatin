
const MindmeisterClient = require('./mindmeister/MindmeisterClient')
// const ChatGPTClient = require('./chatgpt/ChatGPTClient')
const MindmapManager = require('./chatin/MindmapManager')
const HomePageManager = require('./chatin/HomePageManager')
const Alerts = require('./utils/Alerts')
const Locators = require('./mindmeister/wrapper/Locators')

class ContentScript {
  constructor () {
    this._mindmapManager = new MindmapManager()
    this._homepageManager = new HomePageManager()
    // todo
  }

  initUrlManager () {
    let homepageUrlPattern = /https?:\/\/www\.mindmeister\.com\/(app\/folders|folders|maps|app\/maps)\/?/
    let mindmapUrlPattern = /https?:\/\/www\.mindmeister\.com\/(map|app\/map)\/\d+/
    if (homepageUrlPattern.test(window.location.href)) this._homepageManager.init()
    else if (mindmapUrlPattern.test(window.location.href)) this._mindmapManager.init()
  }

  init () {
    MindmeisterClient.checkToken().then(() => {
      // ChatGPTClient.getApiKey().then(() => {
      this.initUrlManager()
      // }, (error) => {
      //  Alerts.showErrorToast('Chatin requires an ChatGPT API key')
      // })
      setInterval(() => {
        let homepageUrlPattern = /https?:\/\/www\.mindmeister\.com\/(app\/folders|folders|maps|app\/maps)\/?/
        let chatinIcon = document.querySelector(Locators.CHATIN_MINDMAP_TEMPLATE)
        if (homepageUrlPattern.test(window.location.href) && chatinIcon === null) this._homepageManager.init()
      }, 2000)
    }, () => {
      Alerts.showErrorToast('Chatin requires that you authorize it to interact with your Mindmeister account')
    })
  }
}

const cs = new ContentScript()
cs.init()
