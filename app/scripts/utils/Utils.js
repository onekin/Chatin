class Utils {
  static hexToRgb (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  static sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  static async performRequest (opts, reqOptions = {remainingAttempts: 4, attempt: 0}) {
    let that = this
    let url = opts.url
    let r = {
      method: opts.method || 'GET',
      headers: opts.headers || {}
    }
    switch (opts.method) {
      case 'POST':
        // todo consider different content-types
        if (r.headers['Content-Type'] == null || r.headers['Content-Type'].includes('application/json')) {
          r['body'] = opts.params
        } else if (r.headers['Content-Type'].includes('application/x-www-form-urlencoded')){
          let formBody = []
          for (let property in opts.params) {
            let encodedKey = encodeURIComponent(property)
            let encodedValue = encodeURIComponent(opts.params[property])
            formBody.push(encodedKey + '=' + encodedValue)
          }
          formBody = formBody.join('&')
          r['body'] = formBody
        }
        break
      case 'GET':
        url += '?' + new URLSearchParams(opts.params)
        break
      case 'DELETE':
        // DO NOTHING
        break
      case 'PATCH':
        r['body'] = opts.params
        break
      case 'PUT':
        // todo
        break
    }
    let response = await fetch(url, r)
    if (response.ok) {
      return response
    } else {
      // check error
      // if timeout error --> retry
      if (reqOptions.remainingAttempts > 0) {
        let interval = 500 * Math.pow(2, reqOptions.attempt) // make configurable
        await that.sleep(interval)
        reqOptions.remainingAttempts--
        reqOptions.attempt++
        return that.performRequest(opts, reqOptions)
      } else {
        return Promise.reject({message: 'Request error', cause: {code: response.status}, response: response})
      }
    }
  }

  static prettifyNodeText (text) {
    const lineChars = 20
    let newText = ''
    let remainder = text
    do {
      newText = newText + remainder.substring(0, lineChars-1)
      remainder = remainder.substring(lineChars - 1)
      let nextBlank = remainder.indexOf(' ')
      if (nextBlank == -1){
        newText += remainder
        remainder = ''
      } else {
        newText += remainder.substring(0, nextBlank) + '\n'
        remainder = remainder.substring(nextBlank + 1)
      }
    } while (remainder.length > 0)
    return newText
  }
}

module.exports = Utils
