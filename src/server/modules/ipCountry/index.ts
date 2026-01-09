import { IpApiVendor } from "../../dal/vendors/ipapi";
import { IpstackVendor } from "../../dal/vendors/ipstack";
import { cache } from "../../tools/cache";
import { VendorManager } from "../vendors/vendorManager";
import {
  IP_COUNTRY_CACHE_PREFIX,
  IP_COUNTRY_CACHE_TTL_SECONDS,
} from "./config";

export const getCountryForIp = async (ip: string): Promise<string> => {
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
  // hadar should you add more abstraction so that when adding more vendors you don't need to touch this file?
  const vendorManager = new VendorManager([
    new IpstackVendor(),
    new IpApiVendor(),
  ]);

  const country = await vendorManager.getCountry(ip);
  return country;
};

// hadar add not naive cache?
