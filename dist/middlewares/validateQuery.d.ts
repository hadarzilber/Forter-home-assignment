import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
export declare const validateQuery: (schemaByMethod: {
    params?: ZodSchema;
    query?: ZodSchema;
    body?: ZodSchema;
}) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateQuery.d.ts.map