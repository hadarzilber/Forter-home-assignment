"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableError = exports.BadRequestError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        // Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
class BadRequestError extends AppError {
    constructor(message = "Bad Request") {
        super(message, 400);
    }
}
exports.BadRequestError = BadRequestError;
class ServiceUnavailableError extends AppError {
    constructor(message = "Service Unavailable") {
        super(message, 503);
    }
}
exports.ServiceUnavailableError = ServiceUnavailableError;
//# sourceMappingURL=customErrors.js.map