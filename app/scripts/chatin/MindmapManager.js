// import * as pdfjsLib from 'pdfjs-dist/webpack';
const Config = require('../Config')
const LLMTextUtils = require('../utils/LLMTextUtils')
const LLMClient = require('../llm/LLMClient')
const MindmapWrapper = require('../mindmeister/wrapper/MindmapWrapper')
const TemplateNodes = require('./TemplateNodes')
const ModelDefaultValues = require('./ModelDefaultValues')
const MindmeisterClient = require('../mindmeister/MindmeisterClient')
const Alerts = require('../utils/Alerts')
const MindmapContentParser = require('../mindmeister/wrapper/MindmapContentParser')
const ProcessQuestions = require('./ProcessQuestions')
const Consequence = require('./model/Consequence')
const PromptBuilder = require('./PromptBuilder')
const Problem = require('./model/Problem')
const PromptStyles = require('./PromptStyles')
const IconsMap = require('./IconsMap')
const Utils = require('../utils/Utils')
const Locators = require('../mindmeister/wrapper/Locators')
const ITEMS = '4'

class MindmapManager {
  constructor () {
    let that = this
    this._mapId = null
    this._processModes = [
      { name: 'PROBLEM_ARTICULATION',
        templateNodeText: TemplateNodes.PROBLEM_ARTICULATION_MODE,
        mindmapNode: null,
        onEnable: () => { that.enableProblemArticulation() },
        enabled: false
      },
      { name: 'CONSEQUENCE_MAPPING',
        templateNodeText: TemplateNodes.CONSEQUENCE_MAPPING_MODE,
        mindmapNode: null,
        onEnable: () => { that.enableRelevanceMapping() },
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
                if (node.innerText && (node.innerText.includes('Attachments'))) {
                  that.manageAttachmentsMenu(that, node)
                } else if (node.innerHTML && node.innerHTML.includes(Locators.PDF_ELEMENT) && node.innerHTML.includes('.pdf')) {
                  console.log('PDF element found')
                  let divs = document.querySelectorAll('div.kr-view')
                  let targetDiv = Array.from(divs).find(div => div.getAttribute('style').includes('padding-top: 10px; padding-bottom: 10px; width: 320px; background-color: rgb(255, 255, 255);'))
                  that.manageAttachmentsMenu(that, targetDiv)
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
  enableProblemArticulation () {
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
        let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'PROBLEM_ARTICULATION' }))
        MindmeisterClient.doActions(that._mapId, [{text: question, parentId: scopingAnalysisNode.id, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}], modeChanges).then(() => {
          Alerts.closeLoadingWindow()
        })
      }
    })
  }
  enableRelevanceMapping () {
    let that = this
    let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'CONSEQUENCE_MAPPING' }))
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
                let lastNode = that.getLastNodeOfNarrative(that, questionNodeObject)
                that.performNarrativeQuestion(questionNode, narrative, lastNode)
              })
            })
          }
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
              if (that.canBeAggregated(questionNodeObject)) {
                Alerts.infoAlert({
                  title: 'Aggregation',
                  text: 'This operation will remove relevant information within the aggregated nodes. Do you want to continue?',
                  showCancelButton: true,
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'No',
                  callback: () => {
                    that.performAggregationQuestion(questionNodeObject)
                  }
                })
              } else {
                that.performAggregationQuestion(questionNodeObject)
              }
            })
          })
          let consensusButton = div.cloneNode(true)
          // Optionally, you can change the content or attributes of the duplicate
          consensusButton.textContent = 'Consensus' // Changing the text content to 'Aggregate'
          consensusButton.style = 'width: 100%; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
          // Insert the duplicate after the original div
          div.parentNode.insertBefore(consensusButton, div.nextSibling)
          consensusButton.addEventListener('click', function (event) {
            console.log('click on Consensus')
            that.parseMap().then(() => {
              let questionNodeObject = that._mindmapParser.getNodeById(questionNode.getAttribute('data-id'))
              const nodeText = questionNodeObject._info.title
              const encodedUri = encodeURIComponent(nodeText)
              const uri = 'https://consensus.app/results/?q=' + encodedUri
              window.open(uri)
              console.log('click on Consensus')
            })
          })
        } else {
          if (that.isAnswerNode(questionNode)) {
            let consensusButton = div.cloneNode(true)
            // Optionally, you can change the content or attributes of the duplicate
            consensusButton.textContent = 'Consensus' // Changing the text content to 'Aggregate'
            consensusButton.style = 'width: 100%; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
            // Insert the duplicate after the original div
            div.parentNode.insertBefore(consensusButton, div.nextSibling)
            consensusButton.addEventListener('click', function (event) {
              console.log('click on Consensus')
              that.parseMap().then(() => {
                let variables = that._variables
                let practice = variables.find((v) => { return v.name === 'Practice' }).value
                let activity = variables.find((v) => { return v.name === 'Activity' }).value
                let questionNodeObject = that._mindmapParser.getNodeById(questionNode.getAttribute('data-id'))
                const nodeText = questionNodeObject._info.title
                const question = 'How can ' + nodeText + ' be lessen in ' + practice + ' to ' + activity + '?'
                const encodedUri = encodeURIComponent(question)
                const uri = 'https://consensus.app/results/?q=' + encodedUri
                window.open(uri)
                console.log('click on Consensus')
              })
            })
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
                let narrative = that.getNarrativeForAnswerNode(that, questionNodeObject)
                let lastNode = that.getLastNodeOfNarrativeForAnswerNode(that, questionNodeObject)
                that.performNarrativeQuestion(questionNode, narrative, lastNode)
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
   * Perform questions
   */
  performQuestion (node) {
    Alerts.showLoadingWindow('Creating prompt...')
    let that = this
    this.parseMap().then(() => {
      let questionNode = that._mindmapParser.getNodeById(node.id)
      let gptBasedNodes = questionNode.children.filter((c) => { return c._info.style === 'FFFFFF,100,0,0,2BD9D9,1,' })
      let prompt
      if (gptBasedNodes.length > 0) {
        prompt = PromptBuilder.getPromptForGPTAlternativeNodes(this, node.text, gptBasedNodes)
      } else {
        prompt = PromptBuilder.getPromptForGPTNodes(this, node.text)
      }
      let title = null
      let note = null
      if (!questionNode._info.title.startsWith('WHICH')) {
        const parent = that._mindmapParser.getNodeById(questionNode._info.parent)
        note = parent._info.note.replaceAll('\n', ' ')
        title = parent._info.title.replaceAll('\n', ' ')
      }
      if (note !== null) {
        prompt = title + ' means that ' + note + '\n Based on that,' + prompt
      }
      console.log('prompt:\n ' + prompt)
      chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
        if (llm === '') {
          llm = Config.defaultLLM
        }
        Alerts.showLoadingWindow('Waiting for ' + llm.charAt(0).toUpperCase() + llm.slice(1) + 's answer...')
        chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getAPIKEY', data: llm }, ({ apiKey }) => {
          if (apiKey !== null && apiKey !== '') {
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
            LLMClient.simpleQuestion({
              apiKey: apiKey,
              prompt: prompt,
              llm: llm,
              callback: callback
            })
          } else {
            Alerts.showErrorToast('No API key found for ' + llm)
          }
        })
      })
    })
  }
  performPDFBasedQuestion (node, id, name) {
    Alerts.showLoadingWindow(`Creating prompt...`)
    let that = this
    let chatGPTBasedAnswers = false
    this.parseMap().then(() => {
      let prompt = PromptBuilder.getPromptForPDFBasedQuestion(this, node.text, chatGPTBasedAnswers)
      let title = null
      let note = null
      let questionNode = that._mindmapParser.getNodeById(node.id)
      if (!questionNode._info.title.startsWith('WHICH')) {
        const parent = that._mindmapParser.getNodeById(questionNode._info.parent)
        note = parent._info.note.replaceAll('\n', ' ')
        title = parent._info.title.replaceAll('\n', ' ')
      }
      if (note !== null) {
        prompt = title + ' means that ' + note + '\n Based on that,' + prompt
      }
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
              chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
                if (llm === '') {
                  llm = Config.defaultLLM
                }
                Alerts.showLoadingWindow('Waiting for ' + llm.charAt(0).toUpperCase() + llm.slice(1) + 's answer...')
                chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getAPIKEY', data: llm }, ({ apiKey }) => {
                  if (apiKey !== null && apiKey !== '') {
                    let callback = (json) => {
                      Alerts.closeLoadingWindow()
                      const {
                        gptItemsNodes,
                        pdfBasedItemsNodes
                      } = that.parseChatGPTAnswerFromJSON(json, chatGPTBasedAnswers)
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
                    LLMClient.pdfBasedQuestion({
                      apiKey: apiKey,
                      documents: documents,
                      prompt: prompt,
                      llm: llm,
                      callback: callback
                    })
                  } else {
                    Alerts.showErrorToast('No API key found for ChatGPT')
                  }
                })
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
  performNarrativeQuestion (node, narrative, lastNode) {
    Alerts.showLoadingWindow(`Creating prompt...`)
    let that = this
    let variables = that._variables
    console.log('narrative', narrative)
    let prompt = PromptBuilder.getPromptForNarrativeLines(node, narrative, variables)
    console.log(prompt)
    chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
      if (llm === '') {
        llm = Config.defaultLLM
      }
      chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getAPIKEY', data: llm }, ({ apiKey }) => {
        if (apiKey !== null && apiKey !== '') {
          let callback = (json) => {
            Alerts.closeLoadingWindow()
            console.log(json)
            let callback = () => {
              Alerts.showLoadingWindow(`Creating mind map node...`)
              // GPT Answers
              let nodes = []
              let RQAnswer =
                {
                  text: narrative.question,
                  note: json.narrative,
                  parentId: lastNode._info.parent
                }
              nodes.push(RQAnswer)
              // let nodesToRemove = that.getNodesToRemove(lastNode)
              // let questionNodeID = that.getCurrentNodeId()
              let removeNodes = []
              removeNodes.push({ id: lastNode._info.id })
              MindmeisterClient.removeNodes(that._mapId, removeNodes).then(() => {
                Alerts.closeLoadingWindow()
                MindmeisterClient.addNode(that._mapId, nodes).then(() => {
                  Alerts.closeLoadingWindow()
                })
              })
            }
            Alerts.showNarrative({
              title: 'Narrative',
              text: json.narrative,
              callback: callback
            })
          }
          Alerts.showLoadingWindow('Waiting for ' + llm.charAt(0).toUpperCase() + llm.slice(1) + 's answer...')
          LLMClient.simpleQuestion({
            apiKey: apiKey,
            prompt: prompt,
            llm: llm,
            callback: callback
          })
        } else {
          Alerts.showErrorToast('No API key found ' + llm)
        }
      })
    })
  }
  performAggregationQuestion (node) {
    Alerts.showLoadingWindow('Creating prompt...')
    let that = this
    let prompt = ''
    let childrenNodes = node.children
    if (childrenNodes.length > 2) {
      Alerts.askUserNumberOfClusters(childrenNodes.length, (err, number) => {
        if (err) {
          Alerts.showErrorToast('An error occurred')
        } else {
          console.log('performAggregationQuestion')
          if (childrenNodes.length > 0) {
            prompt = that.getPromptForAggregation(node.text, childrenNodes, number)
            console.log('prompt: ' + prompt)
            chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
              if (llm === '') {
                llm = Config.defaultLLM
              }
              Alerts.showLoadingWindow('Waiting for ' + llm.charAt(0).toUpperCase() + llm.slice(1) + 's answer...')
              chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getAPIKEY', data: llm }, ({ apiKey }) => {
                if (apiKey !== null && apiKey !== '') {
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
                  LLMClient.simpleQuestion({
                    apiKey: apiKey,
                    prompt: prompt,
                    llm: llm,
                    callback: callback
                  })
                } else {
                  Alerts.showErrorToast('No API key found for ' + llm)
                }
              })
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
      pdfBasedItemsNodes.push({label: name, excerpt: '<em>' + item.excerpt + '</em>', description: item.description})
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
        case 'PROBLEM_ARTICULATION':
          that.onClickAnswerProblemDeepen(uiNode, issue)
          break
        case 'CONSEQUENCE_MAPPING':
          that.onClickAnswerConsequenceMapping(uiNode, issue)
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
  onClickAnswerConsequenceMapping (uiNode, issue) {
    if (!(issue instanceof Problem)) {
      Alerts.showErrorToast('Invalid mode')
      return
    }
    let question = ProcessQuestions.CONSEQUENCE_MAPPING
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
    /* let questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.QUESTION_MODEL)
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
    }) */
    let styles = []
    styles.push({name: 'Number of items', value: ITEMS})
    styles.push({name: 'Description', value: 'provide rationales'})
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
    let consequencesPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.CONSEQUENCE_MAPPING)
    problemNodeChildren.forEach((c) => {
      if (consequencesPromptRE.test(c.text)) {
        c.children.forEach((p) => {
          let cons = new Consequence(p.text, p.id, problem)
          problem.addConsequence(cons)
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
  isAnswerNode (questionNode) {
    if (questionNode.style.backgroundColor === 'rgb(150, 219, 11)' || questionNode.style.backgroundColor === 'rgb(43, 217, 217)' || questionNode.style.backgroundColor === 'rgb(0, 100, 0)') {
      return true
    } else {
      return false
    }
  }
  canBeAggregated (questionNode) {
    const hasChildWithChildren = questionNode.children.some((child) => {
      return child.children && child.children.length > 0
    })
    return hasChildWithChildren
  }

  findIssue (text, nodeId) {
    let id = nodeId > 0 ? nodeId : null
    for (let i = 0; i < this._scopingAnalysis.length; i++) {
      let issue = this._scopingAnalysis[i].findIssue(text, id)
      if (issue != null) return issue
    }
    return null
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
      text += e._info.title.replaceAll('\n', ' ') + ':' + e._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
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
        narrative.relevance = that.getQuestionTypeAnswers(firstChild, 'WHICH CONSEQUENCES')
      }
      if (that.hasQuestionType(firstChild, 'BE IMPLEMENTED TO') && RQPurpose !== 'feasability') {
        narrative.feasability = that.getQuestionTypeAnswers(firstChild, 'BE IMPLEMENTED TO')
      }
      if (that.hasQuestionType(firstChild, 'HELP TO') && RQPurpose !== 'effectiveness') {
        narrative.effectiveness = that.getQuestionTypeAnswers(firstChild, 'HELP TO')
      }
      let secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (that.isQuestionType(secondChild, 'WHICH PROBLEMS')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':' + firstChild._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
      } else if (that.isQuestionType(secondChild, 'WHY DOES')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':' + firstChild._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
      } else if (that.isQuestionType(secondChild, 'BE ADDRESSED FOR')) {
        narrative.solution += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':' + firstChild._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
      }
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
    }
    return narrative
  }
  getLastNodeOfNarrative (that, questionNode) {
    let firstChild = that._mindmapParser.getNodeById(questionNode._info.id)
    let secondChild
    let thirdChild
    while (firstChild._info.title !== TemplateNodes.SCOPING_ANALYSIS) {
      thirdChild = secondChild
      secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (secondChild._info.title !== TemplateNodes.SCOPING_ANALYSIS) {
        firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
      } else {
        return thirdChild
      }
    }
    return thirdChild
  }
  getNarrativeForAnswerNode (that, questionNode) {
    let problem = questionNode._info.title.replaceAll('\n', ' ')
    let variables = that._variables
    let practice = variables.find((v) => { return v.name === 'Practice' }).value
    let activity = variables.find((v) => { return v.name === 'Activity' }).value
    let question = 'How can ' + problem + ' be lessen during ' + activity + ' in ' + practice + '?'
    let narrative = { question: question, problem: '', relevance: '' }
    let RQPurpose = that.getQuestionPurpose(question)
    let parent = that._mindmapParser.getNodeById(questionNode._info.parent)
    let firstChild = that._mindmapParser.getNodeById(parent._info.parent)
    while (firstChild._info.title !== TemplateNodes.SCOPING_ANALYSIS) {
      if (that.hasQuestionType(firstChild, 'WHICH CONSEQUENCES') && RQPurpose !== 'relevance') {
        narrative.relevance = that.getQuestionTypeAnswers(firstChild, 'WHICH CONSEQUENCES')
      }
      let secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (that.isQuestionType(secondChild, 'WHICH PROBLEMS')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':' + firstChild._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
      } else if (that.isQuestionType(secondChild, 'WHY DOES')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':' + firstChild._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
      }
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
    }
    return narrative
  }
  getLastNodeOfNarrativeForAnswerNode (that, questionNode) {
    let parentNode = that._mindmapParser.getNodeById(questionNode._info.parent)
    let firstChild = that._mindmapParser.getNodeById(parentNode._info.parent)
    let secondChild
    let thirdChild
    while (firstChild._info.title !== TemplateNodes.SCOPING_ANALYSIS) {
      secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      thirdChild = firstChild
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
    }
    return thirdChild
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
    let relevanceMappingPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.CONSEQUENCE_MAPPING)
    if (relevanceMappingPromptRE.test(question)) {
      return 'relevance'
    }
    return null
  }
}

module.exports = MindmapManager
