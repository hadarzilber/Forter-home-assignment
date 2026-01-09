import request from "supertest";
import { createTestApp, testData } from "../testHelpers";

const app = createTestApp();

describe("IP to Country API - E2E Tests", () => {
  describe("GET /health", () => {
    it("should return health status", async () => {
      const response = await request(app).get("/health").expect(200);

      expect(response.body).toEqual({
        status: "ok",
      });
    });
  });

  describe("GET /api/ip-to-country/ip/country", () => {
    it("should return country for valid IPv4 address", async () => {
      const response = await request(app)
        .get("/api/ip-to-country/ip/country")
        .query({ ip: testData.validIpv4 })
        .expect(200);

      expect(response.body).toHaveProperty("success", true);
      expect(response.body).toHaveProperty(
        "message",
        "Country fetched successfully"
      );
      expect(response.body).toHaveProperty("data");
      expect(response.body.data).toHaveProperty("ip", testData.validIpv4);
      expect(response.body.data).toHaveProperty("country");
      expect(typeof response.body.data.country).toBe("string");
      expect(response.body.data.country.length).toBeGreaterThan(0);
    });

    it("should return country for valid IPv6 address", async () => {
      const response = await request(app)
        .get("/api/ip-to-country/ip/country")
        .query({ ip: testData.validIpv6 })
        .expect(200);

      expect(response.body).toHaveProperty("success", true);
      expect(response.body).toHaveProperty(
        "message",
        "Country fetched successfully"
      );
      expect(response.body).toHaveProperty("data");
      expect(response.body.data).toHaveProperty("ip", testData.validIpv6);
      expect(response.body.data).toHaveProperty("country");
      expect(typeof response.body.data.country).toBe("string");
      expect(response.body.data.country.length).toBeGreaterThan(0);
    });

    it("should return 400 for invalid IP address", async () => {
      const response = await request(app)
        .get("/api/ip-to-country/ip/country")
        .query({ ip: testData.invalidIp })
        .expect(400);

      expect(response.body).toHaveProperty("success", false);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toContain("Validation failed");
    });

    it("should return 400 when IP parameter is missing", async () => {
      const response = await request(app)
        .get("/api/ip-to-country/ip/country")
        .expect(400);

      expect(response.body).toHaveProperty("success", false);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toContain("Validation failed");
    });

    it("should handle vendor failures gracefully", async () => {
      const response = await request(app)
        .get("/api/ip-to-country/ip/country")
        .query({ ip: testData.validIpv4 })
        .expect((res) => {
          if (res.status !== 200 && res.status !== 503) {
            throw new Error(`Expected status 200 or 503, got ${res.status}`);
          }
        });

      if (response.status === 503) {
        expect(response.body).toHaveProperty("success", false);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toContain("unavailable");
      }
    });

    it("should return consistent results for cached requests", async () => {
      const response1 = await request(app)
        .get("/api/ip-to-country/ip/country")
        .query({ ip: testData.validIpv4 })
        .expect(200);

      const response2 = await request(app)
        .get("/api/ip-to-country/ip/country")
        .query({ ip: testData.validIpv4 })
        .expect(200);

      expect(response1.body.data.country).toBe(response2.body.data.country);
      expect(response1.body.data.ip).toBe(response2.body.data.ip);
    });
  });

  describe("Error Handling", () => {
    it("should return 404 for unknown endpoints", async () => {
      const response = await request(app).get("/unknown-endpoint").expect(404);

      expect(response.body).toHaveProperty("success", false);
      expect(response.body).toHaveProperty("message");
    });

    it("should return 404 for invalid API paths", async () => {
      const response = await request(app).get("/api/invalid-path").expect(404);

      expect(response.body).toHaveProperty("success", false);
      expect(response.body).toHaveProperty("message");
    });
  });

  describe("Rate Limiting", () => {
    it("should handle multiple concurrent requests", async () => {
      const requests = Array(5)
        .fill(null)
        .map(() =>
          request(app)
            .get("/api/ip-to-country/ip/country")
            .query({ ip: testData.validIpv4 })
        );

      const responses = await Promise.all(requests);

      const successfulResponses = responses.filter((res) => res.status === 200);
      expect(successfulResponses.length).toBeGreaterThan(0);

      successfulResponses.forEach((response) => {
        expect(response.body).toHaveProperty("success", true);
        expect(response.body.data).toHaveProperty("country");
      });
    });
  });
});
