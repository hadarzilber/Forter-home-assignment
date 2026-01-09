import { Express } from "express";
import countryByIpController from "./controllers/ipCountry";

export function initApis(app: Express) {
  app.use("/api/ip-to-country", countryByIpController);
}
