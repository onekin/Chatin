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
const _ = require('lodash')

class MindmapManager {
  constructor () {
    this._mapId = null
    this._styles = null
    this._variables = []
    this._perceivedProblem = null
    this._scopingAnalysis = null
    this._mindmapParser = null
    this._problems = []
    this.found = false
  }

  kudeatzaileakHasieratu (that) {
    const checkDOM = setInterval(function () {
      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: true, subtree: true }
      // Callback function to execute when mutations are observed
      const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === 'childList') {
            mutation.removedNodes.forEach(node => {
              if (node.classList && node.classList.contains('kr-view')) {
                let style = node.style
                if (style.position === 'absolute' && (style.transformOrigin === 'left center' || style.transformOrigin === 'center top')) {
                  let title = document.querySelectorAll('.plusTitle')
                  let title2 = document.querySelectorAll('.plusTitleOwn')
                  if (title && title2) {
                    Array.from(title).concat(Array.from(title2)).forEach((t) => {
                      t.remove()
                    })
                  }
                }
              }
            })
            if (mutation.addedNodes) {
              if (mutation.addedNodes.length > 0) {
                const node = mutation.addedNodes[0]
                if (node.innerText && (node.innerText.includes('Attachments') || node.innerText.includes('Archivos adjuntos'))) {
                  let currentNode = that.getCurrentNode()
                  if (!that.isAnswerNode(currentNode)) {
                    that.manageAttachmentsMenu(that, node)
                  }
                } else if (node.innerHTML && node.innerHTML.includes(Locators.PDF_ELEMENT) && node.innerHTML.includes('.pdf')) {
                  let divs = document.querySelectorAll('div.kr-view')
                  let targetDiv = Array.from(divs).find(div => div.getAttribute('style').includes('padding-top: 10px; padding-bottom: 10px; width: 320px; background-color: rgb(255, 255, 255);'))
                  let currentNode = that.getCurrentNode()
                  if (!that.isAnswerNode(currentNode)) {
                    that.manageAttachmentsMenu(that, targetDiv)
                  }
                } else if (node.innerText && (node.innerText.includes('Drag & drop files') || node.innerText.includes('Arrastra y suelta archivos o pega enlaces en los temas.'))) {
                  that.manageContextMenu(that)
                } else if (node.classList && node.classList.contains('kr-view')) {
                  let style = node.style
                  if (style.position === 'absolute' && style.transformOrigin === 'left center') {
                    node.classList.add('addButton')
                    let currentNode = that.getCurrentNode()
                    let nodeTitle = currentNode.innerText
                    that.parseMap().then(() => {
                      let nodeObject = that._mindmapParser.getNodeById(currentNode.dataset.id)
                      if (nodeObject && nodeObject._info) {
                        if (that.isAnswerNode(currentNode) || nodeTitle === 'PROBLEM ANALYSIS') {
                          let parent = that._mindmapParser.getNodeById(nodeObject._info.parent)
                          if (parent._info.title.startsWith('WHICH') || that.isAddressProblemNode(currentNode)) {
                            const h1Element = document.createElement('h2')
                            h1Element.style.position = 'absolute'
                            h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                            h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                            h1Element.textContent = 'more consequences'
                            h1Element.style.color = 'rgb(0, 170, 255)'
                            h1Element.className = 'plusTitle'
                            node.insertAdjacentElement('afterend', h1Element)
                            h1Element.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.onClickAnswer(currentNode)
                            })
                            // node.className = 'addCausesButton'
                            node.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.onClickAnswer(currentNode)
                            })
                          } else {
                            const h1Element = document.createElement('h2')
                            h1Element.style.position = 'absolute'
                            h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                            h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                            h1Element.textContent = 'more causes'
                            h1Element.style.color = 'rgb(0, 170, 255)'
                            h1Element.className = 'plusTitle'
                            node.insertAdjacentElement('afterend', h1Element)
                            h1Element.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.createCauseMappingNode(currentNode)
                            })
                            node.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.createCauseMappingNode(currentNode)
                            })
                          }
                        } else if (that.isQuestionNode(currentNode)) {
                          const h1Element = document.createElement('h2')
                          h1Element.style.position = 'absolute'
                          h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                          h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                          h1Element.textContent = 'ask question'
                          h1Element.style.color = 'rgb(0, 170, 255)'
                          h1Element.className = 'plusTitle'
                          node.insertAdjacentElement('afterend', h1Element)
                          h1Element.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            that.performQuestion(currentNode)
                          })
                          // node.className = 'addCausesButton'
                          node.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            that.performQuestion(currentNode)
                          })
                        } else if (that.isGoodnessCriteriaNode(that, currentNode, nodeObject)) {
                          const h1Element = document.createElement('h2')
                          h1Element.style.position = 'absolute'
                          h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                          h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                          h1Element.textContent = 'more...'
                          h1Element.style.color = 'rgb(0, 170, 255)'
                          h1Element.className = 'plusTitle'
                          node.insertAdjacentElement('afterend', h1Element)
                          h1Element.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            that.createGoodnessCriteriaQuestionNode(currentNode)
                          })
                          // node.className = 'addCausesButton'
                          node.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            that.createGoodnessCriteriaQuestionNode(currentNode)
                          })
                        }
                        that.addObserverToAddButton()
                      }
                    })
                  } else if (style.position === 'absolute' && style.transformOrigin === 'center top') {
                    let currentNode = that.getCurrentNode()
                    node.classList.add('addOwnButton')
                    that.parseMap().then(() => {
                      let nodeObject = that._mindmapParser.getNodeById(currentNode.dataset.id)
                      if (nodeObject && nodeObject._info) {
                        if (that.isAnswerNode(currentNode)) {
                          let parent = that._mindmapParser.getNodeById(nodeObject._info.parent)
                          if (parent._info.title.startsWith('WHICH') || that.isAddressProblemNode(currentNode)) {
                            const h1Element = document.createElement('h2')
                            h1Element.style.position = 'absolute'
                            h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                            h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                            // h1Element.textContent = 'add question'
                            h1Element.style.color = 'rgb(0, 170, 255)'
                            h1Element.className = 'plusTitleOwn'
                            h1Element.innerText = 'add own consequence'
                            node.insertAdjacentElement('afterend', h1Element)
                            h1Element.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.addSiblingNode(that, nodeObject, 'consequenceNode')
                            })
                            node.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.addSiblingNode(that, nodeObject, 'consequenceNode')
                            })
                          } else {
                            const h1Element = document.createElement('h2')
                            h1Element.style.position = 'absolute'
                            h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                            h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                            h1Element.textContent = 'add own cause'
                            h1Element.style.color = 'rgb(0, 170, 255)'
                            h1Element.className = 'plusTitleOwn'
                            node.insertAdjacentElement('afterend', h1Element)
                            h1Element.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.addSiblingNode(that, nodeObject, 'causeNode')
                            })
                            node.addEventListener('click', (e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              that.addSiblingNode(that, nodeObject, 'causeNode')
                            })
                          }
                        } else if (that.isQuestionNode(currentNode)) {
                          let nodeObject = that._mindmapParser.getNodeById(currentNode.dataset.id)
                          const h1Element = document.createElement('h2')
                          h1Element.style.position = 'absolute'
                          h1Element.style.top = `${parseInt(style.top, 10) - 24}px` // Subtract 30px from top
                          h1Element.style.left = `${parseInt(style.left, 10) + 42}px`
                          h1Element.textContent = 'add own question'
                          h1Element.style.color = 'rgb(0, 170, 255)'
                          h1Element.className = 'plusTitleOwn'
                          node.insertAdjacentElement('afterend', h1Element)
                          h1Element.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            that.addSiblingNode(that, nodeObject, 'questionNode')
                          })
                          node.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            that.addSiblingNode(that, nodeObject, 'questionNode')
                          })
                        } else if (that.isGoodnessCriteriaNode(that, currentNode, nodeObject)) {
                          //
                        }
                      }
                    })
                  }
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
        Alerts.showErrorToast('This is not a Chatin map')
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
        that.addAnswerClickManager()
        that.addQuestionClickManager()
        that.addNewProblemAnalysisManager()
        that.addSummarizeButtonHandler(rootNode)
      }
    })
    let config = { childList: true, subtree: true }
    obs.observe(parent, config)
    // obs.observe(document, config)
    this.addAnswerClickManager()
    this.addQuestionClickManager()
    this.addNewProblemAnalysisManager()
    this.addSummarizeButtonHandler(rootNode)
  }

  createCauseMappingNode (currentNode) {
    let that = this
    that.parseMap().then((mapInfo) => {
      let scopingAnalysisNodes = this._mindmapParser.getNodesWithText(TemplateNodes.PROBLEM_ANALYSIS)
      if (scopingAnalysisNodes == null || scopingAnalysisNodes.length === 0) return
      let question = ProcessQuestions.PROBLEM_ANALYSIS
      let items = MindmapManager.extractQuestionItems(question)
      let variables = that._variables
      let perceivedProblem
      if (currentNode._domElement && currentNode._domElement.innerText === 'PROBLEM ANALYSIS') {
        perceivedProblem = that._perceivedProblem
      } else {
        perceivedProblem = currentNode.innerText
      }
      items.forEach((i) => {
        let v = variables.find((variable) => {
          let variableName = variable.name.toLowerCase()
          return variableName === i.toLowerCase()
        })
        if (v !== null && v !== undefined) {
          question = question.replace(`<${i}>`, v.value)
          _.remove(variables, v)
        }
      })
      question = question.replace(`<Problem>`, perceivedProblem)
      if (variables.length > 0) {
        question = question.replace('?', ' ')
        variables.forEach((v) => {
          question = question + ' and assuming that ' + v.name + ' is ' + v.value
        })
        question = question + '?'
      }
      let missingItems = MindmapManager.extractQuestionItems(question)
      if (missingItems.length > 0) {
        Alerts.showErrorToast(`Missing variables: ${missingItems}`)
      } else {
        let parentId
        if (currentNode.dataset) {
          parentId = currentNode.dataset.id
        } else if (currentNode._domElement) {
          parentId = currentNode._domElement.dataset.id
        } else {
          parentId = currentNode.id
        }
        // let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'CAUSE_MAPPING' }))
        MindmeisterClient.doActions(that._mapId, [{text: question, parentId: parentId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}]).then(() => {
          // MindmeisterClient.doActions(that._mapId, [{text: question, parentId: parentId, style: PromptStyles.QuestionPrompt}]).then(() => {
          let title = document.querySelectorAll('.plusTitle')
          if (title) {
            title.forEach((t) => {
              t.remove()
            })
          }
          let title2 = document.querySelectorAll('.plusTitleOwn')
          if (title2) {
            title2.forEach((t) => {
              t.remove()
            })
          }
          Alerts.closeLoadingWindow()
        })
      }
    })
  }
  createGoodnessCriteriaQuestionNode (currentNode) {
    let that = this
    that.parseMap().then((mapInfo) => {
      let question = ProcessQuestions.EXPERIMENTAL_QUESTION
      let items = MindmapManager.extractQuestionItems(question)
      let variables = that._variables
      let perceivedProblem = that._perceivedProblem
      let criteria = currentNode.innerText
      items.forEach((i) => {
        let v = variables.find((variable) => {
          let variableName = variable.name.toLowerCase()
          return variableName === i.toLowerCase()
        })
        if (v !== null && v !== undefined) {
          question = question.replace(`<${i}>`, v.value)
          _.remove(variables, v)
        }
      })
      question = question.replace(`<Problem>`, perceivedProblem)
      question = question.replace(`<Criteria>`, criteria)
      let addressedProblem = that.getCurrentAddressedProblem()
      if (addressedProblem._domElement) {
        question = question.replace(`<AddressedProblem>`, addressedProblem._domElement.innerText.replaceAll('\n', ' '))
      } else {
        question = question.replace(`<AddressedProblem>`, 'a problem')
      }
      if (variables.length > 0) {
        question = question.replace('?', ' ')
        variables.forEach((v) => {
          question = question + ' and assuming that ' + v.name + ' is ' + v.value
        })
        question = question + '?'
      }
      let missingItems = MindmapManager.extractQuestionItems(question)
      if (missingItems.length > 0) {
        Alerts.showErrorToast(`Missing variables: ${missingItems}`)
      } else {
        let parentId
        if (currentNode.dataset) {
          parentId = currentNode.dataset.id
        } else if (currentNode._domElement) {
          parentId = currentNode._domElement.dataset.id
        } else {
          parentId = currentNode.id
        }
        // let modeChanges = that.modeEnableChanges(that._processModes.find((m) => { return m.name === 'CAUSE_MAPPING' }))
        MindmeisterClient.doActions(that._mapId, [{text: question, parentId: parentId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}]).then(() => {
          // MindmeisterClient.doActions(that._mapId, [{text: question, parentId: parentId, style: PromptStyles.QuestionPrompt}]).then(() => {
          let title = document.querySelectorAll('.plusTitle')
          if (title) {
            title.forEach((t) => {
              t.remove()
            })
          }
          let title2 = document.querySelectorAll('.plusTitleOwn')
          if (title2) {
            title2.forEach((t) => {
              t.remove()
            })
          }
          Alerts.closeLoadingWindow()
        })
      }
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
      if ((div.textContent.includes('Task') || div.textContent.includes('Tarea')) && div.getAttribute('style') === expectedStyle) {
        let questionNode = that.getCurrentNode()
        if (that.isQuestionNode(questionNode)) {
          // Create a duplicate of the div
          let aggregateButton = div.cloneNode(true)
          // Optionally, you can change the content or attributes of the duplicate
          aggregateButton.textContent = 'Compact'
          aggregateButton.style = 'width: 100%; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
          // Insert the duplicate after the original div
          div.parentNode.insertBefore(aggregateButton, aggregateButton.nextSibling)
          aggregateButton.addEventListener('click', function (event) {
            that.parseMap().then(() => {
              let questionNodeObject = that._mindmapParser.getNodeById(questionNode.getAttribute('data-id'))
              if (that.canBeAggregated(questionNodeObject)) {
                Alerts.infoAlert({
                  title: 'Compacting nodes',
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
          consensusButton.textContent = 'Consensus'
          consensusButton.style = 'width: 100%; margin-bottom: 10px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; background-color: rgba(0, 0, 0, 0.05); cursor: pointer; transform: scaleX(1) scaleY(1);'
          // Insert the duplicate after the original div
          div.parentNode.insertBefore(consensusButton, div.nextSibling)
          consensusButton.addEventListener('click', function (event) {
            console.log('click on Consensus')
            that.parseMap().then(() => {
              let questionNodeObject = that._mindmapParser.getNodeById(questionNode.getAttribute('data-id'))
              const nodeText = questionNodeObject._info.title.replaceAll('\n', ' ')
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
            consensusButton.textContent = 'Consensus'
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
                const question = 'How can ' + nodeText + ' be lessened in ' + practice + ' to ' + activity + '?'
                const encodedUri = encodeURIComponent(question)
                const uri = 'https://consensus.app/results/?q=' + encodedUri
                window.open(uri)
                console.log('click on Consensus')
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
  addNewProblemAnalysisManager () {
    let that = this
    let problemAnalysisNode = that.getProblemAnalysisNode()
    let iconElement = problemAnalysisNode.getIconElement()
    if (iconElement == null || iconElement.classList.contains('chatin_question')) return
    iconElement.classList.add('chatin_question')
    iconElement.style.removeProperty('pointer-events')
    iconElement.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      that.createCauseMappingNode(problemAnalysisNode)
    })
  }
  addSummarizeButtonHandler (rootNode) {
    let that = this
    let iconElement = rootNode.getIconElement()
    if (iconElement == null || iconElement.classList.contains('chatin_question')) return
    iconElement.classList.add('chatin_question')
    iconElement.style.removeProperty('pointer-events')
    iconElement.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log('narrative')
      that.getAllNarrative(that, (narrativeObject, parser) => {
        console.log(narrativeObject)
        that.performAllNarrativeQuestion(parser, rootNode, narrativeObject)
      })
    })
  }
  getQuestionNodes () {
    // let questionRegExp = /^(WHICH|HOW|WHY).+\?$/i
    // let questionNodes = MindmapWrapper.getNodesByTextRegexp(questionRegExp)
    // todo -> check node style and icon
    // green nodes with tick (either disabled or enabled) icon
    let questionNodesColor = Utils.hexToRgb(PromptStyles.QuestionPrompt.backgroundColor)
    let questionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(questionNodesColor)
    questionNodes = questionNodes.filter((n) => { return n.emojiIcon != null && (n.emojiIcon === IconsMap['magnifier'].mindmeisterName.replace(/:/g, '') || n.emojiIcon === IconsMap['magnifier'].mindmeisterName.replace(/:/g, '')) })
    return questionNodes
  }
  getProblemAnalysisNode () {
    let nodes = MindmapWrapper.getNodesByText((TemplateNodes.PROBLEM_ANALYSIS))
    if (nodes == null || nodes.length === 0) return // todo
    return nodes[0]
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
      let questionNode, nodeId
      if (node._domElement) {
        node = node._domElement
      }
      if (node.dataset) {
        questionNode = that._mindmapParser.getNodeById(node.dataset.id)
        nodeId = node.dataset.id
      } else {
        questionNode = that._mindmapParser.getNodeById(node.id)
        nodeId = node.id
      }
      let question = questionNode._info.title
      let gptBasedNodes = questionNode.children.filter((c) => { return c._info.style === 'FFFFFF,100,0,0,2BD9D9,1,' })
      let prompt
      if (gptBasedNodes.length > 0) {
        prompt = PromptBuilder.getPromptForGPTAlternativeNodes(this, question, gptBasedNodes)
      } else {
        prompt = PromptBuilder.getPromptForGPTNodes(this, question)
      }
      let title = null
      let note = ''
      const parent = that._mindmapParser.getNodeById(questionNode._info.parent)
      if (parent._info.note) {
        note = parent._info.note.replaceAll('\n', ' ')
      }
      title = parent._info.title.replaceAll('\n', ' ')
      if (note !== '') {
        prompt = title + ' means that ' + note + '\n Based on that,' + prompt
      }
      console.log('prompt:\n ' + prompt)
      chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
        if (llm === '') {
          llm = Config.default.defaultLLM
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
              let nodes
              // GPT Answers
              let gptProblemsNodes
              if (!that.isInProblemSpace(that, questionNode)) {
                gptProblemsNodes = gptItemsNodes.map((c) => {
                  return {
                    text: c.label,
                    style: PromptStyles.AnswerItem,
                    image: IconsMap['tick-disabled'],
                    parentId: nodeId,
                    note: c.description
                  }
                })
              } else {
                gptProblemsNodes = gptItemsNodes.map((c) => {
                  return {
                    text: c.label,
                    style: PromptStyles.GoodnessCriteriaItem,
                    parentId: nodeId,
                    note: c.description
                  }
                })
              }
              nodes = gptProblemsNodes
              if (questionNode._info.title.startsWith('WHICH') && questionNode._info.title.includes('CONSEQUENCES')) {
                let allProblems = that.getPreviousProblems(that, questionNode)
                if (allProblems) {
                  let problems = allProblems.split(';')
                  problems.pop()
                  if (problems.length > 0) {
                    problems.shift()
                  }
                  while (problems.length > 0) {
                    let currentProblem = problems.pop().split(':')
                    gptProblemsNodes.push({
                      text: currentProblem[0],
                      style: PromptStyles.ProblemForConsequenceItem,
                      image: IconsMap['tick-disabled'],
                      parentId: nodeId,
                      note: currentProblem[1]
                    })
                  }
                }
              }
              MindmeisterClient.addNodes(that._mapId, nodes).then((response) => {
                if (response.error) {
                  Alerts.showErrorToast('There was an error adding the nodes to the map')
                } else {
                  Alerts.closeLoadingWindow()
                  let title = document.querySelectorAll('.plusTitle')
                  if (title) {
                    title.forEach((t) => {
                      t.remove()
                    })
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
                  llm = Config.default.defaultLLM
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
                      let nodes
                      // PDF Answers
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
                        let gptProblemsNodes = gptItemsNodes.map((c) => {
                          return {
                            text: c.label,
                            style: PromptStyles.AnswerItem,
                            image: IconsMap['tick-disabled'],
                            parentId: node.id,
                            note: c.description
                          }
                        })
                        nodes = otherProblemsNodes.concat(gptProblemsNodes)
                      } else {
                        nodes = otherProblemsNodes
                      }
                      if (questionNode._info.title.startsWith('WHICH')) {
                        let narrative = that.getNarrative(that, questionNode)
                        if (narrative.problem) {
                          let problems = narrative.problem.split(';')
                          problems.pop()
                          let currentProblem = problems.pop().split(':')
                          nodes.push({
                            text: currentProblem[0],
                            style: PromptStyles.AnswerItem,
                            image: IconsMap['tick-disabled'],
                            parentId: node.id,
                            note: currentProblem[1]
                          })
                        }
                      }
                      MindmeisterClient.addNodes(that._mapId, nodes).then((response) => {
                        if (response.error) {
                          Alerts.showAlertToast('There was an error adding the nodes to the map')
                        } else {
                          Alerts.closeLoadingWindow()
                          if (title) {
                            title.forEach((t) => {
                              t.remove()
                            })
                          }
                          let title2 = document.querySelectorAll('.plusTitleOwn')
                          if (title2) {
                            title2.forEach((t) => {
                              t.remove()
                            })
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
  performAllNarrativeQuestion (parser, node, narrative) {
    Alerts.showLoadingWindow(`Creating prompt...`)
    console.log('narrative', narrative)
    let prompt = PromptBuilder.getPromptForNarrativeLines(parser, narrative)
    console.log(prompt)
    chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
      if (llm === '') {
        llm = Config.default.defaultLLM
      }
      chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getAPIKEY', data: llm }, ({ apiKey }) => {
        if (apiKey !== null && apiKey !== '') {
          let callback = (json) => {
            Alerts.closeLoadingWindow()
            console.log(json)
            let callback = () => {
              // Alerts.showLoadingWindow(`Creating mind map node...`)
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
          if (childrenNodes.length > 0) {
            prompt = PromptBuilder.getPromptForAggregation(node.text, childrenNodes, number)
            console.log('prompt: ' + prompt)
            chrome.runtime.sendMessage({ scope: 'llm', cmd: 'getSelectedLLM' }, async ({ llm }) => {
              if (llm === '') {
                llm = Config.default.defaultLLM
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
                    let nodes
                    // GPT Answers
                    let gptProblemsNodes = gptItemsNodes.map((c) => {
                      return {
                        text: c.label,
                        style: PromptStyles.AnswerItemAggregation,
                        image: IconsMap['tick-disabled'],
                        parentId: node.id,
                        note: c.description
                      }
                    })
                    nodes = gptProblemsNodes
                    let removeNodes = childrenNodes.map((c) => {
                      return {
                        id: c._info.id
                      }
                    })
                    MindmeisterClient.removeNodes(that._mapId, removeNodes).then((response) => {
                      if (response.error) {
                        Alerts.showAlertToast('There was an error removing the nodes from the map')
                      } else {
                        MindmeisterClient.addNodes(that._mapId, nodes).then((response) => {
                          if (response.error) {
                            Alerts.showAlertToast('There was an error adding the nodes to the map')
                          } else {
                            Alerts.closeLoadingWindow()
                            let title = document.querySelectorAll('.plusTitle')
                            if (title) {
                              title.forEach((t) => {
                                t.remove()
                              })
                            }
                            let title2 = document.querySelectorAll('.plusTitleOwn')
                            if (title2) {
                              title2.forEach((t) => {
                                t.remove()
                              })
                            }
                          }
                        })
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
        that.onClickIconAnswer(n)
      })
    })
  }
  onClickIconAnswer (uiNode) {
    // todo
    Alerts.showLoadingWindow(`Loading...`)
    let that = this
    let icon = uiNode.getIconElement()
    let iconStyle = icon.getAttribute('aria-label')
    if (uiNode._domElement) {
      uiNode = uiNode._domElement
    }
    that.parseMap().then(() => {
      let nodeObject = that._mindmapParser.getNodeById(uiNode.dataset.id)
      let parent = that._mindmapParser.getNodeById(nodeObject._info.parent)
      let goodnessCriteriaNodes = this._mindmapParser.getNodesWithText(TemplateNodes.GOODNESS_CRITERIA)
      if (goodnessCriteriaNodes == null || goodnessCriteriaNodes.length === 0) return // todo
      let goodnessCriteriaNode = goodnessCriteriaNodes[0]
      if (parent._info.title.startsWith('WHICH')) {
        that.consequencesToGoodnessCriteria(nodeObject, goodnessCriteriaNode)
      } else {
        if (iconStyle.includes('white_check_mark')) {
          that.changeToAnswerNode(uiNode)
          Alerts.closeLoadingWindow()
        } else {
          let currentAddressedProblem = that.getCurrentAddressedProblem()
          that.changeToAddressedProblemNode(uiNode, () => {
            if (currentAddressedProblem) {
              that.changeToAnswerNode(currentAddressedProblem)
            }
            Alerts.closeLoadingWindow()
          })
        }
      }
    })
  }
  addSiblingNode (that, node, type) {
    // let that = this
    let nodeId = node._info.parent
    if (type === 'questionNode') {
      MindmeisterClient.doActions(that._mapId, [{text: '<add your question>', parentId: nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}]).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.closeLoadingWindow()
        }
      })
    } else if (type === 'causeNode') {
      MindmeisterClient.doActions(that._mapId,
        [{text: '<add your cause>', parentId: nodeId, style: PromptStyles.UserAnswerItem, image: IconsMap['tick-disabled']}]
      ).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.closeLoadingWindow()
        }
      })
    } else if (type === 'consequenceNode') {
      MindmeisterClient.doActions(that._mapId,
        [{text: '<add your consequence>', parentId: nodeId, style: PromptStyles.UserAnswerItem, image: IconsMap['tick-disabled']}]
      ).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.closeLoadingWindow()
        }
      })
    }
  }
  changeToAnswerNode (uiNode) {
    // todo
    let uiNodeID
    if (uiNode.dataset) {
      uiNodeID = uiNode.dataset.id
    } else {
      uiNodeID = uiNode.id
    }
    Alerts.showLoadingWindow(`Loading...`)
    this.parseMap().then(() => {
      // let issue = that._mindmapParser.getNodeById(uiNode.id)
      MindmeisterClient.doActions(this._mapId,
        [],
        // [{text: question, parentId: nodeId, style: PromptStyles.QuestionPrompt}],
        [{id: uiNodeID, style: PromptStyles.AnswerItem, image: IconsMap['tick-disabled']}]
      ).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.closeLoadingWindow()
          let title = document.querySelectorAll('.plusTitle')
          if (title) {
            title.forEach((t) => {
              t.remove()
            })
          }
          let title2 = document.querySelectorAll('.plusTitleOwn')
          if (title2) {
            title2.forEach((t) => {
              t.remove()
            })
          }
        }
      })
    }).catch((error) => {
      Alerts.showErrorToast('An error occurred' + error)
    })
  }
  changeToAddressedProblemNode (uiNode, callback) {
    // todo
    Alerts.showLoadingWindow(`Loading...`)
    let uiNodeID
    if (uiNode.dataset) {
      uiNodeID = uiNode.dataset.id
    } else {
      uiNodeID = uiNode.id
    }
    this.parseMap().then(() => {
      // let issue = that._mindmapParser.getNodeById(uiNode.id)
      MindmeisterClient.doActions(this._mapId,
        [],
        // [{text: question, parentId: nodeId, style: PromptStyles.QuestionPrompt}],
        [{id: uiNodeID, style: PromptStyles.AddressedProblems, image: IconsMap['tick-enabled']}]
      ).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.closeLoadingWindow()
          let title = document.querySelectorAll('.plusTitle')
          if (title) {
            title.forEach((t) => {
              t.remove()
            })
          }
          let title2 = document.querySelectorAll('.plusTitleOwn')
          if (title2) {
            title2.forEach((t) => {
              t.remove()
            })
          }
          if (callback) {
            callback()
          }
        }
      })
    }).catch((error) => {
      Alerts.showErrorToast('An error occurred' + error)
    })
  }
  consequencesToGoodnessCriteria (nodeObject, goodnessCriteriaNode) {
    // todo
    Alerts.showLoadingWindow(`Loading...`)
    this.parseMap().then(() => {
      let note = ''
      if (nodeObject._info.note) {
        note = nodeObject._info.note
      }
      MindmeisterClient.doActions(this._mapId,
        [{text: nodeObject._info.title, note: note, parentId: goodnessCriteriaNode._info.id, style: PromptStyles.GoodnessCriteriaItem}]
      ).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.showAlertToast('Goodness criteria added')
          let title = document.querySelectorAll('.plusTitle')
          if (title) {
            title.forEach((t) => {
              t.remove()
            })
          }
          let title2 = document.querySelectorAll('.plusTitleOwn')
          if (title2) {
            title2.forEach((t) => {
              t.remove()
            })
          }
          let interval = setInterval(() => {
            clearInterval(interval)
            Alerts.closeLoadingWindow()
          }, 1500)
        }
      })
    }).catch((error) => {
      Alerts.showErrorToast('An error occurred' + error)
    })
  }
  onClickAnswer (uiNode) {
    // todo
    let that = this
    Alerts.showLoadingWindow(`Loading...`)
    let nodeID
    if (uiNode.dataset) {
      nodeID = uiNode.dataset.id
    } else {
      nodeID = uiNode.id
    }
    this.parseMap().then(() => {
      let issue = that._mindmapParser.getNodeById(nodeID)
      that.onClickAnswerConsequenceMapping(issue)
    }).catch((error) => {
      Alerts.showErrorToast('An error occurred' + error)
    })
  }
  onClickAnswerConsequenceMapping (issue) {
    let issueName = issue.text
    let question = ProcessQuestions.CONSEQUENCE_MAPPING
    question = question.replace('<problem>', issueName)
    let items = MindmapManager.extractQuestionItems(question)
    let variables = this._variables
    items.forEach((i) => {
      let v = variables.find((variable) => { return variable.name.toLowerCase() === i.toLowerCase() })
      _.remove(variables, v)
      if (v == null) return
      question = question.replace(`<${i}>`, v.value)
    })
    if (variables.length > 0) {
      question = question.replace('?', ' ')
      variables.forEach((v) => {
        question = question + ' and assuming that ' + v.name + ' is ' + v.value
      })
      question = question + '?'
    }
    let missingItems = MindmapManager.extractQuestionItems(question)
    if (missingItems.length > 0) {
      Alerts.showErrorToast(`Missing variables: ${missingItems}`)
    } else {
      let nodeId = issue.nodeId || issue._info.id
      MindmeisterClient.doActions(this._mapId,
        [{text: question, parentId: nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier}]
      ).then((response) => {
        if (response.error) {
          Alerts.showErrorToast('There was an error adding the node to the map')
        } else {
          Alerts.closeLoadingWindow()
          let title = document.querySelectorAll('.plusTitle')
          if (title) {
            title.forEach((t) => {
              t.remove()
            })
          }
          let title2 = document.querySelectorAll('.plusTitleOwn')
          if (title2) {
            title2.forEach((t) => {
              t.remove()
            })
          }
        }
      })
    }
    Alerts.closeLoadingWindow()
  }
  getAnswerNodes () {
    // green nodes with tick (either disabled or enabled) icon
    let answerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItem.backgroundColor)
    let pdfBasedAnswerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItemPDFBased.backgroundColor)
    let addressedProblemsColor = Utils.hexToRgb(PromptStyles.AddressedProblems.backgroundColor)
    let aggregatedAnswerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItemAggregation.backgroundColor)
    let userAnswerColor = Utils.hexToRgb(PromptStyles.UserAnswerItem.backgroundColor)
    let questionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(answerNodesColor)
    let pdfBasedQuestionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(pdfBasedAnswerNodesColor)
    let aggregatedAnswerNodes = MindmapWrapper.getNodesByRGBBackgroundColor(aggregatedAnswerNodesColor)
    let addressedProblemsNodes = MindmapWrapper.getNodesByRGBBackgroundColor(addressedProblemsColor)
    let userAnswerNodes = MindmapWrapper.getNodesByRGBBackgroundColor(userAnswerColor)
    questionNodes = questionNodes.concat(pdfBasedQuestionNodes).concat(aggregatedAnswerNodes).concat(addressedProblemsNodes).concat(userAnswerNodes)
    questionNodes = questionNodes.filter((n) => { return n.emojiIcon != null && (n.emojiIcon === IconsMap['tick-enabled'].mindmeisterName.replace(/:/g, '') || n.emojiIcon === IconsMap['tick-disabled'].mindmeisterName.replace(/:/g, '')) })
    return questionNodes
  }
  getCurrentAddressedProblem () {
    let addressedProblemsColor = Utils.hexToRgb(PromptStyles.AddressedProblems.backgroundColor)
    let addressedProblemsNodes = MindmapWrapper.getNodesByRGBBackgroundColor(addressedProblemsColor)
    let currentAddressedProblemNode = addressedProblemsNodes.filter((n) => { return n.emojiIcon != null && (n.emojiIcon === IconsMap['tick-enabled'].mindmeisterName.replace(/:/g, '') || n.emojiIcon === IconsMap['tick-disabled'].mindmeisterName.replace(/:/g, '')) })
    if (currentAddressedProblemNode.length > 0) {
      return currentAddressedProblemNode[0]
    } else {
      return null
    }
  }
  /**
   * Mind map parsing
   */
  parseVariables () {
    this._variables = []
    this._perceivedProblem = null
    let questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.PROBLEM_SPACE)
    if (questionModelNodes == null || questionModelNodes.length === 0) return // todo
    let questionModelNode = questionModelNodes[0]
    let variablesNodes = questionModelNode.getChildrenWithText(TemplateNodes.CONTEXT)
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
    let perceivedProblemNodes = questionModelNode.getChildrenWithText(TemplateNodes.PERCEIVED_PROBLEM)
    if (perceivedProblemNodes == null || perceivedProblemNodes.length === 0) return // todo
    let perceivedProblemNode = perceivedProblemNodes[0]
    let definedPercivedProblem
    if (perceivedProblemNode.children && perceivedProblemNode.children.length > 0) {
      definedPercivedProblem = perceivedProblemNode.children[0]
    } else {
      Alerts.showAlertToast('No perceived problem defined')
    }
    this._perceivedProblem = definedPercivedProblem.text
    this._variables = variables
  }
  parseStyle (callback) {
    this._styles = []
    let styles = []
    chrome.runtime.sendMessage({ scope: 'parameterManager', cmd: 'getNumberOfAuthorsParameter' }, ({ parameter }) => {
      if (parameter && parameter !== '') {
        styles.push({name: 'Number of items', value: parameter})
        styles.push({name: 'Description', value: 'provide rationales'})
        this._styles = styles
        if (callback) callback()
      } else {
        document.querySelector('#numberOfAuthorsParameterInput').value = ITEMS
        styles.push({name: 'Number of items', value: ITEMS})
        styles.push({name: 'Description', value: 'provide rationales'})
        this._styles = styles
        if (callback) callback()
        // setNumberOfAuthorsParameter(3)
      }
    })
    // styles.push({name: 'Number of items', value: ITEMS})
  }

  parseScopingAnalysis () {
    this.parseFirstLevelProblems()
  }
  parseFirstLevelProblems () {
    let that = this
    that._problems = []
    let scopingAnalysisNodes = this._mindmapParser.getNodesWithText(TemplateNodes.PROBLEM_ANALYSIS)
    if (scopingAnalysisNodes == null || scopingAnalysisNodes.length === 0) return // todo
    let scopingAnalysisNode = scopingAnalysisNodes[0]
    let scopingAnalysisNodeChildren = scopingAnalysisNode.children
    // let problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    let problems = []
    scopingAnalysisNodeChildren.forEach((c) => {
      const problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
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
  parseMap () {
    let that = this
    return new Promise((resolve, reject) => {
      MindmeisterClient.getMap(that._mapId).then((mapInfo) => {
        that._mindmapParser = new MindmapContentParser(mapInfo)
        that.parseVariables()
        that.parseStyle(() => {
          that.parseScopingAnalysis()
          resolve()
        })
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
    if (questionNode.style.backgroundColor === 'rgb(150, 219, 11)' || questionNode.style.backgroundColor === 'rgb(0, 192, 0)' || questionNode.style.backgroundColor === 'rgb(0, 128, 0)' || questionNode.style.backgroundColor === 'rgb(194, 24, 7)' || questionNode.style.backgroundColor === 'rgb(248, 230, 157)') {
      return true
    } else {
      return false
    }
  }
  isAddressProblemNode (questionNode) {
    if (questionNode.style.backgroundColor === 'rgb(194, 24, 7)') {
      return true
    } else {
      return false
    }
  }
  isGoodnessCriteriaNode (that, questionNode, questionNodeObject) {
    if (questionNode.style.backgroundColor === 'rgb(0, 170, 255)' && !that.isInContext(that, questionNodeObject)) {
      return true
    } else {
      return false
    }
  }
  isInProblemSpace (that, questionNode) {
    let parent = that._mindmapParser.getNodeById(questionNode._info.parent)
    while (parent !== null) {
      if (parent._info.title === TemplateNodes.PROBLEM_SPACE) {
        return true
      } else {
        parent = that._mindmapParser.getNodeById(parent._info.parent)
      }
    }
    return false
  }
  isInContext (that, questionNode) {
    let parent = that._mindmapParser.getNodeById(questionNode._info.parent)
    while (parent !== null) {
      if (parent._info.title === TemplateNodes.CONTEXT) {
        return true
      } else {
        parent = that._mindmapParser.getNodeById(parent._info.parent)
      }
    }
    return false
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
    while (firstChild._info.title !== TemplateNodes.PROBLEM_ANALYSIS) {
      if (that.hasQuestionType(firstChild, 'WHY IS') && RQPurpose !== 'relevance') {
        narrative.relevance = that.getQuestionTypeAnswers(firstChild, 'WHICH CONSEQUENCES')
      }
      let secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (that.isQuestionType(secondChild, 'WHY DOES')) {
        narrative.problem += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':'
        if (firstChild._info.note) {
          narrative.problem += firstChild._info.note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
        } else {
          narrative.problem += '"";'
        }
      }
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
    }
    return narrative
  }
  getAllNarrative (that, callback) {
    // let question = questionNode._info.title.replaceAll('\n', ' ')
    let narrative = {
      perceivedProblem: '',
      practice: '',
      activity: '',
      person: '',
      consequences: [],
      causes: [],
      addressedProblem: '',
      goodnessCriteria: []
    }
    this.parseMap().then(() => {
      if (that._perceivedProblem) {
        narrative.perceivedProblem = that._perceivedProblem
      }
      if (narrative.perceivedProblem === '' || narrative.perceivedProblem.replaceAll('\n', ' ') === ModelDefaultValues.PerceivedProblem.initial) {
        Alerts.showAlertToast('Perceived problem is not defined')
        let interval = setInterval(() => {
          clearInterval(interval)
          Alerts.closeLoadingWindow()
          return null
        }, 1500)
      }
      that._variables.forEach((v) => {
        if (v.name === 'Practice') {
          narrative.practice = v.value
        } else if (v.name === 'Activity') {
          narrative.activity = v.value
        } else if (v.name === 'Person') {
          narrative.person = v.value
        }
      })
      if (narrative.practice === '' || narrative.practice === ModelDefaultValues.Practice.initial) {
        Alerts.showAlertToast('Practice is not defined')
        let interval = setInterval(() => {
          clearInterval(interval)
          Alerts.closeLoadingWindow()
          return null
        }, 1500)
      }
      if (narrative.activity === '' || narrative.activity.replaceAll('\n', ' ') === ModelDefaultValues.Activity.initial) {
        Alerts.showAlertToast('Activity is not defined')
        let interval = setInterval(() => {
          clearInterval(interval)
          Alerts.closeLoadingWindow()
          return null
        }, 1500)
      }
      if (narrative.person.replaceAll('\n', ' ') === ModelDefaultValues.Person.initial) {
        narrative.person = ''
      }
      let addressedProblemElement = that.getCurrentAddressedProblem()
      if (addressedProblemElement && addressedProblemElement._domElement) {
        narrative.addressedProblem = addressedProblemElement._domElement.dataset.id
      } else {
        Alerts.showAlertToast('You have to select one problem to address')
        let interval = setInterval(() => {
          clearInterval(interval)
          Alerts.closeLoadingWindow()
          return null
        }, 1500)
      }
      // getConsequences
      let addressedProblem = this._mindmapParser.getNodeById(narrative.addressedProblem)
      if (addressedProblem == null) {
        Alerts.showAlertToast('You have to select one problem to address')
        let interval = setInterval(() => {
          clearInterval(interval)
          Alerts.closeLoadingWindow()
          return null
        }, 1500)
      } else {
        if (addressedProblem.children && addressedProblem.children.length === 0) {
          Alerts.showAlertToast('You do not have consequences for the addressed problem')
          let interval = setInterval(() => {
            clearInterval(interval)
            Alerts.closeLoadingWindow()
          }, 1500)
        } else {
          let consequenceNodesQuestion = addressedProblem.children[0]
          if (consequenceNodesQuestion == null) {
            Alerts.showAlertToast('You do not have consequences for the addressed problem')
            let interval = setInterval(() => {
              clearInterval(interval)
              Alerts.closeLoadingWindow()
            }, 1500)
          } else {
            if (consequenceNodesQuestion.children && consequenceNodesQuestion.children.length === 0) {
              Alerts.showAlertToast('You do not have consequences for the addressed problem')
              let interval = setInterval(() => {
                clearInterval(interval)
                Alerts.closeLoadingWindow()
              }, 1500)
            } else {
              Array.from(consequenceNodesQuestion.children).forEach((c) => {
                narrative.consequences.push(c._info.id)
              })
            }
          }
        }
      }
      // getGoodnessCriteria
      let goodnessCriteriaNodes = this._mindmapParser.getNodesWithText(TemplateNodes.GOODNESS_CRITERIA)
      if (goodnessCriteriaNodes == null || goodnessCriteriaNodes.length === 0) {
        Alerts.showAlertToast('No goodness criteria defined')
        let interval = setInterval(() => {
          clearInterval(interval)
          Alerts.closeLoadingWindow()
        }, 1500)
      } else {
        let goodnessCriteriaNode = goodnessCriteriaNodes[0]
        let goodnessCriteriaNodeID = goodnessCriteriaNode._info.id
        let goodnessCriteriaNodeDiv = this._mindmapParser.getNodeById(goodnessCriteriaNodeID)
        if (goodnessCriteriaNodeDiv.children && goodnessCriteriaNodeDiv.children.length === 0) {
          Alerts.showAlertToast('No goodness criteria defined')
          let interval = setInterval(() => {
            clearInterval(interval)
            Alerts.closeLoadingWindow()
          }, 1500)
        } else {
          let goodnessCriteria = goodnessCriteriaNodeDiv.children
          goodnessCriteria.forEach((c) => {
            narrative.goodnessCriteria.push(c._info.id)
          })
        }
      }
      // getCauses
      if (addressedProblem) {
        let allProblems = that.getPreviousProblemsID(that, addressedProblem)
        if (allProblems) {
          narrative.causes = allProblems
        }
        if (_.isFunction(callback)) {
          // eslint-disable-next-line standard/no-callback-literal
          callback(this._mindmapParser, narrative)
        }
      }
    })
  }
  getPreviousProblems (that, questionNode) {
    let problems = ''
    let firstChild = that._mindmapParser.getNodeById(questionNode._info.parent)
    while (firstChild._info.title !== TemplateNodes.PROBLEM_ANALYSIS) {
      let secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (that.isQuestionType(secondChild, 'WHY DOES')) {
        let note = ''
        if (firstChild._info.note) {
          note = firstChild._info.note
        }
        problems += firstChild._info.title.replaceAll('\n', ' ').replaceAll(';', '') + ':' + note.replaceAll('\n', ' ').replaceAll(';', '') + ';'
      }
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
      if (secondChild._info.title === TemplateNodes.PROBLEM_ANALYSIS) {
        break
      }
    }
    return problems
  }
  getPreviousProblemsID (that, questionNode) {
    let problems = []
    let firstChild = that._mindmapParser.getNodeById(questionNode._info.parent)
    while (firstChild._info.title !== TemplateNodes.PROBLEM_ANALYSIS) {
      let secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (that.isQuestionType(secondChild, 'WHY DOES')) {
        problems.push(firstChild._info.id)
      }
      firstChild = that._mindmapParser.getNodeById(secondChild._info.parent)
      if (secondChild._info.title === TemplateNodes.PROBLEM_ANALYSIS) {
        return problems
      }
    }
    return problems
  }
  getLastNodeOfNarrative (that, questionNode) {
    let firstChild = that._mindmapParser.getNodeById(questionNode._info.id)
    let secondChild
    let thirdChild
    while (firstChild._info.title !== TemplateNodes.PROBLEM_ANALYSIS) {
      thirdChild = secondChild
      secondChild = that._mindmapParser.getNodeById(firstChild._info.parent)
      if (secondChild._info.title !== TemplateNodes.PROBLEM_ANALYSIS) {
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
    let question = 'How can ' + problem + ' be lessened during ' + activity + ' in ' + practice + '?'
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
    while (firstChild._info.title !== TemplateNodes.PROBLEM_ANALYSIS) {
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
  addObserverToAddButton () {
    // Select the node that you want to observe
    const targetNode = document.querySelector('.addButton')
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, attributeOldValue: true }
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'style') {
            Utils.reloadLabels()
          }
        }
      }
    }
    // Create an instance of MutationObserver
    const observer = new MutationObserver(callback)
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config)
  }
}

module.exports = MindmapManager
