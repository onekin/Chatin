
const IconsMap = {
  'tick-enabled': {
    fileUrl: chrome.runtime.getURL('images/tickEnabled.png'),
    mindmeisterName: ':white_check_mark:'
  },
  'tick-disabled': {
    fileUrl: chrome.runtime.getURL('images/tickDisabled.png'),
    mindmeisterName: ':ballot_box_with_check:'
  },
  'magnifier': {
    fileUrl: chrome.runtime.getURL('images/magnifier.png'),
    mindmeisterName: ':mag:'
  }
}

module.exports = IconsMap
