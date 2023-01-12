import { version } from '../package.json';
import _common from "./common";
export const common = _common;
import _math from "./math";
export const math = _math;
import _number from "./number";
export const number = _number;
import _storage from "./storage";
export const storage = _storage;
import _uri from "./uri";
export const uri = _uri;
import _date from "./date";
export const date = _date;
import _jsBridge from "./jsBridge";
export const jsBridge = _jsBridge;

const _globalThis = _common.getGlobal()
if (_globalThis) {
  globalThis._ctUtils = {
    version,
    env: "production"
  }
}

export default {
  common,
  number,
  math,
  storage,
  uri,
  date,
  jsBridge
}
