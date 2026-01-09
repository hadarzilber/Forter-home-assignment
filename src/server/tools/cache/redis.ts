import Redis from "ioredis";
import { redisConfig } from "./config";

let redisClient: Redis | null = null;

export function initRedis(): Redis {
  if (redisClient) {
    return redisClient;
  }

  redisClient = new Redis({
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
    db: redisConfig.db,
    enableReadyCheck: true,
    lazyConnect: true,
  });

  redisClient.on("connect", () => {
    console.log("[Redis] connected");
  });

  redisClient.on("error", (err) => {
    console.error("[Redis] error", err);
  });

  return redisClient;
}

export function getRedis(): Redis {
  if (!redisClient) {
    throw new Error("Redis not initialized. Call initRedis() first.");
  }
  return redisClient;
}
