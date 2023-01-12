/**
 * 把科学技术法转为数字
 * @param num
 * @returns {string}
 */
export default function revertScientificNotation(num) {
  if (num === void 0 || num === null) {
    return "";
  }
  num += "";
  if (/e/ig.test(num)) {
    let numArr = num.split(/e/ig);
    let a = numArr[0] || ""; // 实体部分
    let e = parseInt(numArr[1], 10) || 0; // 幂
    let isNegativeNumber = /^-/.test(a); // 是不是负数
    a = a.replace(/^-/, "");
    if (e >= 0) {
      let aArr = a.split(".");
      num = aArr[0] || ""; // 整数位
      let decimalPlaces = (aArr[1] || "").split(""); // 小数位
      while (e > 0) {
        num += decimalPlaces.shift() || "0";
        e--;
      }
      if (decimalPlaces.length) {
        num += "." + decimalPlaces.join("");
      }
    } else {
      num = a.replace(".", "");
      e++;
      while (e < 0) {
        num = "0" + num;
        e++;
      }
      num = "0." + num;
    }
    if (isNegativeNumber) {
      num = "-" + num;
    }
  }
  return num;
}
