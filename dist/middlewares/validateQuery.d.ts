import { NextFunction, Request, Response } from "express";
import z from "zod";
export declare const validateQuery: (schemaByMethod: {
    params?: z.ZodType;
    query?: z.ZodType;
    body?: z.ZodType;
}) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateQuery.d.ts.map