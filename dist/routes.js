"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApis = initApis;
const ipCountry_1 = __importDefault(require("./controllers/ipCountry"));
function initApis(app) {
    app.use("/api/ip-to-country", ipCountry_1.default);
}
//# sourceMappingURL=routes.js.map