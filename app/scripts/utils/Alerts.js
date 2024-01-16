
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

  static infoAlert ({text = chrome.i18n.getMessage('expectedInfoMessageNotFound'), title = 'Info', callback, confirmButtonText = 'OK'}) {
    Alerts.tryToLoadSwal()
    if (_.isNull(swal)) {
      if (_.isFunction(callback)) {
        callback(new Error('Unable to load swal'))
      }
    } else {
      swal.fire({
        type: 'info',
        title: title,
        confirmButtonText: confirmButtonText,
        html: '<div style="text-align: justify;text-justify: inter-word" width=700px>' + text + '</div>',
        onBeforeOpen: () => {
          let element = document.querySelector('.swal2-popup')
          element.style.width = '800px'
          // Add event listeners to the buttons after they are rendered
        }
      }).then(() => {
        if (_.isFunction(callback)) {
          callback(null)
        }
      })
    }
  }

  static multipleInputAlert ({title = 'Input', html = '', preConfirm, showCancelButton = true, callback}) {
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
        showCancelButton: showCancelButton
      }).then(() => {
        if (_.isFunction(callback)) {
          callback(null)
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
