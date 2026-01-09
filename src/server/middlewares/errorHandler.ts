import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/customErrors";
import { logger } from "../tools/logger";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    logger.warn("AppError", {
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

  logger.error("Unhandled error", {
    err,
    path: req.path,
    method: req.method,
  });

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
