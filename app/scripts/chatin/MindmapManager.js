// import * as pdfjsLib from 'pdfjs-dist/webpack';
const LLMTextUtils = require('../utils/LLMTextUtils')
const OpenAIManager = require('../llm/openAI/OpenAIManager')
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
// const pdfjsLib = require('pdfjs-dist/webpack.mjs')

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

  kudeatzaileakHasieratu (that) {
    const checkDOM = setInterval(function () {
      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: true, subtree: true }
      // Callback function to execute when mutations are observed
      const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === 'childList') {
            if (mutation.addedNodes) {
              if (mutation.addedNodes.length > 0) {
                const node = mutation.addedNodes[0]
                if (node.innerText && node.innerText.includes('Attachments')) {
                  that.manageAttachmentsMenu(that, node)
                } else if (node.innerText && node.innerText.includes('Drag & drop files')) {
                  that.manageContextMenu(that)
                }
              }
            }
          }
        }
      }
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback)
      // Start observing the target node for configured mutations
      observer.observe(document.body, config)
      clearInterval(checkDOM)
    }, 1000)
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
      that._mapId = nodeId
      // todo - this is just a workaround for the prototype
      setTimeout(() => {
        Alerts.closeLoadingWindow()
        // this.addModeManager()
        // this.initQuestionManager()
        // this.initAnswerManager()
        that.initChangeManager()
      }, 5000)
      this.kudeatzaileakHasieratu(that)
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
   *  Manage editor changes
   */
  manageAttachmentsMenu (that, node) {
    // Example usage
    const classNames = Utils.extractNumbersFromClassNames(node.innerHTML)
    if (classNames.length > 0) {
      const window = node.querySelector('.knightrider-scrollview-scrollelement')
      const myDivs = window.querySelectorAll('div.kr-view.react-popover-trigger')
      let attachments = []
      Array.from(myDivs).forEach((div) => {
        let name = div.parentNode.children[1].children[0].innerText
        let id = Utils.extractNumbersFromClassNames(div.parentNode.innerHTML)
        if (id.length > 0) {
          id = id[0]
          let button = document.createElement('button')
          button.id = id
          button.className = 'chatin-attachment-button'
          button.innerText = 'Ask GPT'
          button.addEventListener('click', function (event) {
            // You can handle the click event here.
            event.stopPropagation()
            let questionNodeID = that.getCurrentNodeId()
            let questionNode = MindmapWrapper.getNodeById(questionNodeID)
            if (id && name && questionNode) {
              that.performPDFBasedQuestion(questionNode, id, name)
            }
          })
          div.parentNode.appendChild(button)
          attachments.push({name: name, id: id, button: button})
        }
      })
    }
  }
  manageContextMenu (that) {
    document.querySelectorAll('div').forEach(function (div) {
      const expectedStyle = 'width: 90px; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
      if (div.textContent.includes('Task') && div.getAttribute('style') === expectedStyle) {
        let questionNode = that.getCurrentNode()
        if (that.isQuestionNode(questionNode)) {
          let question = questionNode.innerText.replaceAll('\n', ' ')
          let purpose = that.getQuestionPurpose(question)
          if (purpose !== null && purpose !== 'problemStatement') {
            // Create a duplicate of the div
            let narrativeButton = div.cloneNode(true)
            // Optionally, you can change the content or attributes of the duplicate
            narrativeButton.textContent = 'Narrative' // Changing the text content to 'Aggregate'
            narrativeButton.style = 'width: 100%; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
            // Insert the duplicate after the original div
            div.parentNode.insertBefore(narrativeButton, div.nextSibling)
            narrativeButton.addEventListener('click', function (event) {
              console.log('click on Narrative')
              that.parseMap().then(() => {
                let questionNodeObject = that._mindmapParser.getNodeById(questionNode.getAttribute('data-id'))
                let narrative = that.getNarrative(that, questionNodeObject)
                that.performNarrativeQuestion(questionNode, narrative)
              })
            })
          }
          if (that.canBeAggregated()) {
            // Create a duplicate of the div
            let aggregateButton = div.cloneNode(true)
            // Optionally, you can change the content or attributes of the duplicate
            aggregateButton.textContent = 'Aggregate' // Changing the text content to 'Aggregate'
            aggregateButton.style = 'width: 100%; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
            // Insert the duplicate after the original div
            div.parentNode.insertBefore(aggregateButton, aggregateButton.nextSibling)
            aggregateButton.addEventListener('click', function (event) {
              console.log('click on Aggregate')
              that.parseMap().then(() => {
                let questionNodeObject = that._mindmapParser.getNodeById(questionNode.getAttribute('data-id'))
                that.performAggregationQuestion(questionNodeObject)
              })
            })
          }
        }
      }
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

  /**
   * Management of prompt development
   */
  // PROMPTS FOR GPT BASED QUESTION
  getPromptForGPTNodes (question) {
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
    let prompt
    const problemStatementPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    const problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
    if (problemPromptRE.test(question) || problemStatementPromptRE.test(question)) {
      prompt = that.getPromptForGPTProblemNodes(question, numberOfItems, description)
    }
    const relevancePromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.RELEVANCE_MAPPING)
    if (relevancePromptRE.test(question)) {
      prompt = that.getPromptForGPTRelevanceNodes(question, numberOfItems, description)
    }
    const solutionPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS)
    const feasabilityPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_FEASIBILITY)
    const effectivenessPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_EFFECTIVENESS)
    if (solutionPromptRE.test(question) || feasabilityPromptRE.test(question) || effectivenessPromptRE.test(question)) {
      prompt = that.getPromptForGPTSolutionNodes(question, numberOfItems, description)
    }
    return prompt
  }
  getPromptForGPTProblemNodes (question, numberOfItems, description) {
    let prompt = question + 'Please provide ' + numberOfItems + ' items with descriptions that ' + description
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:'
    prompt += '{\n' + '"problem": ['
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_problem_name":"name for the problem",' +
          '"description": "description of the problem",' +
          '}'
      } else {
        prompt += ',{"GPT_problem_name":"name for the problem",' +
          '"description": "description of the problem",' +
          '}'
      }
    }
    prompt += ',\n]\n' + '}'
    return prompt
  }
  getPromptForGPTRelevanceNodes (question, numberOfItems, description) {
    let prompt = question + 'Please provide ' + numberOfItems + ' items with descriptions that ' + description
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:'
    prompt += '{\n' + '"relevance": ['
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_relevance_name":"relevance name",' +
          '"description": "description of the relevance reason",' +
          '}'
      } else {
        prompt += ',{"GPT_relevance_name":"relevance name",' +
          '"description": "description of the relevance reason",' +
          '}'
      }
    }
    prompt += '\n]\n' + '}'
    return prompt
  }
  getPromptForGPTSolutionNodes (question, numberOfItems, description) {
    let prompt = question + '. Think some innovative ideas and please provide ' + numberOfItems + ' items with descriptions that ' + description
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:'
    prompt += '{\n' + '"solutions": ['

    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_solution_name":"name for the solution",' +
          '"description": "description of the problem",' +
          '}'
      } else {
        prompt += ',{"GPT_solution_name":"name for the solution",' +
          '"description": "description of the problem",' +
          '}'
      }
    }
    prompt += ',\n]\n' + '}'
    return prompt
  }
  // PROMPTS FOR GPT BASED QUESTION FOR ALTERNATIVE NODES
  getPromptForGPTAlternativeNodes (question, chatGPTBasedAnswers) {
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
    let prompt
    const problemStatementPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    const problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
    if (problemPromptRE.test(question) || problemStatementPromptRE.test(question)) {
      prompt = that.getPromptForGPTAlternativeProblemNodes(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    const relevancePromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.RELEVANCE_MAPPING)
    if (relevancePromptRE.test(question)) {
      prompt = that.getPromptForGPTAlternativeRelevanceNodes(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    const solutionPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS)
    const feasabilityPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_FEASIBILITY)
    const effectivenessPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_EFFECTIVENESS)
    if (solutionPromptRE.test(question) || feasabilityPromptRE.test(question) || effectivenessPromptRE.test(question)) {
      prompt = that.getPromptForGPTAlternativeSolutionNodes(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    return prompt
  }
  getPromptForGPTAlternativeProblemNodes (question, numberOfItems, description, chatGPTBasedAnswers) {
    let prompt = ''
    for (let i = 0; i < chatGPTBasedAnswers.length; i++) {
      if (i === 0) {
        prompt += '{"GPT_problem_name":' + chatGPTBasedAnswers[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + chatGPTBasedAnswers[i]._info.note.split('EXCERPT FROM')[0].trim().replaceAll('\n', ' ') + ',\n' +
          '}'
      } else {
        prompt += ',{"GPT_problem_name":' + chatGPTBasedAnswers[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + chatGPTBasedAnswers[i]._info.note.split('EXCERPT FROM')[0].trim().replaceAll('\n', ' ') + ',\n' +
          '}\n'
      }
    }
    prompt += '\n' + question + 'Please provide ' + numberOfItems + ' alternative items for the previous examples with descriptions that ' + description + '\n'
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:\n'
    prompt += '{\n' + '"problem": [\n'

    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_problem_name":"name for the problem",\n' +
          '"description": "description of the problem",\n' +
          '}'
      } else {
        prompt += ',{"GPT_problem_name":"name for the problem",\n' +
          '"description": "description of the problem",\n' +
          '}\n'
      }
    }
    prompt += ',\n]\n' + '}\n'
    return prompt
  }
  getPromptForGPTAlternativeRelevanceNodes (question, numberOfItems, description, chatGPTBasedAnswers) {
    let prompt = ''
    for (let i = 0; i < chatGPTBasedAnswers.length; i++) {
      if (i === 0) {
        prompt += '{"GPT_relevance_name":' + chatGPTBasedAnswers[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + chatGPTBasedAnswers[i]._info.note.split('EXCERPT FROM')[0].trim().replaceAll('\n', ' ') + ',\n' +
          '}\n'
      } else {
        prompt += ',{"GPT_relevance_name":' + chatGPTBasedAnswers[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + chatGPTBasedAnswers[i]._info.note.split('EXCERPT FROM')[0].trim().replaceAll('\n', ' ') + ',\n' +
          '}\n'
      }
    }
    prompt += '\n' + question + 'Please provide ' + numberOfItems + ' alternative items with descriptions that ' + description + '\n'
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:\n'
    prompt += '{\n' + '"relevance": [\n'
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_relevance_name":"relevance name",\n' +
          '"description": "description of the relevance reason",\n' +
          '}\n'
      } else {
        prompt += ',{"GPT_relevance_name":"relevance name",\n' +
          '"description": "description of the relevance reason",\n' +
          '}\n'
      }
    }
    prompt += '\n]\n' + '}\n'
    return prompt
  }
  getPromptForGPTAlternativeSolutionNodes (question, numberOfItems, description, chatGPTBasedAnswers) {
    let prompt = ''
    for (let i = 0; i < chatGPTBasedAnswers.length; i++) {
      if (i === 0) {
        prompt += '{"GPT_solution_name":' + chatGPTBasedAnswers[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + chatGPTBasedAnswers[i]._info.note.split('EXCERPT FROM')[0].trim().replaceAll('\n', ' ') + ',\n' +
          '}\n'
      } else {
        prompt += ',{"GPT_solution_name":' + chatGPTBasedAnswers[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + chatGPTBasedAnswers[i]._info.note.split('EXCERPT FROM')[0].trim().replaceAll('\n', ' ') + ',\n' +
          '}\n'
      }
    }
    prompt += '\n' + question + 'Please provide ' + numberOfItems + ' alternative items with descriptions that ' + description + '\n'
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:\n'
    prompt += '{\n' + '"solutions": [\n'
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_solution_name":"name for the solution",\n' +
          '"description": "description of the problem",\n' +
          '}'
      } else {
        prompt += ',{"GPT_solution_name":"name for the solution",\n' +
          '"description": "description of the problem",\n' +
          '}\n'
      }
    }
    prompt += ',\n]\n' + '}\n'
    return prompt
  }
  // PROMPTS FOR PDF BASED QUESTION
  getPromptForPDFBasedQuestion (question, chatGPTBasedAnswers) {
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
    let prompt
    const problemStatementPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    const problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
    if (problemPromptRE.test(question) || problemStatementPromptRE.test(question)) {
      prompt = that.getPDFBasedProblemPrompt(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    const relevancePromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.RELEVANCE_MAPPING)
    if (relevancePromptRE.test(question)) {
      prompt = that.getPDFBasedRelevancePrompt(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    const solutionPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS)
    const feasabilityPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_FEASIBILITY)
    const effectivenessPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_EFFECTIVENESS)
    if (solutionPromptRE.test(question) || feasabilityPromptRE.test(question) || effectivenessPromptRE.test(question)) {
      prompt = that.getPDFBasedSolutionPrompt(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    return prompt
  }
  getPDFBasedProblemPrompt (question, numberOfItems, description, chatGPTBasedAnswers) {
    let prompt = 'Based on the provided pdf, ' + question + 'Please provide ' + numberOfItems + ' items with descriptions that ' + description + ',\n'
    prompt += ' You have to provide the response in JSON format including each item in an array. The JSON should list a text excerpt of the paper for each problem detected in the problem, associated with the problem. You also have to provide another ' + numberOfItems + ' alternatives by your own. The format should be as follows:\n'
    prompt += '{\n' + '"problem": [\n'
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"problem_name":"name for the problem",\n' +
          '"excerpt": "[Excerpt from the provided text that justifies the existance of this problem]",\n' +
          '"description": "description of the problem",\n' +
          '}'
      } else {
        prompt += ',{"problem_name":"name for the problem",\n' +
          '"excerpt": "[Excerpt from the provided text that justifies the existance of this problem]",\n' +
          '"description": "description of the problem",\n' +
          '}\n'
      }
    }
    if (chatGPTBasedAnswers) {
      for (let i = 0; i < numberOfItems; i++) {
        if (i === 0) {
          prompt += '{"GPT_problem_name":"name for the problem",\n' +
            '"description": "description of the problem",\n' +
            '}'
        } else {
          prompt += ',{"GPT_problem_name":"name for the problem",\n' +
            '"description": "description of the problem",\n' +
            '}\n'
        }
      }
    }
    prompt += ',\n]\n' + '}\n'
    return prompt
  }
  getPDFBasedRelevancePrompt (question, numberOfItems, description, chatGPTBasedAnswers) {
    let prompt = 'Based on the provided pdf, ' + question + 'Please provide ' + numberOfItems + ' items with descriptions that ' + description + '\n'
    prompt += ' You have to provide the response in JSON format including each item in an array. The JSON should list a text excerpt of the paper for each problem detected in the problem, associated with the problem. You also have to provide another ' + numberOfItems + ' alternatives by your own. The format should be as follows:\n'
    prompt += '{\n' + '"relevance": [\n'
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"relevance_name":"relevance name",\n' +
          '"excerpt": "[Excerpt from the provided text that justifies the existance of this problem]",\n' +
          '"description": "description of the relevance reason",\n' +
          '}'
      } else {
        prompt += ',{"relevance_name":"relevance name",\n' +
          '"excerpt": "[Excerpt from the provided text that justifies the existance of this problem]",\n' +
          '"description": "description of the relevance reason",\n' +
          '}'
      }
    }
    if (chatGPTBasedAnswers) {
      for (let i = 0; i < numberOfItems; i++) {
        if (i === 0) {
          prompt += '{"GPT_relevance_name":"relevance name",\n' +
            '"description": "description of the relevance reason",\n' +
            '}\n'
        } else {
          prompt += ',{"GPT_relevance_name":"relevance name",\n' +
            '"description": "description of the relevance reason",\n' +
            '}\n'
        }
      }
    }
    prompt += '\n]\n' + '}\n'
    return prompt
  }
  getPDFBasedSolutionPrompt (question, numberOfItems, description, chatGPTBasedAnswers) {
    let prompt = 'Using the solutions and ideas in the provided pdf, ' + question + '. Think some innovative ideas and please provide ' + numberOfItems + ' items with descriptions that ' + description + '\n'
    prompt += ' You have to provide the response in JSON format including each item in an array. The JSON should list a text excerpt of the paper for each problem detected in the problem, associated with the problem. You also have to provide another ' + numberOfItems + ' alternatives by your own. The format should be as follows:\n'
    prompt += '{\n' + '"solutions": [\n'
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"solution_name":"name for the solution",\n' +
          '"excerpt": "[Excerpt from the provided text that justifies the existance of this problem]",\n' +
          '"description": "description of the problem",\n' +
          '}\n'
      } else {
        prompt += ',{"solution_name":"name for the solution",\n' +
          '"excerpt": "[Excerpt from the provided text that justifies the existance of this problem]",\n' +
          '"description": "description of the problem",\n' +
          '}\n'
      }
    }
    if (chatGPTBasedAnswers) {
      for (let i = 0; i < numberOfItems; i++) {
        if (i === 0) {
          prompt += '{"GPT_solution_name":"name for the solution",\n' +
            '"description": "description of the problem",\n' +
            '}'
        } else {
          prompt += ',{"GPT_solution_name":"name for the solution",\n' +
            '"description": "description of the problem",\n' +
            '}\n'
        }
      }
    }
    prompt += ',\n]\n' + '}'
    return prompt
  }
  // PROMPTS FOR AGGREGATION QUESTION
  getPromptForAggregation (question, nodes, number) {
    // let that = this
    let prompt = 'QUESTION=[ ' + question + ']\n'
    for (let i = 0; i < nodes.length; i++) {
      if (i === 0) {
        prompt += 'ANSWERS= {\n' +
          'node_name":' + nodes[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + nodes[i]._info.note.trim().replaceAll('\n', ' ') + ',\n' +
          '}'
      } else {
        prompt += ',{\n' +
          '"node_name":' + nodes[i]._info.title.replaceAll('\n', ' ') + ',\n' +
          '"description": ' + nodes[i]._info.note.trim().replaceAll('\n', ' ') + ',\n' +
          '}\n'
      }
    }
    prompt += 'Summarization. I want you to behave as an academic. I have provided a QUESTION above and then a set of answers with descriptions in a JSON. Answers might not be fully alternative but some nuisance might exists among them. I want you to cluster the set of answers in ' + number + ' clusters that encloses those answers that are semantically closer.' + '\n'
    prompt += ' You have to provide the response in JSON format including each clustered item in an array. The format should be as follows:\n'
    prompt += '{\n' + '"clusters": [\n'

    for (let i = 0; i < number; i++) {
      if (i === 0) {
        prompt += '{\n' +
          '"cluster_name":"cluster_name",\n' +
          '"description": "description of the cluster",\n' +
          '"clusteredItems": [a list of items with two keys as in the above answers, node_name and description of the node_name as it is in the above example]\n' +
          '}\n'
      } else {
        prompt += ',{\n' +
          '"cluster_name":"cluster_name",\n' +
          '"description": "description of the cluster",\n' +
          '"clusteredItems": [a list of items with two keys as in the above answers, node_name and description of the node_name as it is in the above example]\n' +
          '}\n'
      }
    }
    prompt += ',\n]\n' + '}\n'
    return prompt
  }
  getPromptForNarrative (question, narrative, variables) {
    // let that = this
    let practice = variables.find((v) => { return v.name === 'Practice' }).value
    let activity = variables.find((v) => { return v.name === 'Activity' }).value
    let prompt = 'I want you to behave as an academic. Next I will provide you with a RESEARCH QUESTION and a set of text chunks that provide the CONTEXT where the Research Question aroses. I want you to provide a coherent narrative that ends up in the question Research Question\n'
    prompt += 'RESEARCH QUESTION=[ ' + narrative.question + ']\n'
    if (narrative.problem) {
      let problems = narrative.problem.split(';')
      problems.pop()
      let currentProblem = problems.pop().split(':')
      prompt += 'CONTEXT=[ One of the problems that arise during' + activity + ' in ' + practice + 'is ' + currentProblem[0] + ', which means that ' + currentProblem[1] + '.\n'
      while (problems.length > 0) {
        let followingProblem = problems.pop().split(':')
        prompt += currentProblem[0] + ' occurs because ' + followingProblem[0] + ', which means that ' + followingProblem[1] + '\n'
        currentProblem = followingProblem
      }
    }
    if (narrative.relevance) {
      let relevances = narrative.relevance.split(';')
      relevances.pop()
      let currentRelevance = relevances.pop().split(':')
      prompt += 'This problem is relevant because consequences can be ' + currentRelevance[0] + ' which means that ' + currentRelevance[1] + '.\n'
      while (relevances.length > 0) {
        currentRelevance = relevances.pop().split(':')
        prompt += 'It is also relevant because ' + currentRelevance[0] + ', which means that ' + currentRelevance[1] + '\n'
      }
    }
    if (narrative.solution) {
      let solution = narrative.solution.split(':')
      prompt += 'This problem can be addressed by' + solution[0] + ' which means that ' + solution[1] + '.\n'
    }
    if (narrative.feasability) {
      let feasabilities = narrative.feasability.split(';')
      feasabilities.pop()
      let currentFeasability = feasabilities.pop().split(':')
      prompt += 'This solution can be implemented by ' + currentFeasability[0] + ' which means that ' + currentFeasability[1] + '.\n'
      while (feasabilities.length > 0) {
        currentFeasability = feasabilities.pop().split(':')
        prompt += 'It can also be implemented by ' + currentFeasability[0] + ', which means that ' + currentFeasability[1] + '\n'
      }
    }
    if (narrative.effectiveness) {
      let effectivenesses = narrative.effectiveness.split(';')
      effectivenesses.pop()
      let currentEffectiveness = effectivenesses.pop().split(':')
      prompt += 'This solution can help to ' + currentEffectiveness[0] + ' because ' + currentEffectiveness[1] + '.\n'
      while (effectivenesses.length > 0) {
        currentEffectiveness = effectivenesses.pop().split(':')
        prompt += 'This can also help to ' + currentEffectiveness[0] + ', because ' + currentEffectiveness[1] + '\n'
      }
    }
    return prompt
  }
  /**
   * Perform questions
   */
  performQuestion (node) {
    Alerts.showLoadingWindow(`Waiting for ChatGPT's answer...`)
    let that = this
    this.parseMap().then(() => {
      let questionNode = that._mindmapParser.getNodeById(node.id)
      let gptBasedNodes = questionNode.children.filter((c) => { return c._info.style === 'FFFFFF,100,0,0,2BD9D9,1,' })
      let prompt
      if (gptBasedNodes.length > 0) {
        prompt = that.getPromptForGPTAlternativeNodes(node.text, gptBasedNodes)
      } else {
        prompt = that.getPromptForGPTNodes(node.text)
      }
      console.log('prompt:\n ' + prompt)
      ChatGPTClient.getApiKey().then((key) => {
        if (key !== null && key !== '') {
          let callback = (json) => {
            Alerts.closeLoadingWindow()
            const gptItemsNodes = that.parseChatGPTAnswer(json)
            if (gptItemsNodes === null || gptItemsNodes.length === 0) {
              Alerts.showErrorToast(`There was an error parsing ChatGPT's answer. Check browser console to see the whole answer.`)
            }
            let labels, nodes
            // GPT Answers
            const gptProblemsLabels = gptItemsNodes.map((c) => { return c.label })
            let gptProblemsNodes = gptItemsNodes.map((c) => {
              return {
                text: c.label,
                style: PromptStyles.AnswerItem,
                image: IconsMap['tick-disabled'],
                parentId: node.id,
                note: c.description
              }
            })
            labels = gptProblemsLabels
            nodes = gptProblemsNodes
            MindmeisterClient.addNodes(that._mapId, nodes).then(() => {
              Alerts.closeLoadingWindow()
              if (this._processModes[0].enabled) {
                let repeatedItems = labels.filter(label => that._problems.includes(label))
                if (repeatedItems.length === 1) {
                  Alerts.showErrorToast(`The problem "${repeatedItems[0]}" is already in the mind map. It is a sign that the scope is already narrowing down`)
                } else if (repeatedItems.length > 1) {
                  Alerts.showErrorToast('The problem ' + repeatedItems.join(', ') + ' are already in the map. It is a sign that the scope is already narrowing down')
                }
              }
            })
          }
          OpenAIManager.gptQuestion({
            apiKey: key,
            prompt: prompt,
            callback: callback
          })
        } else {
          Alerts.showErrorToast('No API key found for ChatGPT')
        }
      }).catch((error) => {
        if (error === 'Unable to obtain ChatGPT token') Alerts.showErrorToast(`You must be logged in ChatGPT`)
        else Alerts.showErrorToast(`ChatGPT error: ${error}`)
      })
    })
  }
  performPDFBasedQuestion (node, id, name) {
    Alerts.showLoadingWindow(`Waiting for ChatGPT's answer...`)
    let that = this
    let chatGPTBasedAnswers = false
    this.parseMap().then(() => {
      let prompt = that.getPromptForPDFBasedQuestion(node.text, chatGPTBasedAnswers)
      console.log('prompt: ' + prompt)
      // Ensure workerSrc is set before loading the document
      // eslint-disable-next-line no-undef
      PDFJS.workerSrc = chrome.runtime.getURL('resources/pdfjs/build/pdf.worker.js')
      MindmeisterClient.getToken().then(token => {
        var myHeaders = new Headers()
        myHeaders.append('accept', 'application/pdf') // Changed to 'application/pdf'
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        }
        fetch('https://www.mindmeister.com/api/v2/files/' + id + '/attachment?access_token=' + token, requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            } else {
              return response.arrayBuffer()
            }
          })
          .then(pdfData => {
            // eslint-disable-next-line no-undef
            PDFJS.getDocument({ data: pdfData }).promise.then(async pdfDocument => {
              let documents = []
              documents = await LLMTextUtils.loadDocument(pdfDocument)
              ChatGPTClient.getApiKey().then((key) => {
                if (key !== null && key !== '') {
                  let callback = (json) => {
                    Alerts.closeLoadingWindow()
                    const { gptItemsNodes, pdfBasedItemsNodes } = that.parseChatGPTAnswerFromJSON(json, chatGPTBasedAnswers)
                    if ((gptItemsNodes === null || gptItemsNodes.length === 0) && pdfBasedItemsNodes.length === 0) {
                      Alerts.showErrorToast(`There was an error parsing ChatGPT's answer. Check browser console to see the whole answer.`)
                    }
                    let labels, nodes
                    // PDF Answers
                    const otherProblemsLabels = pdfBasedItemsNodes.map((c) => { return c.label })
                    let otherProblemsNodes = pdfBasedItemsNodes.map((c) => {
                      return {
                        text: c.label,
                        style: PromptStyles.AnswerItemPDFBased,
                        image: IconsMap['tick-disabled'],
                        parentId: node.id,
                        note: c.description + '\n\n EXCERPT FROM ' + name + ':\n' + c.excerpt
                      }
                    })
                    if (chatGPTBasedAnswers) {
                      // GPT Answers
                      const gptProblemsLabels = gptItemsNodes.map((c) => { return c.label })
                      let gptProblemsNodes = gptItemsNodes.map((c) => {
                        return {
                          text: c.label,
                          style: PromptStyles.AnswerItem,
                          image: IconsMap['tick-disabled'],
                          parentId: node.id,
                          note: c.description
                        }
                      })
                      labels = otherProblemsLabels.concat(gptProblemsLabels)
                      nodes = otherProblemsNodes.concat(gptProblemsNodes)
                    } else {
                      labels = otherProblemsLabels
                      nodes = otherProblemsNodes
                    }
                    MindmeisterClient.addNodes(that._mapId, nodes).then(() => {
                      Alerts.closeLoadingWindow()
                      if (this._processModes[0].enabled) {
                        let repeatedItems = labels.filter(label => that._problems.includes(label))
                        if (repeatedItems.length === 1) {
                          Alerts.showErrorToast(`The problem "${repeatedItems[0]}" is already in the mind map. It is a sign that the scope is already narrowing down`)
                        } else if (repeatedItems.length > 1) {
                          Alerts.showErrorToast('The problem ' + repeatedItems.join(', ') + ' are already in the map. It is a sign that the scope is already narrowing down')
                        }
                      }
                    })
                  }
                  OpenAIManager.pdfBasedQuestion({
                    apiKey: key,
                    documents: documents,
                    prompt: prompt,
                    callback: callback
                  })
                } else {
                  Alerts.showErrorToast('No API key found for ChatGPT')
                }
              })
            }).catch(error => {
              console.error('Error in processing PDF: ', error)
              Alerts.showErrorToast('Error in processing PDF: ' + error.message)
            })
          })
          .catch(error => {
            console.error('Error getting attached file:', error)
            Alerts.showErrorToast('Error getting attached file: ' + error.message)
          })
      }).catch(error => {
        console.error('Error getting token:', error)
        Alerts.showErrorToast('Error getting token: ' + error.message)
      })
    }).catch(error => {
      console.error('Error parsing map:', error)
      Alerts.showErrorToast('Error parsing map: ' + error.message)
    })
  }
  performNarrativeQuestion (node, narrative) {
    let that = this
    let variables = that._variables
    console.log('narrative', narrative)
    let prompt = that.getPromptForNarrative(node, narrative, variables)
    console.log(prompt)
  }
  performAggregationQuestion (node) {
    let that = this
    let prompt = ''
    let childrenNodes = node.children
    if (childrenNodes.length > 2) {
      Alerts.askUserNumberOfClusters(childrenNodes.length, (err, number) => {
        if (err) {
          Alerts.showErrorToast('An error occurred')
        } else {
          Alerts.showLoadingWindow(`Waiting for ChatGPT's answer...`)
          console.log('performAggregationQuestion')
          if (childrenNodes.length > 0) {
            prompt = that.getPromptForAggregation(node.text, childrenNodes, number)
            console.log('prompt: ' + prompt)
            ChatGPTClient.getApiKey().then((key) => {
              if (key !== null && key !== '') {
                let callback = (json) => {
                  Alerts.closeLoadingWindow()
                  console.log(json)
                  const gptItemsNodes = that.parseChatGPTAnswerFromAggregation(json)
                  if (gptItemsNodes === null || gptItemsNodes.length === 0) {
                    Alerts.showErrorToast(`There was an error parsing ChatGPT's answer. Check browser console to see the whole answer.`)
                  }
                  let labels, nodes
                  // GPT Answers
                  const gptProblemsLabels = gptItemsNodes.map((c) => { return c.label })
                  let gptProblemsNodes = gptItemsNodes.map((c) => {
                    return {
                      text: c.label,
                      style: PromptStyles.AnswerItemAggregation,
                      image: IconsMap['tick-disabled'],
                      parentId: node.id,
                      note: c.description
                    }
                  })
                  labels = gptProblemsLabels
                  nodes = gptProblemsNodes
                  let removeNodes = childrenNodes.map((c) => {
                    return {
                      id: c._info.id
                    }
                  })
                  MindmeisterClient.removeNodes(that._mapId, removeNodes).then(() => {
                    MindmeisterClient.addNodes(that._mapId, nodes).then(() => {
                      Alerts.closeLoadingWindow()
                      if (this._processModes[0].enabled) {
                        let repeatedItems = labels.filter(label => that._problems.includes(label))
                        if (repeatedItems.length === 1) {
                          Alerts.showErrorToast(`The problem "${repeatedItems[0]}" is already in the mind map. It is a sign that the scope is already narrowing down`)
                        } else if (repeatedItems.length > 1) {
                          Alerts.showErrorToast('The problem ' + repeatedItems.join(', ') + ' are already in the map. It is a sign that the scope is already narrowing down')
                        }
                      }
                    })
                  })
                }
                OpenAIManager.gptQuestion({
                  apiKey: key,
                  prompt: prompt,
                  callback: callback
                })
              } else {
                Alerts.showErrorToast('No API key found for ChatGPT')
              }
            }).catch((error) => {
              if (error === 'Unable to obtain ChatGPT token') Alerts.showErrorToast(`You must be logged in ChatGPT`)
              else Alerts.showErrorToast(`ChatGPT error: ${error}`)
            })
          }
        }
      })
    }
    console.log(prompt)
  }
  /**
   * Parse answers
   */
  parseChatGPTAnswer (json) {
    let gptItems
    gptItems = Array.from(Object.values(json)[0]).filter(item =>
      Object.keys(item).some(key => key.startsWith('GPT_'))
    )
    let gptItemsNodes = []
    gptItems.forEach((item) => {
      let name = Utils.findValuesEndingWithName(item, 'name')
      gptItemsNodes.push({ label: name, description: item.description })
    })
    return gptItemsNodes
  }
  parseChatGPTAnswerFromJSON (json, chatGPTBasedAnswers) {
    let gptItems
    if (chatGPTBasedAnswers) {
      gptItems = Array.from(Object.values(json)[0]).filter(item =>
        Object.keys(item).some(key => key.startsWith('GPT_'))
      )
    }
    const pdfBasedItems = Array.from(Object.values(json)[0]).filter(item =>
      !Object.keys(item).some(key => key.startsWith('GPT_'))
    )
    let gptItemsNodes = []
    let pdfBasedItemsNodes = []
    if (chatGPTBasedAnswers) {
      gptItems.forEach((item) => {
        let name = Utils.findValuesEndingWithName(item, 'name')
        gptItemsNodes.push({ label: name, description: item.description })
      })
    } else {
      gptItemsNodes = null
    }
    pdfBasedItems.forEach((item) => {
      let name = Utils.findValuesEndingWithName(item, 'name')
      pdfBasedItemsNodes.push({label: name, excerpt: '<em>' + item.excerpt + '</em>', description: item.excerpt})
    })
    return {gptItemsNodes, pdfBasedItemsNodes}
  }
  parseChatGPTAnswerFromAggregation (json) {
    let clusters
    clusters = Array.from(Object.values(json)[0]).filter(item =>
      Object.keys(item).some(key => key.startsWith('cluster_name'))
    )
    let clusterNodes = []
    clusters.forEach((item) => {
      let name = Utils.findValuesEndingWithName(item, 'name')
      let description = item.description + '\n'
      Array.from(item.clusteredItems).forEach((clusteredItem) => {
        description += '\n<strong>' + clusteredItem.node_name + '</strong>: ' + clusteredItem.description
      })
      clusterNodes.push({ label: name, description: description })
    })
    return clusterNodes
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
    let pdfBasedAnswerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItemPDFBased.backgroundColor)
    let aggregatedAnswerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItemAggregation.backgroundColor)
    let questionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(answerNodesColor)
    let pdfBasedQuestionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(pdfBasedAnswerNodesColor)
    let aggregatedAnswerNodes = MindmapWrapper.getNodesByRGBBackgroundColor(aggregatedAnswerNodesColor)
    questionNodes = questionNodes.concat(pdfBasedQuestionNodes).concat(aggregatedAnswerNodes)
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
  getCurrentNodeId () {
    let elements = Array.from(document.querySelectorAll('div')).filter(el => {
      let style = el.style
      return style.width === '7px' &&
        style.height === '7px' &&
        style.position === 'absolute' &&
        style.right === '-7px' &&
        style.bottom === '-7px' &&
        style.cursor === 'ew-resize' &&
        style.pointerEvents === 'auto' &&
        style.borderRadius === '100%' &&
        style.backgroundColor === 'white' &&
        style.boxSizing === 'content-box' &&
        style.borderStyle === 'solid' &&
        style.borderWidth === '2px' &&
        style.borderColor === 'rgb(0, 170, 255)'
    })
    let originalElement = elements.length > 0 ? elements[0] : null
    let transform = originalElement.parentElement.style.transform
    // eslint-disable-next-line no-useless-escape
    let match = /translateX\((\d+)px\)\s*translateY\((\-?\d+)px\)/.exec(transform)
    let targetElement = null
    if (match) {
      let translateX = parseInt(match[1]) + 2
      let translateY = parseInt(match[2]) + 2

      // Step 2: Find Another Element with the Modified Values
      let modifiedTransform = `translateX(${translateX}px) translateY(${translateY}px)`
      targetElement = document.querySelector(`div[style*='${modifiedTransform}']`)

      if (targetElement) {
        console.log('Element found with modified transform values:', targetElement)
        return targetElement.getAttribute('data-id')
      } else {
        console.log('No element found with the specified transform values.')
      }
    } else {
      console.log('Original element with specified transform values not found.')
    }
    return targetElement
  }
  getCurrentNode () {
    let elements = Array.from(document.querySelectorAll('div')).filter(el => {
      let style = el.style
      return style.width === '7px' &&
        style.height === '7px' &&
        style.position === 'absolute' &&
        style.right === '-7px' &&
        style.bottom === '-7px' &&
        style.cursor === 'ew-resize' &&
        style.pointerEvents === 'auto' &&
        style.borderRadius === '100%' &&
        style.backgroundColor === 'white' &&
        style.boxSizing === 'content-box' &&
        style.borderStyle === 'solid' &&
        style.borderWidth === '2px' &&
        style.borderColor === 'rgb(0, 170, 255)'
    })
    let originalElement = elements.length > 0 ? elements[0] : null
    let transform = originalElement.parentElement.style.transform
    let match = /translateX\((\d+)px\)\s*translateY\((\-?\d+)px\)/.exec(transform)
    let targetElement = null
    if (match) {
      let translateX = parseInt(match[1]) + 2
      let translateY = parseInt(match[2]) + 2

      // Step 2: Find Another Element with the Modified Values
      let modifiedTransform = `translateX(${translateX}px) translateY(${translateY}px)`
      targetElement = document.querySelector(`div[style*='${modifiedTransform}']`)

      if (targetElement) {
        console.log('Element found with modified transform values:', targetElement)
        return targetElement
      } else {
        console.log('No element found with the specified transform values.')
      }
    } else {
      console.log('Original element with specified transform values not found.')
    }
    return targetElement
  }
  isQuestionNode (questionNode) {
    let questionRegExp = /^(WHICH|HOW|WHY).+\?$/i
    let question = questionNode.innerText.replaceAll('\n', ' ')
    if (questionRegExp.test(question)) {
      return true
    } else {
      return false
    }
  }
  canBeAggregated () {
    return true
  }
  hasQuestionType (node, questionType) {
    let foundNode = node.children.find((e) => { return e._info.title.replaceAll('\n', ' ').includes(questionType) })
    if (foundNode) {
      if (foundNode.children.length > 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  isQuestionType (node, questionType) {
    if (node._info.title.replaceAll('\n', ' ').includes(questionType)) {
      return true
    } else {
      return false
    }
  }
  getQuestionTypeAnswers (node, questionType) {
    let text = ''
    let textNode = node.children.find((e) => { return e._info.title.replaceAll('\n', ' ').includes(questionType) })
    textNode.children.forEach((e) => {
      text += e._info.title.replaceAll('\n', ' ') + ':' + e._info.note.replaceAll('\n', ' ') + ';'
    })
    return text
  }
  getNarrative (that, questionNode) {
    let question = questionNode._info.title.replaceAll('\n', ' ')
    let narrative = {question: question, problem: '', relevance: '', solution: '', feasability: '', effectiveness: ''}
    let RQPurpose = that.getQuestionPurpose(question)
    let firstChild = that._mindmapParser.getNodeById(questionNode._info.parent)
    while (firstChild._info.title !== TemplateNodes.SCOPING_ANALYSIS) {
      if (that.hasQuestionType(firstChild, 'WHY IS') && RQPurpose !== 'relevance') {
        narrative.relevance = that.getQuestionTypeAnswers(firstChild, 'WHY IS')
      }
      if (that.hasQuestionType(firstChild, 'BE IMPLEMENTED TO') && RQPurpose !== 'feasability') {
        narrative.feasability = that.getQuestionTypeAnswers(firstChild, 'BE IMPLEMENTED TO')
      }
      if (that.hasQuestionType(firstChild, 'HELP TO') && RQPurpose !== 'effectiveness') {
        narrative.effectiveness = that.getQuestionTypeAnswers(firstChild, 'HELP TO')
      }
      let secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (that.isQuestionType(secondChild, 'WHICH PROBLEMS')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ') + ':' + firstChild._info.note.replaceAll('\n', ' ') + ';'
      } else if (that.isQuestionType(secondChild, 'WHY DOES')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ') + ':' + firstChild._info.note.replaceAll('\n', ' ') + ';'
      } else if (that.isQuestionType(secondChild, 'BE ADDRESSED FOR')) {
        narrative.solution += firstChild._info.title.replaceAll('\n', ' ') + ':' + firstChild._info.note.replaceAll('\n', ' ') + ';'
      }
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
    }
    return narrative
  }
  getQuestionPurpose (question) {
    let problemStatementPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    if (problemStatementPromptRE.test(question)) {
      return 'problemStatement'
    }
    let problemAnalysisPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
    if (problemAnalysisPromptRE.test(question)) {
      return 'problem'
    }
    let relevanceMappingPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.RELEVANCE_MAPPING)
    if (relevanceMappingPromptRE.test(question)) {
      return 'relevance'
    }
    let solutionAnalysisPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS)
    if (solutionAnalysisPromptRE.test(question)) {
      return 'solution'
    }
    let solutionFeasibilityPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_FEASIBILITY)
    if (solutionFeasibilityPromptRE.test(question)) {
      return 'feasibility'
    }
    let solutionEffectivenessPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_EFFECTIVENESS)
    if (solutionEffectivenessPromptRE.test(question)) {
      return 'effectiveness'
    }
    return null
  }
}

module.exports = MindmapManager
