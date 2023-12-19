
const MindmeisterLocators = {
  'MINDMAP_NODE_BY_ID': 'div[data-id=$1]',
  'MINDMAP_NODES': 'div[data-id]',
  'MINDMAP_NODE_ICON_EMOJI': 'button.emoji-mart-emoji',
  'MINDMAP_NODE_CHILDREN': '',
  // 'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(1)',
  'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(1)',
  'CHATIN_MINDMAP_TEMPLATE': '.chatinTemplate',
  'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(1)',
  // 'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div',
  // 'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(2)',
  'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(2)',
  'MINDMAP_TEMPLATE_NAME': '.kr-text',
  'MINDMAP_NODE_ICON': 'button.emoji-mart-emoji,img'
}

module.exports = MindmeisterLocators
