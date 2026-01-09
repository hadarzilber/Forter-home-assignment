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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL3Rvb2xzL2F4aW9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsOEJBaUJDO0FBcEJELGtEQUFrRDtBQUNsRCxxQ0FBNEM7QUFFNUMsU0FBc0IsU0FBUyxDQUM3QixHQUFXLEVBQ1gsTUFBMkI7O1FBRTNCLElBQUksQ0FBQztZQUNILE1BQU0sY0FBYyxtQkFDbEIsT0FBTyxFQUFFLHlCQUFnQixJQUN0QixNQUFNLENBQ1YsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBSSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDekQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FDYiw2QkFBNkIsR0FBRyxLQUFNLEdBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FDOUQsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0NBQUEifQ==