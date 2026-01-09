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
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFuncWrapper = exports.handleSuccess = void 0;
const handleSuccess = (response, text, content) => {
    response.send({
        error: null,
        text,
        content,
    });
};
exports.handleSuccess = handleSuccess;
const apiFuncWrapper = (func) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    func(req, res).catch(next);
});
exports.apiFuncWrapper = apiFuncWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvdG9vbHMvZXhwcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFTyxNQUFNLGFBQWEsR0FBRyxDQUMzQixRQUFrQixFQUNsQixJQUFZLEVBQ1osT0FBYSxFQUNiLEVBQUU7SUFDRixRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ1osS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJO1FBQ0osT0FBTztLQUNSLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVZXLFFBQUEsYUFBYSxpQkFVeEI7QUFFSyxNQUFNLGNBQWMsR0FDekIsQ0FBQyxJQUFtRCxFQUFFLEVBQUUsQ0FDeEQsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN4RCxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQztBQUpTLFFBQUEsY0FBYyxrQkFJdkIifQ==