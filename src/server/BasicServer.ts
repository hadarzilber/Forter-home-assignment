import cors from "cors";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { initApis } from "./routes";
import { PORT } from "./tools/config";

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
    this.app.set("port", PORT);
  }

  private setupRoutes() {
    this.app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({ status: "ok" });
    });
    initApis(this.app);
  }

  private setupErrorHandling() {
    this.app.use(errorHandler);
    this.app.use(notFoundHandler);
  }
}
