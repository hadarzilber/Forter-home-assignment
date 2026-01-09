"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customErrors_1 = require("../errors/customErrors");
const logger_1 = require("../tools/logger");
const errorHandler = (err, req, res, next) => {
    if (err instanceof customErrors_1.AppError) {
        logger_1.logger.warn("AppError", {
            message: err.message,
            statusCode: err.statusCode,
            path: req.path,
            method: req.method,
        });
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    logger_1.logger.error("Unhandled error", {
        err,
        path: req.path,
        method: req.method,
    });
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map