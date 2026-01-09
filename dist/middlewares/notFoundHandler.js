"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const hadar_1 = require("./hadar");
const notFoundHandler = (req, res, next) => {
    next(new hadar_1.AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90Rm91bmRIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9taWRkbGV3YXJlcy9ub3RGb3VuZEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQW1DO0FBRTVCLE1BQU0sZUFBZSxHQUFHLENBQzdCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLElBQUksQ0FBQyxJQUFJLGdCQUFRLENBQUMsZUFBZSxHQUFHLENBQUMsV0FBVyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQztBQU5XLFFBQUEsZUFBZSxtQkFNMUIifQ==