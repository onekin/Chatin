
let swal = null
if (document && document.head) {
  swal = require('sweetalert2')
}
const _ = require('lodash')

class Alerts {
  static showErrorWindow (message) {
    swal.fire({
      icon: 'error',
      html: message
    })
  }

  static showErrorToast (message, destroyFunc) {
    swal.fire({
      icon: 'error',
      text: message,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      didDestroy: destroyFunc
    })
  }

  static showAlertToast (message, destroyFunc) {
    swal.fire({
      icon: 'info',
      text: message,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      didDestroy: destroyFunc
    })
  }

  static showWarningWindow (message) {
    swal.fire({
      icon: 'warning',
      html: message
    })
  }

  static showToast (content) {
    swal.fire({
      icon: 'warning',
      toast: true,
      html: content,
      width: '500px',
      position: 'bottom-end',
      confirmButtonText: 'Close'
    })
  }

  static showOptionsToast (content) {
    swal.fire({
      icon: 'warning',
      toast: true,
      html: '<h1 style="font-size:30px">' + content + '</h1>',
      width: '500px',
      position: 'bottom-end',
      confirmButtonText: 'Close'
    })
  }

  static showLoadingWindow (content) {
    swal.fire({
      title: 'Loading',
      html: content,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      showCancelButton: false,
      onBeforeOpen: () => {
        swal.showLoading()
      }
    })
  }

  static closeLoadingWindow () {
    swal.hideLoading()
    swal.close()
  }

  static showNarrative ({text = chrome.i18n.getMessage('expectedInfoMessageNotFound'), title = 'Info', callback, confirmButtonText = 'OK', showCancelButton = true}) {
    Alerts.tryToLoadSwal()
    if (_.isNull(swal)) {
      if (_.isFunction(callback)) {
        callback(new Error('Unable to load swal'))
      }
    } else {
      swal.fire({
        type: 'info',
        title: title,
        showCancelButton: showCancelButton,
        cancelButtonText: 'Copy',
        confirmButtonText: confirmButtonText,
        html: '<div style="text-align: justify;text-justify: inter-word" width=700px>' + text + '</div>',
        onBeforeOpen: () => {
          let element = document.querySelector('.swal2-popup')
          element.style.width = '800px'
          // Add event listeners to the buttons after they are rendered
        }
      }).then((result) => {
        if (result.value) {
          if (_.isFunction(callback)) {
            // callback(null, result.value)
          }
        } else {
          navigator.clipboard.writeText(text)
            .then(() => {
              console.log('Text copied to clipboard')
            })
            .catch(err => {
              console.error('Error in copying text: ', err)
            })
        }
      })
    }
  }

  static infoAlert ({text = chrome.i18n.getMessage('expectedInfoMessageNotFound'), title = 'Info', callback, confirmButtonText = 'OK', cancelButtonText = 'Cancel', showCancelButton = true}) {
    Alerts.tryToLoadSwal()
    if (_.isNull(swal)) {
      if (_.isFunction(callback)) {
        callback(new Error('Unable to load swal'))
      }
    } else {
      swal.fire({
        type: 'info',
        title: title,
        showCancelButton: showCancelButton,
        cancelButtonText: cancelButtonText,
        confirmButtonText: confirmButtonText,
        html: text,
        onBeforeOpen: () => {
          let element = document.querySelector('.swal2-popup')
          element.style.width = '800px'
          // Add event listeners to the buttons after they are rendered
        }
      }).then((result) => {
        if (result.value) {
          if (_.isFunction(callback)) {
            callback(null, result.value)
          }
        }
      })
    }
  }

  static multipleInputAlert ({title = 'Input', html = '', preConfirm, showCancelButton = true, callback, allowOutsideClick = true}) {
    Alerts.tryToLoadSwal()
    if (_.isNull(swal)) {
      if (_.isFunction(callback)) {
        callback(new Error('Unable to load swal'))
      }
    } else {
      swal.fire({
        title: title,
        html: html,
        focusConfirm: false,
        preConfirm: preConfirm,
        showCancelButton: showCancelButton,
        allowOutsideClick: allowOutsideClick
      }).then((result) => {
        if (result.value) {
          if (_.isFunction(callback)) {
            callback(null, result.value)
          }
        }
      })
    }
  }

  static askUserNumberOfClusters (number, callback) {
    let showForm = () => {
      // Create form
      let numberInput = Math.floor(number / 2)
      let html = ''
      html += '<label for="numberInput">Enter a number (less than ' + number + '): </label>'
      html += '<input type="number" id="numberInput" name="numberInput" value="' + numberInput + '" min="1" max="' + (number - 1) + '" ><br>'
      Alerts.multipleInputAlert({
        title: 'How many nodes do you want to cluster?',
        html: html,
        // position: Alerts.position.bottom, // TODO Must be check if it is better to show in bottom or not
        preConfirm: () => {
          numberInput = document.querySelector('#numberInput').value
        },
        showCancelButton: true,
        allowOutsideClick: false,
        callback: (err) => {
          if (err) {
            callback(new Error('Unable to read json file: ' + err.message))
          } else {
            callback(null, numberInput)
          }
        }
      })
    }
    showForm()
  }

  static tryToLoadSwal () {
    if (_.isNull(swal)) {
      try {
        swal = require('sweetalert2')
      } catch (e) {
        swal = null
      }
    }
  }
}

module.exports = Alerts
