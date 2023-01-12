export default function isNumberNaN (value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }
  return typeof value === "number" && isNaN(value);
}
