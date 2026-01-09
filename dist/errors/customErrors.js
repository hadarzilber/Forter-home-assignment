"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableError = exports.BadRequestError = void 0;
const AppError_1 = require("./AppError");
class BadRequestError extends AppError_1.AppError {
    constructor(message = "Bad Request") {
        super(message, 400);
    }
}
exports.BadRequestError = BadRequestError;
class ServiceUnavailableError extends AppError_1.AppError {
    constructor(message = "Service Unavailable") {
        super(message, 503);
    }
}
exports.ServiceUnavailableError = ServiceUnavailableError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9lcnJvcnMvY3VzdG9tRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUV0QyxNQUFhLGVBQWdCLFNBQVEsbUJBQVE7SUFDM0MsWUFBWSxVQUFrQixhQUFhO1FBQ3pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBSkQsMENBSUM7QUFFRCxNQUFhLHVCQUF3QixTQUFRLG1CQUFRO0lBQ25ELFlBQVksVUFBa0IscUJBQXFCO1FBQ2pELEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBSkQsMERBSUMifQ==