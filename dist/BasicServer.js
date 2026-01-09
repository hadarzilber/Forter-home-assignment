"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const errorHandler_1 = require("./middlewares/errorHandler");
const notFoundHandler_1 = require("./middlewares/notFoundHandler");
const routes_1 = require("./routes");
const config_1 = require("./tools/config");
class BasicServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.setupMiddlewares();
        this.setupRoutes();
        this.setupErrorHandling();
    }
    getAppInstance() {
        return this.app;
    }
    setupMiddlewares() {
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.set("port", config_1.PORT);
    }
    setupRoutes() {
        this.app.get("/health", (req, res) => {
            res.status(200).json({ status: "ok" });
        });
        (0, routes_1.initApis)(this.app);
    }
    setupErrorHandling() {
        this.app.use(errorHandler_1.errorHandler);
        this.app.use(notFoundHandler_1.notFoundHandler);
    }
}
exports.default = BasicServer;
//# sourceMappingURL=BasicServer.js.map