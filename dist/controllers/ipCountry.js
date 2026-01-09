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
const ipCountry_1 = require("../modules/ipCountry");
const express_1 = require("../tools/express");
const express_2 = __importDefault(require("express"));
const validateQuery_1 = require("../middlewares/validateQuery");
const ipSchema_1 = require("../schemas/ipSchema");
const router = express_2.default.Router();
router.get("/ip/country", (0, validateQuery_1.validateQuery)(ipSchema_1.getCountrySchema), (0, express_1.apiFuncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ip } = req.query;
    const country = yield (0, ipCountry_1.getCountryForIp)(ip);
    (0, express_1.handleSuccess)(res, "Country fetched successfully", {
        ip,
        country,
    });
})));
exports.default = router;
//# sourceMappingURL=ipCountry.js.map