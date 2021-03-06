export default class {
  static createFormData(e, formData, father) {
    formData = formData || new FormData()
    Object.keys(e).filter(k => e[k] !== null).map((k) => {
      let key = father ? father + '.' + k : k
      if (Object.prototype.toString.call(e[k]) === '[object Object]') {
        this.createFormData(e[k], formData, key)
      } else {
        formData.append(key, e[k])
      }
    })
    return formData
  }
  static createUrlEncode(e, father) {
    return Object.keys(e).filter(k => e[k] || e[k] === 0).map(k => {
      let name = father ? `${father}.${k}` : `${k}`
      return e[k].constructor === Object ? this.createUrlEncode(e[k], k) : `${name}=${e[k]}`
    }).join('&')
  }
}
