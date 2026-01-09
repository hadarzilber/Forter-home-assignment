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
const ipapi_1 = require("../../dal/vendors/ipapi");
const ipstack_1 = require("../../dal/vendors/ipstack");
const cache_1 = require("../../tools/cache");
const vendorManager_1 = require("../vendors/vendorManager");
const config_1 = require("./config");
const getCountryForIp = (ip) => __awaiter(void 0, void 0, void 0, function* () {
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
    // hadar should you add more abstraction so that when adding more vendors you don't need to touch this file?
    const vendorManager = new vendorManager_1.VendorManager([
        new ipstack_1.IpstackVendor(),
        new ipapi_1.IpApiVendor(),
    ]);
    const country = yield vendorManager.getCountry(ip);
    return country;
});
// hadar add not naive cache?
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmVyL21vZHVsZXMvaXBDb3VudHJ5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCx1REFBMEQ7QUFDMUQsNkNBQTBDO0FBQzFDLDREQUF5RDtBQUN6RCxxQ0FHa0I7QUFFWCxNQUFNLGVBQWUsR0FBRyxDQUFPLEVBQVUsRUFBbUIsRUFBRTtJQUNuRSxNQUFNLFFBQVEsR0FBRyxHQUFHLGdDQUF1QixJQUFJLEVBQUUsRUFBRSxDQUFDO0lBRXBELE1BQU0sYUFBYSxHQUFHLE1BQU0sYUFBSyxDQUFDLEdBQUcsQ0FBUyxRQUFRLENBQUMsQ0FBQztJQUV4RCxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxNQUFNLGFBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxxQ0FBNEIsQ0FBQyxDQUFDO0lBRWpFLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQSxDQUFDO0FBYlcsUUFBQSxlQUFlLG1CQWExQjtBQUVGLE1BQU0sVUFBVSxHQUFHLENBQU8sRUFBVSxFQUFtQixFQUFFO0lBQ3ZELDRHQUE0RztJQUM1RyxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUM7UUFDdEMsSUFBSSx1QkFBYSxFQUFFO1FBQ25CLElBQUksbUJBQVcsRUFBRTtLQUNsQixDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFBLENBQUM7QUFFRiw2QkFBNkIifQ==