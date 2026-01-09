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
exports.canCallVendor = canCallVendor;
exports.incrementVendorUsage = incrementVendorUsage;
const cache_1 = require("../../../tools/cache");
const config_1 = require("./config");
function currentHour() {
    const now = new Date();
    return `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}`;
}
function rateLimitKey(vendorName) {
    return `rate-limit:${vendorName}:${currentHour()}`;
}
function canCallVendor(vendorName) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = rateLimitKey(vendorName);
        const count = yield cache_1.cache.get(key);
        return (count !== null && count !== void 0 ? count : 0) < config_1.VENDOR_LIMITS[vendorName];
    });
}
function incrementVendorUsage(vendorName) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = rateLimitKey(vendorName);
        yield cache_1.cache.incr(key);
        yield cache_1.cache.expire(key, config_1.RATE_LIMIT_CACHE_TTL_SECONDS);
    });
}
//# sourceMappingURL=vendorRateLimiter.js.map