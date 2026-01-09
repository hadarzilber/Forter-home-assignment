"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./tools/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const errorHandler_1 = require("./middlewares/errorHandler");
const notFoundHandler_1 = require("./middlewares/notFoundHandler");
const routes_1 = require("./routes");
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
        this.app.use(notFoundHandler_1.notFoundHandler);
        this.app.use(errorHandler_1.errorHandler);
    }
}
exports.default = BasicServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNTZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmVyL0Jhc2ljU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHNEQUE0RTtBQUM1RSxnREFBd0I7QUFDeEIsb0RBQTRCO0FBQzVCLDZEQUEwRDtBQUMxRCxtRUFBZ0U7QUFDaEUscUNBQW9DO0FBRXBDLE1BQXFCLFdBQVc7SUFHOUI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBQSxpQkFBUSxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFlLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBakNELDhCQWlDQyJ9