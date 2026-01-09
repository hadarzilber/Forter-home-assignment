import { Request, Response, NextFunction } from "express";
import { logger } from "../tools/logger";
import { AppError } from "../errors/AppError";

export const errorHandler = (err: unknown, req: Request, res: Response) => {
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
