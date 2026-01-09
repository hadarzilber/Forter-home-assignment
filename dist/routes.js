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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSw0QkFFQztBQUpELHdFQUE0RDtBQUU1RCxTQUFnQixRQUFRLENBQUMsR0FBWTtJQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFxQixDQUFDLENBQUM7QUFDdkQsQ0FBQyJ9