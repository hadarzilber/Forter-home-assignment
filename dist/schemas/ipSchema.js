"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountrySchema = void 0;
const zod_1 = require("zod");
const getCountryQuerySchema = zod_1.z.object({
    ip: zod_1.z.union([zod_1.z.ipv4(), zod_1.z.ipv6()]),
});
exports.getCountrySchema = { query: getCountryQuerySchema };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXBTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL3NjaGVtYXMvaXBTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXdCO0FBRXhCLE1BQU0scUJBQXFCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNsQyxDQUFDLENBQUM7QUFFVSxRQUFBLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUMifQ==