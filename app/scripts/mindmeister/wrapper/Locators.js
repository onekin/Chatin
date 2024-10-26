
const MindmeisterLocators = {
  'MINDMAP_NODE_BY_ID': 'div[data-id=$1]',
  'MINDMAP_NODES': 'div[data-id]',
  'MINDMAP_NODE_ICON_EMOJI': 'button.emoji-mart-emoji',
  'MINDMAP_NODE_CHILDREN': '',
  // 'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(1)',
  // 'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(1)',
  'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div:nth-child(1)',
  'CHATIN_MINDMAP_TEMPLATE': '#chatinTemplate',
  // 'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div:nth-child(1)',
  'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div:nth-child(2)',
  // 'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div',
  // 'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(2)',
  // 'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div:nth-child(2)',
  'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div:nth-child(2)',
  // 'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div:nth-child(2)',
  'MINDMAP_TEMPLATE_NAME': '.kr-text',
  'MINDMAP_NODE_ICON': 'button.emoji-mart-emoji,img',
  'PDF_ELEMENT': '<svg width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#000" fill-opacity=".1" d="M4.923 1h9.338c.516 0 .695.019.893.064.198.046.373.119.545.226.173.108.312.221.677.586l3.748 3.748c.365.365.478.504.586.677.107.172.18.347.226.545.045.198.064.377.064.893v13.338c0 .669-.07.911-.2 1.156-.131.244-.323.436-.567.567-.245.13-.487.2-1.156.2H4.923c-.669 0-.911-.07-1.156-.2a1.363 1.363 0 0 1-.567-.567c-.13-.245-.2-.487-.2-1.156V2.923c0-.669.07-.911.2-1.156.131-.244.323-.436.567-.567.245-.13.487-.2 1.156-.2z"></path><path fill="#FFF" d="M14.827 2.032a.876.876 0 0 1 .174.06L15 7h4.909a.876.876 0 0 1 .059.173c.023.1.032.188.032.447v13.739c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066H4.641c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189C4.024 21.663 4 21.582 4 21.36V2.641c0-.223.023-.304.067-.385a.454.454 0 0 1 .189-.19C4.337 2.024 4.418 2 4.64 2h9.74c.258 0 .347.01.446.032z"></path><path fill="#000" fill-opacity=".05" d="M15 7h5v5z"></path><path stroke="#FF4019" stroke-width=".85" d="M12 7.5c-3 0 3.43 11.43 4.909 9.325 1.265-2.794-11.083-2.794-9.818 0C8.57 18.93 15 7.5 12 7.5z"></path></g></svg>'
}

module.exports = MindmeisterLocators
