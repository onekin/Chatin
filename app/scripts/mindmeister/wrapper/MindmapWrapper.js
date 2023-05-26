
const Locators = require('./Locators')

class MindmapWrapper {
  static getNodeById (id) {
    let locator = Locators.MINDMAP_NODE_BY_ID.replace('$1', `"${id}"`)
    let el = document.querySelector(locator)
    if (el == null) return null
    return new MindmapNode(el)
  }

  static getNodesByText (text) {
    let locator = Locators.MINDMAP_NODES
    let els = document.querySelectorAll(locator)
    let nodes = []
    els.forEach((el) => {
      let node = new MindmapNode(el)
      if (text === node.text) nodes.push(node)
    })
    return nodes
  }

  static getNodesByTextRegexp (regexp) {
    let locator = Locators.MINDMAP_NODES
    let els = document.querySelectorAll(locator)
    let nodes = []
    els.forEach((el) => {
      let node = new MindmapNode(el)
      if (regexp.test(node.text)) nodes.push(node)
    })
    return nodes
  }

  static getNodesByRGBBackgroundColor (color) {
    // todo
    let colorString = `rgb(${color.r}, ${color.g}, ${color.b})`
    let locator = Locators.MINDMAP_NODES
    let els = document.querySelectorAll(locator)
    let nodes = []
    els.forEach((el) => {
      let node = new MindmapNode(el)
      if (node.backgroundColor == null) return
      if (node.backgroundColor.toLowerCase().replace(/\s/g, '').trim() === colorString.toLowerCase().replace(/\s/g, '').trim()) nodes.push(node)
    })
    return nodes
  }
}

class MindmapNode {
  constructor (el) {
    this._domElement = el
  }

  get text () {
    return this._domElement.innerText.replace(/\n/g, ' ').trim()
  }
  get id () {
    return this._domElement.getAttribute('data-id')
  }
  get emojiIcon () {
    let locator = Locators.MINDMAP_NODE_ICON_EMOJI
    let icon = this._domElement.querySelector(locator)
    if (icon == null) return null
    let emoji = icon.getAttribute('aria-label')
    if (emoji == null) return null
    let parts = emoji.split(',')
    if (parts.length < 2) return null
    return parts[1].trim()
  }

  get element () {
    return this._domElement
  }
  getIconElement () {
    let locator = Locators.MINDMAP_NODE_ICON
    let icon = this._domElement.querySelector(locator)
    return icon
  }

  get backgroundColor () {
    return this._domElement.style.backgroundColor || null
  }

  get children () {
  }
}

module.exports = MindmapWrapper
