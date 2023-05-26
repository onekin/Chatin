
const Swal = require('sweetalert2')

class Alerts {
  static showErrorWindow (message) {
    Swal.fire({
      icon: 'error',
      html: message
    })
  }

  static showErrorToast (message, destroyFunc) {
    Swal.fire({
      icon: 'error',
      text: message,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      didDestroy: destroyFunc
    })
  }

  static showWarningWindow (message) {
    Swal.fire({
      icon: 'warning',
      html: message
    })
  }

  static showToast (content) {
    Swal.fire({
      icon: 'warning',
      toast: true,
      html: content,
      width: '500px',
      position: 'bottom-end',
      confirmButtonText: 'Close'
    })
  }

  static showLoadingWindow (content) {
    Swal.fire({
      title: 'Loading',
      html: content,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      showCancelButton: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
  }

  static closeLoadingWindow () {
    Swal.hideLoading()
    Swal.close()
  }
}

module.exports = Alerts
