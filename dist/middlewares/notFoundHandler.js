"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const customErrors_1 = require("../errors/customErrors");
const notFoundHandler = (req, res, next) => {
    next(new customErrors_1.AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=notFoundHandler.js.map