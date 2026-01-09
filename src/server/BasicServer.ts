import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { initApis } from "./routes";

export default class BasicServer {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  getAppInstance(): Express {
    return this.app;
  }

  private setupMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // hadar magic numbers
    this.app.set("port", process.env.PORT || 3000);
  }

  private setupRoutes() {
    this.app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({ status: "ok" });
    });
    initApis(this.app);
  }

  private setupErrorHandling() {
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }
}
