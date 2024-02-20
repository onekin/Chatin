const ModelDefaultValues = require('./ModelDefaultValues')
const ProcessQuestions = require('./ProcessQuestions')
const MindmapManager = require('./MindmapManager')

class PromptBuilder {
  static getPromptForGPTNodes (that, question) {
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
    const MindmapManager = require('./MindmapManager')
    const problemStatementPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT)
    const problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS)
    if (problemPromptRE.test(question) || problemStatementPromptRE.test(question)) {
      prompt = PromptBuilder.getPromptForGPTProblemNodes(question, numberOfItems, description)
    }
    const relevancePromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.CONSEQUENCE_MAPPING)
    if (relevancePromptRE.test(question)) {
      prompt = PromptBuilder.getPromptForGPTRelevanceNodes(question, numberOfItems, description)
    }
    return prompt
  }
  static getPromptForGPTProblemNodes (question, numberOfItems, description) {
    let prompt = question + 'Please provide ' + numberOfItems + ' items with descriptions that ' + description
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:'
    prompt += '{\n' + '"problem": ['
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_problem_name":"name for the problem",' +
          '"description": "description of the problem that ' + description + '",' +
          '}'
      } else {
        prompt += ',{"GPT_problem_name":"name for the problem",' +
          '"description": "description of the problem that ' + description + '",' +
          '}'
      }
    }
    prompt += ',\n]\n' + '}'
    return prompt
  }
  static getPromptForGPTRelevanceNodes (question, numberOfItems, description) {
    let prompt = question + 'Please provide ' + numberOfItems + ' items with descriptions that ' + description
    prompt += ' You have to provide the response in JSON format including each item in an array. The format should be as follows:'
    prompt += '{\n' + '"relevance": ['
    for (let i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        prompt += '{"GPT_relevance_name":"relevance name",' +
          '"description": "description of the relevance reason that ' + description + '",' +
          '}'
      } else {
        prompt += ',{"GPT_relevance_name":"relevance name",' +
          '"description": "description of the relevance reason that ' + description + '",' +
          '}'
      }
    }
    prompt += '\n]\n' + '}'
    return prompt
  }
  // PROMPTS FOR GPT BASED QUESTION FOR ALTERNATIVE NODES
  static getPromptForGPTAlternativeNodes (that, question, chatGPTBasedAnswers) {
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
      prompt = PromptBuilder.getPromptForGPTAlternativeProblemNodes(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    const relevancePromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.CONSEQUENCE_MAPPING)
    if (relevancePromptRE.test(question)) {
      prompt = PromptBuilder.getPromptForGPTAlternativeRelevanceNodes(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    return prompt
  }
  static getPromptForGPTAlternativeProblemNodes (question, numberOfItems, description, chatGPTBasedAnswers) {
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
  static getPromptForGPTAlternativeRelevanceNodes (question, numberOfItems, description, chatGPTBasedAnswers) {
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
  // PROMPTS FOR PDF BASED QUESTION
  static getPromptForPDFBasedQuestion (that, question, chatGPTBasedAnswers) {
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
    const relevancePromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.CONSEQUENCE_MAPPING)
    if (relevancePromptRE.test(question)) {
      prompt = that.getPDFBasedRelevancePrompt(question, numberOfItems, description, chatGPTBasedAnswers)
    }
    return prompt
  }
  static getPDFBasedProblemPrompt (question, numberOfItems, description, chatGPTBasedAnswers) {
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
  static getPDFBasedRelevancePrompt (question, numberOfItems, description, chatGPTBasedAnswers) {
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
  // PROMPTS FOR AGGREGATION QUESTION
  static getPromptForAggregation (question, nodes, number) {
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
  static getPromptForNarrativeLines (question, narrative, variables) {
    // let that = this
    let numberOfLines = 0
    let practice = variables.find((v) => { return v.name === 'Practice' }).value
    let activity = variables.find((v) => { return v.name === 'Activity' }).value
    let prompt = 'I want you to behave as an academic. Next I will provide you with a RESEARCH QUESTION and a set of text chunks that provide the CONTEXT where the Research Question aroses. I want you to provide a coherent narrative that ends up in the question Research Question\n'
    prompt += 'RESEARCH QUESTION=[ ' + narrative.question + ']\n'
    if (narrative.problem) {
      let problems = narrative.problem.split(';')
      problems.pop()
      let currentProblem = problems.pop().split(':')
      numberOfLines += 2
      prompt += 'CONTEXT=[ One of the problems that arise during  ' + activity + ' in ' + practice + ' is  ' + currentProblem[0] + ', which means that ' + currentProblem[1] + '.\n'
      while (problems.length > 0) {
        let followingProblem = problems.pop().split(':')
        numberOfLines += 2
        prompt += currentProblem[0] + ' occurs because ' + followingProblem[0] + ', which means that ' + followingProblem[1] + '\n'
        currentProblem = followingProblem
      }
    }
    if (narrative.relevance) {
      let relevances = narrative.relevance.split(';')
      relevances.pop()
      let currentRelevance = relevances.pop().split(':')
      numberOfLines += 2
      prompt += 'This problem is relevant because ' + currentRelevance[0] + ' which means that ' + currentRelevance[1] + '.\n'
      while (relevances.length > 0) {
        currentRelevance = relevances.pop().split(':')
        prompt += 'It is also relevant because ' + currentRelevance[0] + ', which means that ' + currentRelevance[1] + '\n'
      }
    }
    prompt += 'Please, provide a narrative that ends up in the Research Question. You have to provide the response in JSON format including the narrative in a "answer" item. The format should be as follows:\n]'
    prompt += '{\n' + '"narrative": "The narrative of the research question in ' + numberOfLines + ' lines "\n' + '}\n'
    return prompt
  }
}

module.exports = PromptBuilder
