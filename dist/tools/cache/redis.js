"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRedis = initRedis;
exports.getRedis = getRedis;
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("./config");
let redisClient = null;
function initRedis() {
    if (redisClient) {
        return redisClient;
    }
    redisClient = new ioredis_1.default({
        host: config_1.redisConfig.host,
        port: config_1.redisConfig.port,
        password: config_1.redisConfig.password,
        db: config_1.redisConfig.db,
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
function getRedis() {
    if (!redisClient) {
        throw new Error("Redis not initialized. Call initRedis() first.");
    }
    return redisClient;
}
//# sourceMappingURL=redis.js.map