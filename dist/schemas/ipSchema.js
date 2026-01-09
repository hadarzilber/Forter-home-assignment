"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountrySchema = void 0;
const zod_1 = require("zod");
const getCountryQuerySchema = zod_1.z.object({
    ip: zod_1.z.union([zod_1.z.ipv4(), zod_1.z.ipv6()]),
});
exports.getCountrySchema = { query: getCountryQuerySchema };
//# sourceMappingURL=ipSchema.js.map