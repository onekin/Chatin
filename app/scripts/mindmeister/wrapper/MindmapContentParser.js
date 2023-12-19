
class MindmapContentParser {
  constructor (mapInfo) {
    this._mapInfo = mapInfo
  }
  getNodeById (nodeId) {
    let nodeEl = this._mapInfo.ideas.idea.find((i) => {
      return i.id === nodeId
    })
    if (nodeEl == null) return null
    else return new MindmapContentParserNode(nodeEl, this)
  }

  getNodesWithText (text) {
    let nodeEls = this._mapInfo.ideas.idea.filter((i) => {
      return i.title === text
    })
    if (nodeEls == null) return []
    else {
      return nodeEls.map((n) => { return new MindmapContentParserNode(n, this) })
    }
  }

  getNodeChildren (parentId) {
    let nodeEls = this._mapInfo.ideas.idea.filter((i) => {
      return i.parent === parentId
    })
    if (nodeEls == null) return []
    else {
      return nodeEls.map((n) => { return new MindmapContentParserNode(n, this) })
    }
  }

  getNodeChildrenWithText (parentId, text) {
    let nodeEls = this._mapInfo.ideas.idea.filter((i) => {
      return i.parent === parentId && i.title === text
    })
    if (nodeEls == null) return []
    else {
      return nodeEls.map((n) => { return new MindmapContentParserNode(n, this) })
    }
  }
}

class MindmapContentParserNode {
  constructor (info, parser) {
    this._info = info
    this._parser = parser
  }

  get id () {
    return this._info.id
  }

  get text () {
    return this._info.title.replace(/\n/g, ' ').trim()
  }

  get children () {
    return this._parser.getNodeChildren(this.id)
  }

  getChildrenWithText (text) {
    return this._parser.getNodeChildrenWithText(this.id, text)
  }
}

module.exports = MindmapContentParser
