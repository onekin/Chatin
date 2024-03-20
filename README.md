# Chatin
A succinct summary of the artifact’s purpose, its target audience, and key features that distinguish it from similar artifacts.

Chatin is a browser extension that enables problem analysis through MindMeister
This extension enables Design Science Research through Mindmeister.
This extension integrates Mindmeister with ChatGPT

DOWNLOAD: https://drive.google.com/file/d/15yyt5cHznoK781-cKELG4vzhg0HHz1Nu/view?usp=sharing

## Sources
Díaz, O., Garmendia, X., Contell, J. P., & Pereira, J. (2023, May). Inquiry Frameworks for Research Question Scoping in DSR: A Realization for ChatGPT. In International Conference on Design Science Research in Information Systems and Technology (pp. 299-313). Cham: Springer Nature Switzerland.

# Table of Contents




# Getting Started
End users require a mindmeister account

### Installation from Chrome Web Store

## Installation from Github

# Usage
End users require a mindmeister account

## Installation from Chrome Web Store

## Installation from Github

## Configuration

# For developers
Chatin in a web extensions, therefore, it follows a web extension architecture. The source code is developed with web development technology, mainly Node.js. In order to use webpack for turning the source code of Chatin into the final output that can run in a browser, we resort to gulp.

it is necessary to use Node v10.24.1


# For contributors


## Installation

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
