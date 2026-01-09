import { cache } from "../../tools/cache";
import { isPrivateIp } from "../../tools/ip";
import { getVendorManager } from "../vendors/vendorFactory";
import {
  IP_COUNTRY_CACHE_PREFIX,
  IP_COUNTRY_CACHE_TTL_SECONDS,
} from "./config";

export const getCountryForIp = async (ip: string): Promise<string> => {
  if (isPrivateIp(ip)) {
    return "private IP!";
  }
  const cacheKey = `${IP_COUNTRY_CACHE_PREFIX}:${ip}`;

  const cachedCountry = await cache.get<string>(cacheKey);

  if (cachedCountry) {
    return cachedCountry;
  }

  const country = await getCountry(ip);
  await cache.set(cacheKey, country, IP_COUNTRY_CACHE_TTL_SECONDS);

  return country;
};

const getCountry = async (ip: string): Promise<string> => {
  const vendorManager = getVendorManager();
  const country = await vendorManager.getCountry(ip);
  return country;
};
