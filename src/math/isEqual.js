import { BigNumber } from "bignumber.js";

/**
 * 是否相等
 * @param num
 * @param num2
 * @returns {boolean|*}
 */
export default function isEqual (num, num2) {
  try {
    return BigNumber(num).eq(num2);
  } catch (e) {
    console.log(e)
  }
  return false;
}
