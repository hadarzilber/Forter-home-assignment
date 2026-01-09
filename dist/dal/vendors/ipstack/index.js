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
        this.countryKeyName = "country_name";
    }
    getCountryFromVendor(ip) {
        const _super = Object.create(null, {
            getCountryFromVendor: { get: () => super.getCountryFromVendor }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getCountryFromVendor.call(this, ip, {
                params: { access_key: process.env.IPSTACK_KEY },
            });
        });
    }
}
exports.IpstackVendor = IpstackVendor;
//# sourceMappingURL=index.js.map