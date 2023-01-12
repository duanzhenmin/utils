/**
 * 类型检测
 * @type {{}}
 */
const Type = (function () {
  let typeDetection = {}
  let typeList = ['Undefined', 'Null', 'Boolean', 'Number', 'String', 'Array', 'Object', 'Symbol', 'Date', 'RegExp', 'Promise', 'Function', 'GeneratorFunction', 'AsyncFunction', 'Map', 'WeakMap', 'Set', 'WeakSet', 'BigInt', 'Error', 'Arguments']

  for (let i = 0; i < typeList.length; i++) {
    (function (type) {
      typeDetection['is' + type] = function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]` && (type === 'Date' ? obj?.toString?.() !== 'Invalid Date' : true)
      }
    })(typeList[i])
  }

  return typeDetection
})()

export default Type
