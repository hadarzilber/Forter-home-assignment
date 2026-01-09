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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
function fetchData(url, config) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const combinedConfig = Object.assign({ timeout: config_1.AXIOS_TIMEOUT_MS }, config);
            const response = yield axios_1.default.get(url, combinedConfig);
            return response.data;
        }
        catch (err) {
            throw new Error(`Failed to fetch data from ${url}: ${err.message}`);
        }
    });
}
//# sourceMappingURL=axios.js.map