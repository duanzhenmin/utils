import getOrigin from "./getOrigin";

/**
 * 解析origin
 * @param origin
 * @returns {{protocol: string, domainIsIp: boolean, port: string, domain: string, firstLevelDomain: string}}
 */
export default function parsingOrigin(origin) {
  origin = origin || getOrigin();
  let domainIpReg = /^(https?:\/\/)?(\d+\.){3}(\d+)(:\d+)?/ig;
  let domainReg = /^(https?:\/\/)?([a-z0-9][a-z0-9-]*\.)+([a-z0-9][a-z0-9-]*)/ig;
  let protocol = "";
  let port = "";
  let domain = "";
  let firstLevelDomain = "";
  let domainIsIp = false;
  if (typeof origin === "string") {
    domainIsIp = /(\d+\.){3}(\d+)/ig.test(origin);
    let domainTemp = origin.match(domainIsIp ? domainIpReg : domainReg);
    if (domainTemp) {
      domainTemp = domainTemp[0];
      domainTemp = domainTemp.split("://");
      if (domainTemp.length === 1) {
        domainTemp = domainTemp[0];
      } else {
        protocol = domainTemp[0];
        domainTemp = domainTemp[1];
      }
      domainTemp = domainTemp.split(":");
      domain = domainTemp[0];
      if (domainIsIp) {
        firstLevelDomain = domain;
      } else {
        firstLevelDomain = domain.replace(/^[a-z0-9-]+\./i, "");
      }
      port = domainTemp[1] || ""
    }
  }
  return {
    domainIsIp,
    protocol,
    port,
    domain,
    firstLevelDomain
  };
}
