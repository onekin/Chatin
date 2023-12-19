
const MindmeisterClient = require('./mindmeister/MindmeisterClient')
// const ChatGPTClient = require('./chatgpt/ChatGPTClient')
const MindmapManager = require('./chatin/MindmapManager')
const HomePageManager = require('./chatin/HomePageManager')
const Alerts = require('./utils/Alerts')

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
    }, () => {
      Alerts.showErrorToast('Chatin requires that you authorize it to interact with your Mindmeister account')
    })
  }
}

const cs = new ContentScript()
cs.init()
