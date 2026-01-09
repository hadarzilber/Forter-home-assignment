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
exports.VendorManager = void 0;
const customErrors_1 = require("../../errors/customErrors");
const vendorRateLimiter_1 = require("./vendorRateLimiter/vendorRateLimiter");
class VendorManager {
    constructor(vendors) {
        this.vendors = vendors;
    }
    getCountry(ip) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const vendor of this.vendors) {
                if (!(yield (0, vendorRateLimiter_1.canCallVendor)(vendor.name))) {
                    continue;
                }
                try {
                    const country = yield vendor.getCountryFromVendor(ip);
                    yield (0, vendorRateLimiter_1.incrementVendorUsage)(vendor.name);
                    return country;
                }
                catch (err) {
                    continue;
                }
            }
            throw new customErrors_1.ServiceUnavailableError("All IP lookup vendors are currently unavailable or rate-limited.");
        });
    }
}
exports.VendorManager = VendorManager;
//# sourceMappingURL=vendorManager.js.map