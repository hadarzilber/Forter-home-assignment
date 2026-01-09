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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVRdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvbWlkZGxld2FyZXMvdmFsaWRhdGVRdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx5REFBeUQ7QUFFbEQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxjQUk3QixFQUFFLEVBQUU7SUFDSCxPQUFPLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFDekQsSUFBSSxDQUFDO1lBQ0gsS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDOUQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQixJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksOEJBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxCVyxRQUFBLGFBQWEsaUJBa0J4QiJ9