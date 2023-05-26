
class Problem {
  constructor (text, nodeId, parentProblem = null) {
    this._text = text
    this._subproblems = []
    this._consequences = []
    this._nodeId = nodeId
    this._parentProblem = parentProblem
    this._interventions = []
  }
  get text () {
    return this._text
  }

  get parentProblem () {
    return this._parentProblem
  }

  get nodeId () {
    return this._nodeId
  }
  get subproblems () {
    return this._subproblems
  }
  addSubproblem (subproblem) {
    this._subproblems.push(subproblem)
  }

  addIntervention (intervention) {
    this._interventions.push(intervention)
  }

  get consequences () {
    return this._consequences
  }

  addConsequence (consequence) {
    this._consequences.push(consequence)
  }

  findIssue (text, nodeId = null) {
    if (nodeId != null && this._nodeId === nodeId) return this
    else if (this._text === text) return this
    for (let i = 0; i < this._subproblems.length; i++) {
      let issue = this._subproblems[i].findIssue(text, nodeId)
      if (issue != null) return issue
    }
    for (let i = 0; i < this._consequences.length; i++) {
      let issue = this._consequences[i].findIssue(text, nodeId)
      if (issue != null) return issue
    }
    for (let i = 0; i < this._interventions.length; i++) {
      let issue = this._interventions[i].findIssue(text, nodeId)
      if (issue != null) return issue
    }
    return null
  }
}

module.exports = Problem
