import { BigNumber } from "bignumber.js";
import isFinite from "../number/isFinite";

/**
 * 乘法运算
 * @param num
 * @param other
 * @returns {*|string}
 */
export default function multiplied (num, ...other) {
  let res = typeof num === "string" ? num = Number(num) : num;
  if (isFinite(num) && other.length) {
    res = other.reduce((total, next) => {
      return total.multipliedBy(next, 10);
    }, BigNumber(num, 10));
    res = BigNumber.isBigNumber(res) ? res.toNumber() : res;
  }
  return isFinite(res) ? res : "";
}
