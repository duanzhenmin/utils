/**
 * 获取地址栏参数
 * @param uri
 * @returns {{}}
 */

export default function getSearchParams(uri) {
  let search = uri ? "" : location?.search;
  if (!search) {
    let href = uri || location?.href || "";
    let idx = href.lastIndexOf?.("?");
    if (~idx) {
      search = href.substr(idx + 1);
    }
  }
  if (!search) {
    return {};
  }

  if (URLSearchParams) {
    let res = {};
    for (const [key, value] of new URLSearchParams(search)) {
      res[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return res;
  }

  return search.split("&").reduce((res, item) => {
    if (item) {
      let arr = item.split("=");
      res[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
    }
    return res;
  }, {});
}
