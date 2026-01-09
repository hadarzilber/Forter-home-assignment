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
exports.IpApiVendor = void 0;
const BaseIpVendor_1 = require("../BaseIpVendor");
class IpApiVendor extends BaseIpVendor_1.BaseIpVendor {
    constructor() {
        super(...arguments);
        this.name = "ipapi";
        this.baseUrl = "https://ipapi.co";
    }
    getCountry(ip) {
        const _super = Object.create(null, {
            getCountry: { get: () => super.getCountry }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getCountry.call(this, ip, {
                url: `${this.baseUrl}/${ip}/json`,
            });
        });
    }
}
exports.IpApiVendor = IpApiVendor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmVyL2RhbC92ZW5kb3JzL2lwYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGtEQUErQztBQUUvQyxNQUFhLFdBQVksU0FBUSwyQkFBWTtJQUE3Qzs7UUFDRSxTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsWUFBTyxHQUFHLGtCQUFrQixDQUFDO0lBTy9CLENBQUM7SUFMTyxVQUFVLENBQUMsRUFBVTs7Ozs7WUFDekIsT0FBTyxPQUFNLFVBQVUsWUFBQyxFQUFFLEVBQUU7Z0JBQzFCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxPQUFPO2FBQ2xDLEVBQUU7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQVRELGtDQVNDIn0=