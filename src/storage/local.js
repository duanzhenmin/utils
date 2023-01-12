import Type from "../common/Type";

/**
 * 存储
 * @param key
 * @param value
 */
const setLocalStorage = (key, value) => {
  let _value = value;
  if (Type.isNull(value) || Type.isUndefined(value)) {
    _value = ""
  } else if (Type.isString(value)) {
    _value = value;
  } else {
    try {
      _value = JSON.stringify(value);
    } catch (e) {
      _value = value;
    }
  }
  window.localStorage.setItem(key, _value);
}

/**
 * 获取
 * @param key
 * @returns {any}
 */
const getLocalStorage = (key) => {
  let res = window.localStorage.getItem(key);
  if (res) {
    try {
      res = JSON.parse(res);
    } catch (e) {
      console.warn(e)
    }
  }
  return res;
}

export default {
  setLocalStorage,
  getLocalStorage
}
