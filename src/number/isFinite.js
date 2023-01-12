import Type from "../common/Type";

/**
 * 是否是有效数字
 * @param value
 * @returns {boolean|*|boolean}
 */
export default function isFinite(value) {
  if (typeof value === "object" && Type.isNumber(value)) {
    return isFinite(value.valueOf());
  }
  if (Number.isFinite) {
    return Type.isNumber(value) ? Number.isFinite(value) : (value ? Number.isFinite(Number(value)) : false);
  }
  if (typeof value === "number") {
    return !isNaN(value) && Math.abs(value) !== Infinity && Math.abs(value) < Number.MAX_SAFE_INTEGER;
  }
  return typeof value === "bigint";
}
