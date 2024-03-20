# CHATIN
Overview of the software artifact, including its purpose and benefits.

Díaz, O., Garmendia, X., Contell, J. P., & Pereira, J. (2023, May). Inquiry Frameworks for Research Question Scoping in DSR: A Realization for ChatGPT. In International Conference on Design Science Research in Information Systems and Technology (pp. 299-313). Cham: Springer Nature Switzerland.

# END-USERS MANUAL
Overview of the software artifact, including its purpose and benefits.
## Installation and Setup
Step-by-step instructions for installing and setting up the software for use, including any necessary configurations.
## Getting Started
A quick-start guide to help new users begin using the software effectively.
## Features and Functionality
Detailed explanations of the software’s features, including how to use them in common scenarios.
## Troubleshooting 
Solutions to common problems and answers to frequently asked questions.
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
