import revertScientificNotation from "./revertScientificNotation";
import isFinite from "./isFinite";
import multiplied from "../math/multiplied";
import plus from "../math/plus";
import divided from "../math/divided";

export default function toFixed(value, opts) {
  let modeList = ["default", "up", "down"];
  let options = {
    addZero: false,
    ...opts,
    digit: parseInt(opts.digit, 10),
    mode: modeList.includes(opts.mode) ? opts.mode : modeList[0]
  };
  options.digit = isFinite(options.digit) ? Math.abs(options.digit) : 2;
  if (typeof value === "string" && !(isFinite(Number(value)) || isFinite((Number(value.replace(/,/g, '')))))) {
    return value;
  }
  if (typeof value === "string") {
    value = value.replace(/,/g, '')
  }
  value = revertScientificNotation(value);
  let hasPoint = /\./.test(value);
  let numArr = value.split(".");
  numArr[0] = numArr[0] || "0";
  numArr[1] = numArr[1] || "";
  let digit = options.digit;
  value = numArr[0];
  let decimalPlaces = numArr[1].split(""); // 小数位
  if (digit > 0) {
    // if (hasPoint || decimalPlaces.length) {
      value += ".";
    // }
    while (digit > 0) {
      digit--;
      value += decimalPlaces[0] ? decimalPlaces.shift() : options.addZero ? "0" : "";
    }
    value = value.replace(/\.+$/, '')
  }
  if (parseInt(decimalPlaces.join(""), 10) > 0) {
    let ratio = Math.pow(10, options.digit);
    switch (options.mode) {
      case "default":
        if (parseInt(decimalPlaces[0], 10) < 5) {
          break;
        }
      case "up":
        value = divided(plus(multiplied(value, ratio), 1), ratio);
        break;
      case "down":
      default:
        break;
    }
    // 再次调用为了防止出现科学技术法和补全小数位
    return toFixed(value, {
      ...options
    })
  }
  return value;
}
