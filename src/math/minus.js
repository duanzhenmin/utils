import { BigNumber } from "bignumber.js";
import isFinite from "../number/isFinite";

/**
 * 减法运算
 * @param num
 * @param other
 * @returns {*|string}
 */
export default function minus(num, ...other) {
  let res = typeof num === "string" ? num = Number(num) : num;
  if (isFinite(num) && other.length) {
    res = other.reduce((total, next) => {
      return total.minus(next, 10);
    }, BigNumber(num, 10));
    res = BigNumber.isBigNumber(res) ? res.toNumber() : res;
  }
  return isFinite(res) ? res : "";
}
