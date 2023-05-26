
class Consequence {
  constructor (text, nodeId, problem = null) {
    this._text = text
    this._interventions = []
    this._nodeId = nodeId
    this._problem = problem
  }

  get text () {
    return this._text
  }

  get problem () {
    return this._problem
  }

  get nodeId () {
    return this._nodeId
  }
  get interventions () {
    return this._interventions
  }

  addIntervention (intervention) {
    this._interventions.push(intervention)
  }
  findIssue (text, nodeId = null) {
    if (nodeId != null && this._nodeId === nodeId) return this
    else if (this._text === text) return this
    for (let i = 0; i < this._interventions.length; i++) {
      let issue = this._interventions[i].findIssue(text, nodeId)
      if (issue != null) return issue
    }
    return null
  }
}

module.exports = Consequence
