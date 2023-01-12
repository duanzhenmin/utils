import plus from "./plus";
import minus from "./minus";
import multiplied from "./multiplied";
import divided from "./divided";
import isLessThan from "./isLessThan";
import isGreaterThan from "./isGreaterThan";
import isEqual from "./isEqual";

export default {
  plus,
  minus,
  multiplied,
  divided,
  isLessThan,
  isGreaterThan,
  isEqual,
  isLessThanOrEqual: (num, num2) => isLessThan(num, num2) || isEqual(num, num2),
  isGreaterThanOrEqual: (num, num2) => isGreaterThan(num, num2) || isEqual(num, num2)
}
