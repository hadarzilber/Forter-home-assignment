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
require("dotenv").config();
const BasicServer_1 = __importDefault(require("./BasicServer"));
const routes_1 = require("./routes");
const redis_1 = require("./tools/cache/redis");
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
//# sourceMappingURL=app.js.map