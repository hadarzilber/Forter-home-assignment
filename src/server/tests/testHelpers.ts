import express from "express";
import BasicServer from "../BasicServer";
import { initApis } from "../routes";

export function createTestApp(): express.Application {
  const server = new BasicServer();
  const app = server.getAppInstance();
  initApis(app);
  return app;
}

export const testData = {
  validIpv4: "8.8.8.8",
  validIpv6: "2001:4860:4860::8888",
  invalidIp: "invalid-ip-address",
  expectedCountry: "United States",
};

export const mockVendorResponses = {
  ipapi: {
    ip: "8.8.8.8",
    country_name: "United States",
  },
  ipinfo: {
    ip: "8.8.8.8",
    country: "US",
  },
  ipstack: {
    ip: "8.8.8.8",
    country_name: "United States",
  },
};
