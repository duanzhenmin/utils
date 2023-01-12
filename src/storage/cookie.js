import isEqual from '../common/isEqual'

/**
 * 设置cookie
 * @param name
 * @param value
 * @param expires
 * @param domain
 * @param path
 * @returns {boolean}
 */
const setCookie = (name, value, {expires, domain, path = '/'} = {}) => {
  if (!name) {
    return false
  }
  let sExpires = ''
  if (expires) {
    let date = new Date()
    let timezoneOffset = date.getTimezoneOffset()
    date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000) - (timezoneOffset * 60 * 1000))
    sExpires = ';expires=' + date.toUTCString()
  }
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${sExpires}${domain ? `;domain=${domain}` : ''};path=${path}`
  return true
}

/**
 * 获取cookie
 * @param name
 * @returns {string}
 */
const getCookie = (name) => {
  let cookies = document.cookie.replace(/;\s+/g, ';').split(';')
  let _name = encodeURIComponent(name)
  let res = cookies.find(item => {
    return item && isEqual(item.split('=')[0], _name)
  })
  if (res) {
    return decodeURIComponent(res.split('=')[1] || '')
  }
  return ''
}

/**
 * 清除cookie
 * @param name
 * @param domain
 * @param path
 */
const clearCookie = (name, {domain, path} = {}) => {
  setCookie(name, '', {expires: -30, domain, path})
}

export default {
  setCookie,
  getCookie,
  clearCookie
}
