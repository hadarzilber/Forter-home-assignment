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
const redis_1 = require("./tools/cache/redis");
const BasicServer_1 = __importDefault(require("./BasicServer"));
const routes_1 = require("./routes");
function initializeIpToCountryServer() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, redis_1.initRedis)();
        const server = new BasicServer_1.default();
        const app = server.getAppInstance();
        (0, routes_1.initApis)(app);
        app.listen(app.get("port"), () => {
            console.log(`Server running on port ${app.get("port")}`);
        });
    });
}
initializeIpToCountryServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBZ0Q7QUFDaEQsZ0VBQXdDO0FBQ3hDLHFDQUFvQztBQUVwQyxTQUFlLDJCQUEyQjs7UUFDeEMsSUFBQSxpQkFBUyxHQUFFLENBQUM7UUFFWixNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztRQUNqQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFcEMsSUFBQSxpQkFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQTtBQUVELDJCQUEyQixFQUFFLENBQUMifQ==