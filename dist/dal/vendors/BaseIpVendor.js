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
class BaseIpVendor {
    getCountry(ip, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = (_a = options === null || options === void 0 ? void 0 : options.url) !== null && _a !== void 0 ? _a : `${this.baseUrl}/${ip}`;
            const data = yield (0, axios_1.fetchData)(url, {
                params: options === null || options === void 0 ? void 0 : options.params,
            });
            return this.assertCountryName(data);
        });
    }
    assertCountryName(data) {
        if (!(data === null || data === void 0 ? void 0 : data.country_name)) {
            throw new Error(`Invalid response from ${this.name}`);
        }
        return data.country_name;
    }
}
exports.BaseIpVendor = BaseIpVendor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUlwVmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZlci9kYWwvdmVuZG9ycy9CYXNlSXBWZW5kb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThDO0FBRzlDLE1BQXNCLFlBQVk7SUFJMUIsVUFBVSxDQUFDLEVBQVUsRUFBRSxPQUEyQjs7O1lBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEdBQUcsbUNBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBRXBELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxpQkFBUyxFQUFhLEdBQUcsRUFBRTtnQkFDNUMsTUFBTSxFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNO2FBQ3hCLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVPLGlCQUFpQixDQUFDLElBQWdCO1FBQ3hDLElBQUksQ0FBQyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxZQUFZLENBQUEsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBcEJELG9DQW9CQyJ9