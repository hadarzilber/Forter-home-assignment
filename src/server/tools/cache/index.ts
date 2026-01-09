import { getRedis } from "./redis";
import { redisConfig } from "../../config/redis";

export const cache = {
  async get<T>(key: string): Promise<T | null> {
    const value = await getRedis().get(key);
    return value ? JSON.parse(value) : null;
  },

  async set<T>(
    key: string,
    value: T,
    ttlSeconds: number = redisConfig.ttlSeconds
  ): Promise<void> {
    await getRedis().set(key, JSON.stringify(value), "EX", ttlSeconds);
  },

  async del(key: string): Promise<void> {
    await getRedis().del(key);
  },

  async incr(key: string): Promise<number> {
    return getRedis().incr(key);
  },

  async expire(key: string, seconds: number): Promise<void> {
    await getRedis().expire(key, seconds);
  },
};
