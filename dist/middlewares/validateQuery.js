"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = void 0;
const customErrors_1 = require("../errors/customErrors");
const validateQuery = (schemaByMethod) => {
    return (req, res, next) => {
        try {
            for (const [method, schema] of Object.entries(schemaByMethod)) {
                const object = req[method];
                if (schema) {
                    schema.parse(object);
                }
            }
        }
        catch (error) {
            throw new customErrors_1.BadRequestError("Zod validation error");
        }
        next();
    };
};
exports.validateQuery = validateQuery;
//# sourceMappingURL=validateQuery.js.map