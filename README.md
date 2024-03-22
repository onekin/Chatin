# CHATIN
Chatin is a browser extension that brings the power of Large Language Models (LLMs) to MindMeister, making problem analysis easier and more intuitive. Understanding a problem isn't just about recognizing a gap; it's about exploring that gap from what you initially perceive to what you eventually aim to solve. This journey, known as 'problem scoping,' involves hypothesizing, testing, and evolving your understanding based on observations.

Traditional methods like literature reviews are thorough but time-consuming. Chatin offers a swift alternative, leveraging LLMs to provide immediate, relevant insights directly into your MindMeister maps. It's designed for those initial stages of problem-solving where quick, informed guidance can pivot your direction towards more effective solutions.

With Chatin, enhance your problem-solving process by integrating the speed of LLMs with the visual organization of MindMeister. Dive into problem analysis with an innovative tool that guides you from your first hunch to your final strategy.

## References
Díaz, O., Garmendia, X., Contell, J. P., & Pereira, J. (2023, May). Inquiry Frameworks for Research Question Scoping in DSR: A Realization for ChatGPT. In International Conference on Design Science Research in Information Systems and Technology (pp. 299-313). Cham: Springer Nature Switzerland.

# END-USERS MANUAL
Purpose: Chatin is a cutting-edge browser extension designed to guide the problem analysis in MindMeister. By harnessing the power of Large Language Models (LLMs), Chatin aims to explore the landscape of your initial problem perception and offer different insights and help for understand and conceptualize your problem.

How It Works: Chatin adds a mind map template in MindMeister to start conceptualizing your problem. After defining your context, Chatin introduces the dynamic intelligence of LLMs to enrich your problem analysis by initiating a exploration of the domain through prompting. It transforms the initial, often vague, problem perceptions into clearly scoped challenges. Through an interactive process, Chatin helps you explore and refine your problem to maximize the chances of getting the a usefull solution for it! Although it lacks the veracity of literature review, it provides other benefits such as:

- Efficiency: By integrating LLM insights directly into your MindMeister workflow, Chatin significantly reduces the time needed for literature reviews and data gathering.
- Clarity: It clarifies the problem scoping process, helping you move from a broad understanding of issues to pinpointing specific actionable problems.
- Enhanced Problem Solving: With the support of LLMs, you gain access to a wide range of knowledge and perspectives, enhancing creativity and depth in problem-solving.

## Installation and Setup
You can follow these steps to get Chatin up and running

### Step 1: Requirements
Ensure your computer and you meet the minimum requirements for running Chatin.

- Google Chrome browser
- Mindmeister account. The free version allows you to create 3 maps at most.
- LLM API key. Chatin allows you to interact with GPT and Claude, therefore, in order to use them ensure you have an OpenAI or Anthropic API key

### Step 2: Install the Chatin Extension
- Open your web browser and navigate to the Chatin extension page on the [[Browser Extension Store/Marketplace](https://chromewebstore.google.com/detail/chatin/ojgphilpbmgaclmomnhjbcmjmhdlcbbn)].
- Click the "Add to Browser" or "Install" button to begin the installation process.
- Once the installation is complete, you will see a Chatin icon appear in your browser’s toolbar. This indicates that Chatin is successfully installed.

### Step 3: Setup
Open Chatin's options panel. You can do it by right click in Chatin's browser’s toolbar icon.

<img width="521" alt="Screenshot 2024-03-21 at 17 21 05 1" src="https://github.com/onekin/Chatin/assets/31988855/118f2ef8-0a34-4ba5-baff-75064f3f23c3">

In this page, you have to complete the following information:

1. Grant access to MindMeister
2. Select your Large Language Model and include your API key
3. Establish the number of answers you want to retrieve by each prompting

<img width="750" alt="Screenshot 2024-03-21 at 17 33 04" src="https://github.com/onekin/Chatin/assets/31988855/76b378d3-2036-48d5-b5d5-a10867bb6cc3">

Finally, Check if the Chatin template appears in MindMeister.

<img width="1067" alt="Screenshot 2024-03-21 at 17 38 00" src="https://github.com/onekin/Chatin/assets/31988855/09f7e556-9def-461f-aaac-f13a28434e79">

## Getting Started
You can create a Chatin mind map clicking on its template. Once you click there, an empty Chatin map is displayed:

<img width="1466" alt="Screenshot 2024-03-21 at 17 44 07" src="https://github.com/onekin/Chatin/assets/31988855/61406ea0-cc33-45ba-b42e-43a7461ae45e">

First, you have to complete your problem space. To this aim, you have to complete the following nodes:
- Perceived Problem:
- Practice: Indicate which is the setting or context you want to address. An example can be “combating climate change”
- Activity: Indicate one concrete task from the practice you want to research. An example of an activity within the practice of combating climate change could be “reduce the use of cars”.
- Person [optional]: People that engage in the practice in which they perceive the problem
- Optional variables: You can add extra variables adding new nodes in the Context node.
  
<img width="1272" alt="Screenshot 2024-03-21 at 18 14 10" src="https://github.com/onekin/Chatin/assets/31988855/1ff0c319-05eb-49d5-a61d-dffeea3f23ff">

Once the Problem Space is defined, you can start the analysis clicking on the "NEW" button in the Problem Analysis node. At the start of the analysis you will see that a new yellow/question node is created to start the analysis. Remember that you can refine or extend the problem space when you want during the problem analysis.

## Features and Functionality
We distinguish two kinds of functionalities: Divergent functionalities (those that help to create new nodes) and Convergence functionalities (those that help to decide which node select).

Chatin offers different prompts to explore the problem and analyze the cause and consequences of the problem. First, Chatin starts identifying causes using the "5 why strategy" through prompting and creating question nodes that deep into the cause of the problems. Question nodes are displayed with the yellow color and they contain the prompt that is going to be send to the LLM. To perform the question, the user has to click on the node and then select the 'ask question' label that is going to appear (alternatively, the question can also be done by clicking the magnifier icon). After waiting few seconds, new green nodes are generated by the LLM that answer the question.

<img width="1055" alt="Screenshot 2024-03-21 at 18 46 36" src="https://github.com/onekin/Chatin/assets/31988855/4e22b41d-a9f7-40d9-ab8b-64e167037b89">

Moreover, if you click on the node's note, a description of the answer is displayed.
<img width="1055" alt="Screenshot 2024-03-21 at 18 52 18" src="https://github.com/onekin/Chatin/assets/31988855/9e1ac2f1-11ab-486a-93e8-66f82704c7a7">

Now, here starts the iterative process. For the identified problems new question nodes can be generated to deep into the problem


## Chatin's nodes
During the problem analysis you will see that Chatin creates different nodes depending on the situation, this section summarizes the different options
Solutions to common problems and answers to frequently asked questions.
### Context nodes (light blue)
### Question nodes (yellow)
### Answer nodes from (green)
### Answer nodes from LLM based on PDF (light green)
### Compacted answer nodes (dark green)
### Current addressed problem (red)


## Support and Resources
Information on where to find further help, including support forums, contact information, and links to additional resources.


# DEVELOPERS MANUAL
## Architecture Overview

High-level overview of the software’s architecture, including its major components and how they interact.
## Development Environment
Instructions for setting up a development environment, including required tools, libraries, and configurations.

## API Documentation
Comprehensive guide to the artifact's API, including endpoints, parameters, and examples of requests and responses.

## Code Structure
Explanation of the artifact’s code organization, highlighting key modules, classes, and interfaces.

## Building and Testing
Guidelines for building the software from source, running tests, and contributing code that meets the project’s quality standards.

## Contribution Guidelines
Detailed instructions for contributing to the project, including coding conventions, the pull request process, and how contributions are reviewed.

## Roadmap and Future Plans
Information on the project’s direction, upcoming features, and how developers can contribute to future development.


	$ npm install
	$ gulp default

## Usage

Run `$ gulp --watch` and load the `dist`-directory into chrome.

## Entryfiles (bundles)

There are two kinds of entryfiles that create bundles.

1. All js-files in the root of the `./app/scripts` directory
2. All css-,scss- and less-files in the root of the `./app/styles` directory

## Tasks

### Build

    $ gulp


| Option         | Description                                                                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--watch`      | Starts a livereload server and watches all assets. <br>To reload the extension on change include `livereload.js` in your bundle.                      |
| `--production` | Minifies all assets                                                                                                                                   |
| `--verbose`    | Log additional data to the console.                                                                                                                   |
| `--vendor`     | Compile the extension for different vendors (chrome, firefox, opera, edge)  Default: chrome                                                                 |
| `--sourcemaps` | Force the creation of sourcemaps. Default: !production                                                                                                |


### pack

Zips your `dist` directory and saves it in the `packages` directory.

    $ gulp pack --vendor=firefox

### Version

Increments version number of `manifest.json` and `package.json`,
commits the change to git and adds a git tag.


    $ gulp patch      // => 0.0.X

or

    $ gulp feature    // => 0.X.0

or

    $ gulp release    // => X.0.0


## Globals

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. It will be set to `development` unless you use the `--production` option.

## Testing
