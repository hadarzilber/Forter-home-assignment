import { NextFunction, Request, Response } from "express";
import z from "zod";
import { BadRequestError } from "../errors/customErrors";

export const validateQuery = (schemaByMethod: {
  params?: z.ZodType;
  query?: z.ZodType;
  body?: z.ZodType;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      for (const [method, schema] of Object.entries(schemaByMethod)) {
        const object = req[method];
        if (schema) {
          schema.parse(object);
        }
      }
    } catch (error) {
      throw new BadRequestError("Zod validation error");
    }
    next();
  };
};
