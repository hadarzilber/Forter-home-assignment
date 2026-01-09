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
exports.BaseIpVendor = void 0;
const axios_1 = require("../../tools/axios");
const countryCodes_1 = require("../../tools/countryCodes");
class BaseIpVendor {
    constructor() {
        this.isCountryCodeReturned = false;
    }
    getCountryFromVendor(ip, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = (_a = options === null || options === void 0 ? void 0 : options.url) !== null && _a !== void 0 ? _a : `${this.baseUrl}/${ip}`;
            console.log("hadar url,", url);
            const data = yield (0, axios_1.fetchData)(url, {
                params: options === null || options === void 0 ? void 0 : options.params,
            });
            console.log("hadar", data);
            return this.assertCountryName(data);
        });
    }
    assertCountryName(data) {
        if (!(data === null || data === void 0 ? void 0 : data[this.countryKeyName])) {
            throw new Error(`Invalid response from ${this.name}`);
        }
        const countryValue = data[this.countryKeyName];
        console.log("hadar 2", this.isCountryCodeReturned);
        if (this.isCountryCodeReturned) {
            return (0, countryCodes_1.getCountryNameFromCode)(countryValue) || countryValue;
        }
        return countryValue;
    }
}
exports.BaseIpVendor = BaseIpVendor;
//# sourceMappingURL=BaseIpVendor.js.map