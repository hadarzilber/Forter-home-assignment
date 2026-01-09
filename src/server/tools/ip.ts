import ipaddr from "ipaddr.js";

export const isPrivateIp = (ip: string): boolean => {
  const addr = ipaddr.parse(ip);
  return addr.range() !== "unicast";
};
