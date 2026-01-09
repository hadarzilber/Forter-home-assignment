"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryNameFromCode = void 0;
const i18n_iso_countries_1 = __importDefault(require("i18n-iso-countries"));
i18n_iso_countries_1.default.registerLocale(require("i18n-iso-countries/langs/en.json"));
const getCountryNameFromCode = (countryCode) => i18n_iso_countries_1.default.getName(countryCode, "en");
exports.getCountryNameFromCode = getCountryNameFromCode;
//# sourceMappingURL=countryCodes.js.map