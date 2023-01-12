import { BigNumber } from "bignumber.js";

/**
 * 第一个大于第二个
 * @param num
 * @param num2
 * @returns {boolean|*}
 */
export default function isGreaterThan (num, num2) {
  try {
    return BigNumber(num).gt(num2);
  } catch (e) {
    console.log(e)
  }
  return false;
}
