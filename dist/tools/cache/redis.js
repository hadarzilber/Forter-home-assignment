"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRedis = initRedis;
exports.getRedis = getRedis;
const ioredis_1 = __importDefault(require("ioredis"));
const redis_1 = require("../../config/redis");
let redisClient = null;
function initRedis() {
    if (redisClient) {
        return redisClient;
    }
    redisClient = new ioredis_1.default({
        host: redis_1.redisConfig.host,
        port: redis_1.redisConfig.port,
        password: redis_1.redisConfig.password,
        db: redis_1.redisConfig.db,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmVyL3Rvb2xzL2NhY2hlL3JlZGlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsOEJBdUJDO0FBRUQsNEJBS0M7QUFuQ0Qsc0RBQTRCO0FBQzVCLDhDQUFpRDtBQUVqRCxJQUFJLFdBQVcsR0FBaUIsSUFBSSxDQUFDO0FBRXJDLFNBQWdCLFNBQVM7SUFDdkIsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxHQUFHLElBQUksaUJBQUssQ0FBQztRQUN0QixJQUFJLEVBQUUsbUJBQVcsQ0FBQyxJQUFJO1FBQ3RCLElBQUksRUFBRSxtQkFBVyxDQUFDLElBQUk7UUFDdEIsUUFBUSxFQUFFLG1CQUFXLENBQUMsUUFBUTtRQUM5QixFQUFFLEVBQUUsbUJBQVcsQ0FBQyxFQUFFO1FBQ2xCLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsV0FBVyxFQUFFLElBQUk7S0FDbEIsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBZ0IsUUFBUTtJQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDIn0=