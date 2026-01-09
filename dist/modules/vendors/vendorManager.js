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
const vendorRateLimiter_1 = require("./vendorRateLimiter/vendorRateLimiter");
const customErrors_1 = require("../../errors/customErrors");
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
                    const country = yield vendor.getCountry(ip);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvbW9kdWxlcy92ZW5kb3JzL3ZlbmRvck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkVBRytDO0FBQy9DLDREQUFvRTtBQUVwRSxNQUFhLGFBQWE7SUFDeEIsWUFBb0IsT0FBTztRQUFQLFlBQU8sR0FBUCxPQUFPLENBQUE7SUFBRyxDQUFDO0lBRXpCLFVBQVUsQ0FBQyxFQUFVOztZQUN6QixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFBLGlDQUFhLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDeEMsU0FBUztnQkFDWCxDQUFDO2dCQUVELElBQUksQ0FBQztvQkFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVDLE1BQU0sSUFBQSx3Q0FBb0IsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sT0FBTyxDQUFDO2dCQUNqQixDQUFDO2dCQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2IsU0FBUztnQkFDWCxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sSUFBSSxzQ0FBdUIsQ0FDL0Isa0VBQWtFLENBQ25FLENBQUM7UUFDSixDQUFDO0tBQUE7Q0FDRjtBQXRCRCxzQ0FzQkMifQ==