"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountrySchema = void 0;
const zod_1 = require("zod");
// hadar fix all zod deprections
const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const ipv4String = zod_1.z.string().regex(ipv4Regex, "Invalid IPv4 address");
const getCountryQuerySchema = zod_1.z.object({
    ip: ipv4String,
});
exports.getCountrySchema = { query: getCountryQuerySchema };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXBTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL3NjaGVtYXMvaXBTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXdCO0FBRXhCLGdDQUFnQztBQUNoQyxNQUFNLFNBQVMsR0FDYix1RkFBdUYsQ0FBQztBQUMxRixNQUFNLFVBQVUsR0FBRyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBRXZFLE1BQU0scUJBQXFCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxFQUFFLEVBQUUsVUFBVTtDQUNmLENBQUMsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyJ9