"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const redis_1 = require("./redis");
const redis_2 = require("../../config/redis");
exports.cache = {
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield (0, redis_1.getRedis)().get(key);
            return value ? JSON.parse(value) : null;
        });
    },
    set(key_1, value_1) {
        return __awaiter(this, arguments, void 0, function* (key, value, ttlSeconds = redis_2.redisConfig.ttlSeconds) {
            yield (0, redis_1.getRedis)().set(key, JSON.stringify(value), "EX", ttlSeconds);
        });
    },
    del(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, redis_1.getRedis)().del(key);
        });
    },
    incr(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, redis_1.getRedis)().incr(key);
        });
    },
    expire(key, seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, redis_1.getRedis)().expire(key, seconds);
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmVyL3Rvb2xzL2NhY2hlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyw4Q0FBaUQ7QUFFcEMsUUFBQSxLQUFLLEdBQUc7SUFDYixHQUFHLENBQUksR0FBVzs7WUFDdEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFBLGdCQUFRLEdBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFSyxHQUFHOzZEQUNQLEdBQVcsRUFDWCxLQUFRLEVBQ1IsYUFBcUIsbUJBQVcsQ0FBQyxVQUFVO1lBRTNDLE1BQU0sSUFBQSxnQkFBUSxHQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNyRSxDQUFDO0tBQUE7SUFFSyxHQUFHLENBQUMsR0FBVzs7WUFDbkIsTUFBTSxJQUFBLGdCQUFRLEdBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEdBQVc7O1lBQ3BCLE9BQU8sSUFBQSxnQkFBUSxHQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxHQUFXLEVBQUUsT0FBZTs7WUFDdkMsTUFBTSxJQUFBLGdCQUFRLEdBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtDQUNGLENBQUMifQ==