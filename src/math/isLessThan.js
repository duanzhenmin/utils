import { BigNumber } from "bignumber.js";

/**
 * 第一个小于第二个
 * @param num
 * @param num2
 * @returns {boolean|*}
 */
export default function isLessThan (num, num2) {
  try {
    return BigNumber(num).lt(num2);
  } catch (e) {
    console.log(e)
  }
  return false;
}
