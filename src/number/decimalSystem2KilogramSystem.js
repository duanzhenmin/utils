import isFinite from "./isFinite";
import divided from "../math/divided";
import toFixed from "./toFixed";

/**
 * 十进制转千进制
 * @param {Number | String} num 要转换的数字
 * @returns {Number | String}
 */
export default function decimalSystem2KilogramSystem(num, opts = {}) {
  const baseSystem = [
    // { value: 1E3, symbol: "K" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "B" },
    { value: 1E12, symbol: "T" }
  ];
  let options = {
    digit: 3,
    addZero: true,
    ...opts
  }
  if (isFinite(num)) {
    let res = num;
    for (let i = baseSystem.length - 1; i >= 0; i--) {
      if (parseFloat(res, 10) >= baseSystem[i].value) {
        res = divided(res, baseSystem[i].value);
        return toFixed(res, options) + baseSystem[i].symbol;
      }
    }
  }
  return num;
}
