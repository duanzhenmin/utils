import { BigNumber } from "bignumber.js";
import isFinite from "./isFinite";
import revertScientificNotation from "./revertScientificNotation";

export default function toFormat(num, options) {
  if (isFinite(num)) {
    let fmt = {
      prefix: '',
      decimalSeparator: '.',
      groupSeparator: ',',
      groupSize: 3,
      secondaryGroupSize: 0,
      fractionGroupSeparator: '',
      fractionGroupSize: 0,
      suffix: '',
      ...options
    }

    let res = BigNumber(revertScientificNotation(num), 10).toFormat(fmt)
    let digit = `${num}`.split('.')[1]?.length || 0
    if (digit) {
      let resDigit = `${res}`.split('.')[1]?.length || 0
      if (resDigit < digit) {
        if (resDigit === 0) {
          res += '.'
        }
        while(resDigit < digit) {
          resDigit++
          res += '0'
        }
      }
    }
    return res.replace('..', '.');
  }
  return num;
}
