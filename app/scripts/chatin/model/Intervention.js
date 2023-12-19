
class Intervention {
  constructor (text, nodeId, issue = null) {
    this._text = text
    this._effectivenessReasons = []
    this._feasibilityReasons = []
    this._nodeId = nodeId
    this._issue = issue
  }

  get text () {
    return this._text
  }

  get issue () {
    return this._issue
  }

  get nodeId () {
    return this._nodeId
  }
  addEffectivenessReason (reason) {
    this._effectivenessReasons.push(reason)
  }

  addFeasibilityReason (reason) {
    this._feasibilityReasons.push(reason)
  }

  get effectivenessReasons () {
    return this._effectivenessReasons
  }

  get feasibilityReasons () {
    return this._feasibilityReasons
  }

  findIssue (text, nodeId = null) {
    if (nodeId != null && this._nodeId === nodeId) return this
    else if (this._text === text) return this
    return null
  }
}

module.exports = Intervention
