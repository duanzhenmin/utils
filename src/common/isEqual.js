import isFinite from "../number/isFinite";
import isNumberNaN from "../number/isNumberNaN";

/**
 * 判断两个数据是否相等
 * @param value
 * @param value2
 * @returns {boolean|boolean}
 */
export default function isEqual(value, value2) {
  if (isFinite(value) && isFinite(value2)) {
    return Math.abs(value - value2) <= Number.EPSILON;
  }
  return value === value2 || (isNumberNaN(value) && isNumberNaN(value2));
}
