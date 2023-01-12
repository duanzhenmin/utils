/**
 * 获取origin
 * @returns {string}
 */
export default function getOrigin() {
  let origin = location.origin;
  if (!origin) {
    origin = location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : '');
  }
  return origin;
}
