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
const config_1 = require("./config");
exports.cache = {
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield (0, redis_1.getRedis)().get(key);
            return value ? JSON.parse(value) : null;
        });
    },
    set(key_1, value_1) {
        return __awaiter(this, arguments, void 0, function* (key, value, ttlSeconds = config_1.redisConfig.ttlSeconds) {
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
//# sourceMappingURL=index.js.map