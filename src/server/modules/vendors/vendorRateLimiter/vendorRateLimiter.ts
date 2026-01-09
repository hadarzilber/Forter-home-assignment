import { cache } from "../../../tools/cache";
import { VENDOR_LIMITS, RATE_LIMIT_CACHE_TTL_SECONDS } from "./config";

function currentHour(): string {
  const now = new Date();
  return `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}`;
}

function rateLimitKey(vendorName: string): string {
  return `rate-limit:${vendorName}:${currentHour()}`;
}

export async function canCallVendor(vendorName: string): Promise<boolean> {
  const key = rateLimitKey(vendorName);
  const count = await cache.get<number>(key);

  return (count ?? 0) < VENDOR_LIMITS[vendorName];
}

export async function incrementVendorUsage(vendorName: string): Promise<void> {
  const key = rateLimitKey(vendorName);

  await cache.incr(key);
  await cache.expire(key, RATE_LIMIT_CACHE_TTL_SECONDS);
}
