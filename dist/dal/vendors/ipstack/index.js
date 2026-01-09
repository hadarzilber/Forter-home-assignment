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
exports.IpstackVendor = void 0;
const BaseIpVendor_1 = require("../BaseIpVendor");
class IpstackVendor extends BaseIpVendor_1.BaseIpVendor {
    constructor() {
        super(...arguments);
        this.name = "ipstack";
        this.baseUrl = "http://api.ipstack.com";
    }
    getCountry(ip) {
        const _super = Object.create(null, {
            getCountry: { get: () => super.getCountry }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getCountry.call(this, ip, {
                params: { access_key: process.env.IPSTACK_KEY },
            });
        });
    }
}
exports.IpstackVendor = IpstackVendor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmVyL2RhbC92ZW5kb3JzL2lwc3RhY2svaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQStDO0FBRy9DLE1BQWEsYUFBYyxTQUFRLDJCQUFZO0lBQS9DOztRQUNFLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsWUFBTyxHQUFHLHdCQUF3QixDQUFDO0lBT3JDLENBQUM7SUFMTyxVQUFVLENBQUMsRUFBVTs7Ozs7WUFDekIsT0FBTyxPQUFNLFVBQVUsWUFBQyxFQUFFLEVBQUU7Z0JBQzFCLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTthQUNoRCxFQUFFO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUFURCxzQ0FTQyJ9