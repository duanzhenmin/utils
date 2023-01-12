function padLeftZero(str, len) {
  str = str + "";
  if (len <= str.length) {
    return str
  }
  let _str = '0000' + str;
  return _str.substr(_str.length - len);
}

/**
 * 格式化时间戳
 * @param {string|number} time 时间戳
 * @param {string} fmt 期望格式
 * @param {boolean} isSeconds date单位是不是秒
 * @returns {Date|*}
 */
export default function formatDate(time, fmt, isSeconds) {
  let date = "";
  time = time || (isSeconds = false,new Date().getTime())
  if (isSeconds) {
    date = new Date(time * 1000);
  } else {
    date = new Date(time);
  }
  if (fmt) {
    let o = {
      'y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      "s+": date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        let _$1 = RegExp.$1;
        fmt = fmt.replace(_$1, padLeftZero(str, _$1.length));
      }
    }
    return fmt;
  }
  return date;
};
