"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrivateIp = void 0;
const ipaddr_js_1 = __importDefault(require("ipaddr.js"));
const isPrivateIp = (ip) => {
    const addr = ipaddr_js_1.default.parse(ip);
    return addr.range() !== "unicast";
};
exports.isPrivateIp = isPrivateIp;
//# sourceMappingURL=ip.js.map