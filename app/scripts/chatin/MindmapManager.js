
const MindmapWrapper = require('../mindmeister/wrapper/MindmapWrapper')
const TemplateNodes = require('./TemplateNodes')
const ModelDefaultValues = require('./ModelDefaultValues')
const MindmeisterClient = require('../mindmeister/MindmeisterClient')
const ChatGPTClient = require('../chatgpt/ChatGPTClient')
const Alerts = require('../utils/Alerts')
const MindmapContentParser = require('../mindmeister/wrapper/MindmapContentParser')
const ProcessQuestions = require('./ProcessQuestions')
const Consequence = require('./model/Consequence')
const Intervention = require('./model/Intervention')
const Problem = require('./model/Problem')
const PromptStyles = require('./PromptStyles')
const IconsMap = require('./IconsMap')
const Utils = require('../utils/Utils')

class MindmapManager {
  constructor () {
    let that = this
    this._mapId = null
    this._processModes = [
      { name: 'PROBLEM_DEEPEN',
        templateNodeText: TemplateNodes.PROBLEM_DEEPEN_MODE,
        mindmapNode: null,
        onEnable: () => { that.enableProblemDeepen() },
        enabled: false
      },
      { name: 'RELEVANCE_MAPPING',
        templateNodeText: TemplateNodes.RELEVANCE_MAPPING_MODE,
        mindmapNode: null,
        onEnable: () => { that.enableRelevanceMapping() },
        enabled: false
      },
      { name: 'SOLUTION_MAPPING',
        templateNodeText: TemplateNodes.SOLUTION_MAPPING_MODE,
        mindmapNode: null,
        onEnable: () => { that.enableSolutionMapping() },
        enabled: false
      }
    ]
    this._styles = null
    this._variables = []
    this._scopingAnalysis = null
    this._mindmapParser = null
    this._problems = []
  }
  init () {
    let that = this
    let urlRegexp = /https?:\/\/www\.mindmeister\.com\/(map|app\/map)\/(\d+)($|\/|\?|#)/
    let m = window.location.href.match(urlRegexp)
    if (m == null || m.length < 3) return
    let nodeId = m[2]
    let node = MindmapWrapper.getNodeById(nodeId)
    if (node == null) {
      setTimeout(() => {
        that.init()
      }, 100)
      return
    }
    this.isChatinMap().then(() => {
      Alerts.showLoadingWindow('Loading...')
      // the id in the url can be other node but the root, so obtain the root node id
      /* MindmeisterClient.getBelongingMap(nodeId).then((mapId) => {
        that._mapId = mapId
      }, (error) => {
        Alerts.showErrorToast(error)
      }) */
      that._mapId = nodeId
      // todo - this is just a workaround for the prototype
      setTimeout(() => {
        Alerts.closeLoadingWindow()
        // this.addModeManager()
        // this.initQuestionManager()
        // this.initAnswerManager()
        that.initChangeManager()
      }, 5000)
    })
  }
  isChatinMap () {
    // current implementation checks only the ui map (sync), but future implementations could require async checkings
    return new Promise((resolve, reject) => {
      let found = true
      Object.keys(TemplateNodes).forEach((k) => {
        let nodes = MindmapWrapper.getNodesByText(TemplateNodes[k])
        if (nodes == null || nodes.length === 0) {
          found = false
        }
      })
      if (found) {
        resolve()
      } else {
        reject(new Error('Template nodes not found in the map'))
      }
    })
  }

  initChangeManager () {
    let that = this
    let rootNode = MindmapWrapper.getNodeById(this._mapId)
    if (rootNode == null) {
      setTimeout(() => {
        that.initChangeManager()
      }, 100)
      return
    }
    let parent = rootNode.element.parentNode
    let obs = new MutationObserver((mutations) => {
      let newNodes = mutations.find((m) => {
        let addedNodes = Array.from(m.addedNodes)
        let mapNodes = addedNodes.find((n) => { return n.hasAttributes('data-id') })
        return mapNodes != null
      })
      if (newNodes) {
        that.addModeManager()
        that.addAnswerClickManager()
        that.addQuestionClickManager()
      }
    })
    let config = { childList: true, subtree: true }
    obs.observe(parent, config)
    // obs.observe(document, config)
    this.addModeManager()
    this.addAnswerClickManager()
    this.addQuestionClickManager()
  }
  /**
   *  Process mode management
   */
  addModeManager () {
    let that = this
    let processModeNodes = MindmapWrapper.getNodesByText(TemplateNodes.PROCESS_MODE)
    if (processModeNodes == null || processModeNodes.length !== 1) return
    that._processModes.forEach((m) => {
      let modeNodes = MindmapWrapper.getNodesByText(m.templateNodeText)
      if (modeNodes == null || modeNodes.length !== 1) return
      let modeNode = modeNodes[0]
      m.mindmapNode = modeNode
      if (m.mindmapNode.classList != null) return
      let iconEl = modeNode.getIconElement()
      if (iconEl == null || (iconEl.classList != null && iconEl.classList.contains('chatin_mode'))) return
      iconEl.classList.add('chatin_mode')
      iconEl.style.removeProperty('pointer-events')
      iconEl.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        that.onClickMode(m)
      })
    })
  }
  modeEnableChanges (mode) {
    let nodes = []
    this._processModes.forEach((m) => {
      if (m.name === mode.name) {
        nodes.push({
          id: m.mindmapNode.id,
          image: IconsMap['tick-enabled']
        })
      } else {
        nodes.push({
          id: m.mindmapNode.id,
          image: IconsMap['tick-disabled']
        })
      }
    })
    return nodes
  }
  onClickMode (mode) {
    let that = this
    return new Promise((resolve, reject) => {
      that._processModes.forEach((m) => {
        if (m.name === mode.name) {
          m.onEnable()
        }
      })
    })
  }
  enableProblemDeepen () {
    let that = this
    that.parseMap().then((mapInfo) => {
      let scopingAnalysisNodes = this._mindmapParser.getNodesWithText(TemplateNodes.SCOPING_ANALYSIS)
      if (scopingAnalysisNodes == null || scopingAnalysisNodes.length === 0) return
      let scopingAnalysisNode = scopingAnalysisNodes[0]
      let question = ProcessQuestions.PROBLEM_STATEMENT
      let items = MindmapManager.extractQuestionItems(question)
      items.forEach((i) => {
        let v = that._variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
        if (v == null) return
        question = question.replace(`<${i}>`, v.value)
      })
      let missingItems = MindmapManager.extractQuestionItems(question)
      if (missingItems.length > 0) {
        Alerts.showErrorToast(`Missing variables: ${missingItems}`)
      } else {
        let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'PROBLEM_DEEPEN' }))
        MindmeisterClient.doActions(that._mapId, [{text: question, parentId: scopingAnalysisNode.id, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}], modeChanges).then(() => {
          Alerts.closeLoadingWindow()
        })
      }
    })
  }
  enableRelevanceMapping () {
    let that = this
    let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'RELEVANCE_MAPPING' }))
    MindmeisterClient.doActions(that._mapId, [], modeChanges).then(() => {
      // location.reload()
      Alerts.closeLoadingWindow()
    })
  }
  enableSolutionMapping () {
    let that = this
    let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'SOLUTION_MAPPING' }))
    MindmeisterClient.doActions(that._mapId, [], modeChanges).then(() => {
      // location.reload()
      Alerts.closeLoadingWindow()
    })
  }
  /**
   * Management of question nodes
   */
  addQuestionClickManager () {
    let that = this
    let questionNodes = that.getQuestionNodes()
    questionNodes.forEach((n) => {
      let iconElement = n.getIconElement()
      if (iconElement == null || iconElement.classList.contains('chatin_question')) return
      iconElement.classList.add('chatin_question')
      iconElement.style.removeProperty('pointer-events')
      iconElement.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        that.performQuestion(n)
      })
    })
  }
  getQuestionNodes () {
    let questionRegExp = /^(WHICH|HOW|WHY).+\?$/i
    let questionNodes = MindmapWrapper.getNodesByTextRegexp(questionRegExp)
    // todo -> check node style and icon
    return questionNodes
  }
  getStyle () {
    let that = this
    let style = that._styles
    let numberOfItems, description
    let numberOfItemsElement = style.find((s) => { return s.name === 'Number of items' })
    let descriptionElement = style.find((s) => { return s.name === 'Description' })
    if (ModelDefaultValues.Description.initial === descriptionElement.value) {
      description = ModelDefaultValues.Description.default
    } else {
      description = descriptionElement.value
    }
    if (ModelDefaultValues.NumberOfItems.initial === numberOfItemsElement.value) {
      numberOfItems = ModelDefaultValues.NumberOfItems.default
    } else {
      numberOfItems = numberOfItemsElement.value
    }
    return 'Please provide ' + numberOfItems + ' items with descriptions that ' + description
  }
  performQuestion (node) {
    Alerts.showLoadingWindow(`Waiting for ChatGPT's answer...`)
    let that = this
    this.parseMap().then(() => {
      let question = node.text + that.getStyle()
      ChatGPTClient.performQuestion(question).then((response) => {
        let concepts = that.parseChatGPTAnswer(response)
        if (concepts.length === 0) {
          Alerts.showErrorToast(`There was an error parsing ChatGPT's answer. Check browser console to see the whole answer.`)
          console.log(`ChatGPT's answer:`)
          console.log(response)
          return
        }
        let nodes = concepts.map((c) => {
          return {
            text: c.label,
            style: PromptStyles.AnswerItem,
            image: IconsMap['tick-disabled'],
            parentId: node.id,
            note: c.description
          }
        })
        MindmeisterClient.addNodes(that._mapId, nodes).then(() => {
          Alerts.closeLoadingWindow()
        })
      }).catch((error) => {
        if (error === 'Unable to obtain ChatGPT token') Alerts.showErrorToast(`You must be logged in ChatGPT`)
        else Alerts.showErrorToast(`ChatGPT error: ${error}`)
      })
    })
  }
  parseChatGPTAnswer (answer) {
    let nodes = []
    let pattern = /\d(\)|\.)[^:\-\.\n$]+(:|\-|\.|\n|$)/g
    let result = answer.match(pattern)
    if (result == null || result.length === 0) return []
    let resultNew = result.map((r) =>
      r.replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/\./g, '\\.')
        .replace(/\*/g, '\\*')
        .replace(/\-/g, '\\-')
    )
    let regexp = new RegExp('(' + resultNew.join('|') + ')', 'gi')
    let parts = answer.split(regexp)
    result.forEach((r, ind) => {
      let whole = r.replace(/\d(\)|\.)/, '').replace(':', '').replace('-', '').replaceAll('*', '')
      nodes.push({label: whole.trim(), description: parts[ind * 2 + 2].trim()})
    })
    return nodes
  }
  /**
   * Management of answer nodes
   */
  addAnswerClickManager () {
    let that = this
    let answerNodes = that.getAnswerNodes()
    answerNodes.forEach((n) => {
      let iconElement = n.getIconElement()
      if (iconElement == null || iconElement.classList.contains('chatin_answer')) return
      iconElement.classList.add('chatin_answer')
      iconElement.style.removeProperty('pointer-events')
      iconElement.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        that.onClickAnswer(n)
      })
    })
  }
  onClickAnswer (uiNode) {
    // todo
    let that = this
    Alerts.showLoadingWindow(`Loading...`)
    this.parseMap().then(() => {
      let issue = that.findIssue(uiNode.text, uiNode.id)
      if (issue == null) {
        Alerts.showErrorToast('An error occurred')
        return
      }
      let enabledMode = that._processModes.find((m) => { return m.enabled })
      if (enabledMode == null) {
        Alerts.showErrorToast('An error occurred')
        return
      }
      switch (enabledMode.name) {
        case 'PROBLEM_DEEPEN':
          that.onClickAnswerProblemDeepen(uiNode, issue)
          break
        case 'RELEVANCE_MAPPING':
          that.onClickAnswerRelevanceMapping(uiNode, issue)
          break
        case 'SOLUTION_MAPPING':
          that.onClickAnswerSolutionMapping(uiNode, issue)
          break
      }
    }).catch((error) => {
      Alerts.showErrorToast('An error occurred' + error)
    })
  }
  onClickAnswerProblemDeepen (uiNode, issue) {
    if (!(issue instanceof Problem)) {
      Alerts.showErrorToast('Invalid mode')
      return
    }
    let question = ProcessQuestions.PROBLEM_ANALYSIS
    question = question.replace('<problem>', issue.text)
    let items = MindmapManager.extractQuestionItems(question)
    items.forEach((i) => {
      let v = this._variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
      if (v == null) return
      question = question.replace(`<${i}>`, v.value)
    })
    let missingItems = MindmapManager.extractQuestionItems(question)
    if (missingItems.length > 0) {
      Alerts.showErrorToast(`Missing variables: ${missingItems}`)
    } else {
      MindmeisterClient.doActions(this._mapId,
        [{text: question, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}],
        [{id: issue.nodeId, image: IconsMap['tick-enabled']}]
      ).then(() => {
        Alerts.closeLoadingWindow()
        // location.reload()
      })
    }
  }
  onClickAnswerRelevanceMapping (uiNode, issue) {
    if (!(issue instanceof Problem)) {
      Alerts.showErrorToast('Invalid mode')
      return
    }
    let question = ProcessQuestions.RELEVANCE_MAPPING
    question = question.replace('<problem>', issue.text)
    let items = MindmapManager.extractQuestionItems(question)
    items.forEach((i) => {
      let v = this._variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
      if (v == null) return
      question = question.replace(`<${i}>`, v.value)
    })
    let missingItems = MindmapManager.extractQuestionItems(question)
    if (missingItems.length > 0) {
      Alerts.showErrorToast(`Missing variables: ${missingItems}`)
    } else {
      MindmeisterClient.doActions(this._mapId,
        [{text: question, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}],
        [{id: issue.nodeId, image: IconsMap['tick-enabled']}]
      ).then(() => {
        Alerts.closeLoadingWindow()
      })
    }
  }
  onClickAnswerSolutionMapping (uiNode, issue) {
    if (issue instanceof Problem || issue instanceof Consequence) {
      let question = ProcessQuestions.SOLUTION_ANALYSIS
      question = question.replace('<problem>', issue.text)
      let items = MindmapManager.extractQuestionItems(question)
      items.forEach((i) => {
        let v = this._variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
        if (v == null) return
        question = question.replace(`<${i}>`, v.value)
      })
      let missingItems = MindmapManager.extractQuestionItems(question)
      if (missingItems.length > 0) {
        Alerts.showErrorToast(`Missing variables: ${missingItems}`)
      } else {
        MindmeisterClient.doActions(this._mapId,
          [{text: question, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}],
          [{id: issue.nodeId, image: IconsMap['tick-enabled']}]
        ).then(() => {
          Alerts.closeLoadingWindow()
          // location.reload()
        })
      }
    } else if (issue instanceof Intervention) {
      let question1 = ProcessQuestions.SOLUTION_EFFECTIVENESS
      let question2 = ProcessQuestions.SOLUTION_FEASIBILITY
      question1 = question1.replace('<problem>', issue.issue.text)
      question1 = question1.replace('<intervention>', issue.text)
      question2 = question2.replace('<problem>', issue.issue.text)
      question2 = question2.replace('<intervention>', issue.text)

      let items = MindmapManager.extractQuestionItems(question1)
      items.forEach((i) => {
        let v = this._variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
        if (v == null) return
        question1 = question1.replace(`<${i}>`, v.value)
      })
      items = MindmapManager.extractQuestionItems(question2)
      items.forEach((i) => {
        let v = this._variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
        if (v == null) return
        question2 = question2.replace(`<${i}>`, v.value)
      })

      let missingItems = MindmapManager.extractQuestionItems(question1)
      let missingItems2 = MindmapManager.extractQuestionItems(question2)
      if (missingItems.length > 0 || missingItems2.length > 0) {
        Alerts.showErrorToast(`Missing variables: ${missingItems}`)
      } else {
        MindmeisterClient.doActions(this._mapId,
          [{text: question1, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}, {text: question2, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}],
          [{id: issue.nodeId, image: IconsMap['tick-enabled']}]
        ).then(() => {
          Alerts.closeLoadingWindow()
        })
      }
    }
  }
  getAnswerNodes () {
    // green nodes with tick (either disabled or enabled) icon
    let answerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItem.backgroundColor)
    let questionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(answerNodesColor)
    questionNodes = questionNodes.filter((n) => { return n.emojiIcon != null && (n.emojiIcon === IconsMap['tick-enabled'].mindmeisterName.replace(/:/g, '') || n.emojiIcon === IconsMap['tick-disabled'].mindmeisterName.replace(/:/g, '')) })
    return questionNodes
  }
  /**
   * Mind map parsing
   */
  parseVariables () {
    this._variables = []
    let questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.QUESTION_MODEL)
    if (questionModelNodes == null || questionModelNodes.length === 0) return // todo
    let questionModelNode = questionModelNodes[0]
    let variablesNodes = questionModelNode.getChildrenWithText(TemplateNodes.VARIABLES)
    if (variablesNodes == null || variablesNodes.length === 0) return // todo
    let variableNode = variablesNodes[0]
    let definedVariables = variableNode.children
    let variables = []
    definedVariables.forEach((v) => {
      let variableName = v.text
      let variableChildren = v.children
      if (variableChildren == null || variableChildren.length === 0) return
      let firstChild = variableChildren[0]
      variables.push({name: variableName, value: firstChild.text})
    })
    this._variables = variables
  }

  parseStyle () {
    this._styles = []
    let questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.QUESTION_MODEL)
    if (questionModelNodes == null || questionModelNodes.length === 0) return // todo
    let questionModelNode = questionModelNodes[0]
    let stylesNodes = questionModelNode.getChildrenWithText(TemplateNodes.STYLE)
    if (stylesNodes == null || stylesNodes.length === 0) return // todo
    let stylesNode = stylesNodes[0]
    let definedStyles = stylesNode.children
    let styles = []
    definedStyles.forEach((v) => {
      let styleName = v.text
      let styleChildren = v.children
      if (styleChildren == null || styleChildren.length === 0) return
      let firstChild = styleChildren[0]
      styles.push({name: styleName, value: firstChild.text})
    })
    this._styles = styles
  }

  parseStyle2 () {
    this._style = null
    let questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.QUESTION_MODEL)
    if (questionModelNodes == null || questionModelNodes.length === 0) return // todo
    let questionModelNode = questionModelNodes[0]
    let styleNodes = questionModelNode.getChildrenWithText(TemplateNodes.STYLE)
    if (styleNodes == null || styleNodes.length === 0) return // todo
    let styleNode = styleNodes[0]
    let styleNodeChildren = styleNode.children
    if (styleNodeChildren == null || styleNodeChildren.length === 0) return // todo
    this._style = styleNodeChildren[0].text
  }

  parseScopingAnalysis () {
    this.parseFirstLevelProblems()
  }
  parseFirstLevelProblems () {
    let that = this
    that._problems = []
    let scopingAnalysisNodes = this._mindmapParser.getNodesWithText(TemplateNodes.SCOPING_ANALYSIS)
    if (scopingAnalysisNodes == null || scopingAnalysisNodes.length === 0) return // todo
    let scopingAnalysisNode = scopingAnalysisNodes[0]
    let scopingAnalysisNodeChildren = scopingAnalysisNode.children
    // let problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    let problems = []
    scopingAnalysisNodeChildren.forEach((c) => {
      console.log(c.text)
      const problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
      if (problemPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          let pro = new Problem(p.text, p.id)
          that._problems.push(p.text)
          problems.push(pro)
          that.parseProblem(pro)
        })
      }
    })
    this._scopingAnalysis = problems
    console.log('Scoping analysis: ' + this._scopingAnalysis)
    console.log('Problems: ' + that._problems)
  }
  parseProblem (problem) {
    let that = this
    let node = this._mindmapParser.getNodeById(problem.nodeId)
    if (node == null) return
    let problemNodeChildren = node.children
    let subproblemsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
    problemNodeChildren.forEach((c) => {
      if (subproblemsPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          let subP = new Problem(p.text, p.id, problem)
          that._problems.push(p.text)
          problem.addSubproblem(subP)
          that.parseProblem(subP)
        })
      }
    })
    let consequencesPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.RELEVANCE_MAPPING)
    problemNodeChildren.forEach((c) => {
      if (consequencesPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          let cons = new Consequence(p.text, p.id, problem)
          problem.addConsequence(cons)
          that.parseConsequence(cons)
        })
      }
    })
    let interventionsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS)
    problemNodeChildren.forEach((c) => {
      if (interventionsPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          let int = new Intervention(p.text, p.id, problem)
          problem.addIntervention(int)
          that.parseIntervention(int)
        })
      }
    })
  }
  parseConsequence (consequence) {
    let that = this
    let node = this._mindmapParser.getNodeById(consequence.nodeId)
    if (node == null) return
    let consequenceNodeChildren = node.children
    let interventionsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS)
    consequenceNodeChildren.forEach((c) => {
      if (interventionsPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          let int = new Intervention(p.text, p.id, consequence)
          consequence.addIntervention(int)
          that.parseIntervention(int)
        })
      }
    })
  }
  parseIntervention (intervention) {
    let node = this._mindmapParser.getNodeById(intervention.nodeId)
    if (node == null) return
    let interventionNodeChildren = node.children
    let feasibilityReasonsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_FEASIBILITY)
    interventionNodeChildren.forEach((c) => {
      if (feasibilityReasonsPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          intervention.addFeasibilityReason(p.text)
        })
      }
    })
    let effectivenessReasonsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_EFFECTIVENESS)
    interventionNodeChildren.forEach((c) => {
      if (effectivenessReasonsPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          intervention.addEffectivenessReason(p.text)
        })
      }
    })
  }
  parseProcessMode () {
    this._processModes.forEach((m) => {
      if (m.mindmapNode == null) return
      let icon = m.mindmapNode.emojiIcon
      if (icon === IconsMap['tick-enabled'].mindmeisterName.replace(/:/g, '')) m.enabled = true
      else m.enabled = false
    })
  }
  parseMap () {
    let that = this
    return new Promise((resolve, reject) => {
      MindmeisterClient.getMap(that._mapId).then((mapInfo) => {
        that._mindmapParser = new MindmapContentParser(mapInfo)
        that.parseProcessMode()
        that.parseVariables()
        that.parseStyle()
        that.parseScopingAnalysis()
        resolve()
      })
    })
  }
  /**
   * Other functions
   */
  static extractQuestionItems (question) {
    let items = question.match(/<[^>]+>/g)
    if (items == null) return []
    return items.map((it) => it.replace(/</g, '').replace(/>/g, '').trim())
  }
  static createRegexpFromPrompt (text) {
    let questionPrompt = text.replace(/<[^>]+>/g, '.+').replace(/\?/g, '?')
    let promptRegExp = new RegExp(questionPrompt, 'gi')
    return promptRegExp
  }
  findIssue (text, nodeId) {
    let id = nodeId > 0 ? nodeId : null
    for (let i = 0; i < this._scopingAnalysis.length; i++) {
      let issue = this._scopingAnalysis[i].findIssue(text, id)
      if (issue != null) return issue
    }
    return null
  }
}

module.exports = MindmapManager
