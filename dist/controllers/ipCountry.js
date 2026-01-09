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
const ipCountry_1 = require("../modules/ipCountry");
const express_1 = require("../tools/express");
const express_2 = __importDefault(require("express"));
const validateQuery_1 = require("../middlewares/validateQuery");
const ipSchema_1 = require("../schemas/ipSchema");
const router = express_2.default.Router();
router.get("/ip/country", (0, validateQuery_1.validateQuery)(ipSchema_1.getCountrySchema), (0, express_1.apiFuncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ip } = req.query;
    const country = yield (0, ipCountry_1.getCountryForIp)(ip);
    (0, express_1.handleSuccess)(res, "Country fetched successfully", {
        ip,
        country,
    });
})));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXBDb3VudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9jb250cm9sbGVycy9pcENvdW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBdUQ7QUFDdkQsOENBQWlFO0FBQ2pFLHNEQUE4QjtBQUM5QixnRUFBNkQ7QUFDN0Qsa0RBRzZCO0FBRTdCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FDUixhQUFhLEVBQ2IsSUFBQSw2QkFBYSxFQUFDLDJCQUFnQixDQUFDLEVBQy9CLElBQUEsd0JBQWMsRUFDWixDQUFPLEdBQW1ELEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFFekIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLDJCQUFlLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUMsSUFBQSx1QkFBYSxFQUFDLEdBQUcsRUFBRSw4QkFBOEIsRUFBRTtRQUNqRCxFQUFFO1FBQ0YsT0FBTztLQUNSLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUNGLENBQ0YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9