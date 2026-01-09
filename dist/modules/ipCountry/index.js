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
exports.getCountryForIp = void 0;
const cache_1 = require("../../tools/cache");
const ip_1 = require("../../tools/ip");
const vendorFactory_1 = require("../vendors/vendorFactory");
const config_1 = require("./config");
const getCountryForIp = (ip) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, ip_1.isPrivateIp)(ip)) {
        return "private IP!";
    }
    const cacheKey = `${config_1.IP_COUNTRY_CACHE_PREFIX}:${ip}`;
    const cachedCountry = yield cache_1.cache.get(cacheKey);
    if (cachedCountry) {
        return cachedCountry;
    }
    const country = yield getCountry(ip);
    yield cache_1.cache.set(cacheKey, country, config_1.IP_COUNTRY_CACHE_TTL_SECONDS);
    return country;
});
exports.getCountryForIp = getCountryForIp;
const getCountry = (ip) => __awaiter(void 0, void 0, void 0, function* () {
    const vendorManager = (0, vendorFactory_1.getVendorManager)();
    const country = yield vendorManager.getCountry(ip);
    return country;
});
//# sourceMappingURL=index.js.map