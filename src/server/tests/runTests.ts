#!/usr/bin/env ts-node

import { initRedis } from "../tools/cache/redis";
import { testData } from "./testHelpers";

initRedis();

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

class TestRunner {
  private results: TestResult[] = [];
  private passed = 0;
  private failed = 0;

  async runTest(name: string, testFn: () => Promise<void>): Promise<void> {
    try {
      await testFn();
      this.results.push({ name, passed: true });
      this.passed++;
      console.log(`✅ ${name}`);
    } catch (error) {
      this.results.push({
        name,
        passed: false,
        error: error instanceof Error ? error.message : String(error),
      });
      this.failed++;
      console.log(
        `❌ ${name}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  printSummary(): void {
    console.log("\n--- Test Summary ---");
    console.log(`Total: ${this.results.length}`);
    console.log(`Passed: ${this.passed}`);
    console.log(`Failed: ${this.failed}`);

    if (this.failed > 0) {
      console.log("\nFailed tests:");
      this.results
        .filter((r) => !r.passed)
        .forEach((result) => {
          console.log(`- ${result.name}: ${result.error}`);
        });
      process.exit(1);
    } else {
      console.log("\n🎉 All tests passed!");
    }
  }
}

async function runE2ETests() {
  console.log("🚀 Running E2E Tests for IP to Country API\n");

  const runner = new TestRunner();

  await runner.runTest("Schema Validation - Valid IPv4", async () => {
    const { getCountrySchema } = require("../schemas/ipSchema");

    const result = getCountrySchema.query.parse({ ip: testData.validIpv4 });
    if (result.ip !== testData.validIpv4) {
      throw new Error("Schema should parse valid IPv4 correctly");
    }
  });

  await runner.runTest("Schema Validation - Valid IPv6", async () => {
    const { getCountrySchema } = require("../schemas/ipSchema");

    const result = getCountrySchema.query.parse({ ip: testData.validIpv6 });
    if (result.ip !== testData.validIpv6) {
      throw new Error("Schema should parse valid IPv6 correctly");
    }
  });

  await runner.runTest("Schema Validation - Empty IP", async () => {
    const { getCountrySchema } = require("../schemas/ipSchema");

    try {
      getCountrySchema.query.parse({});
      throw new Error("Should have failed validation for empty query");
    } catch (error) {
      if (!(error instanceof Error)) {
        throw new Error("Should throw validation error for missing IP");
      }
    }
  });

  await runner.runTest("Schema Validation - Invalid IP Format", async () => {
    const { getCountrySchema } = require("../schemas/ipSchema");

    try {
      getCountrySchema.query.parse({ ip: testData.invalidIp });
      throw new Error("Should have failed validation for invalid IP format");
    } catch (error) {
      if (!(error instanceof Error)) {
        throw new Error("Should throw validation error for invalid IP format");
      }
    }
  });

  await runner.runTest("IP Validation Utility", async () => {
    const { isPrivateIp } = require("../tools/ip");

    try {
      const result = isPrivateIp(testData.validIpv4);
      if (typeof result !== "boolean") {
        throw new Error("Should return boolean for valid IP");
      }
    } catch (error) {
      throw new Error("Should handle valid IPv4 without throwing");
    }

    try {
      isPrivateIp(testData.invalidIp);
      throw new Error("Should throw error for invalid IP");
    } catch (error) {
      if (!(error instanceof Error)) {
        throw new Error("Should throw Error for invalid IP");
      }
    }
  });

  await runner.runTest("Country Code Conversion", async () => {
    const { getCountryNameFromCode } = require("../tools/countryCodes");

    const countryName = getCountryNameFromCode("US");
    if (!countryName || !countryName.includes("United States")) {
      throw new Error(
        `Should convert US to United States variant, got: ${countryName}`
      );
    }

    const invalidResult = getCountryNameFromCode("XX");
    if (invalidResult !== undefined) {
      throw new Error("Should return undefined for invalid country code");
    }
  });

  await runner.runTest("Vendor Manager Initialization", async () => {
    const { getVendorManager } = require("../modules/vendors/vendorFactory");

    const manager = getVendorManager();

    if (!manager) {
      throw new Error("Should create vendor manager successfully");
    }

    if (typeof manager.getCountry !== "function") {
      throw new Error("Vendor manager should have getCountry method");
    }
  });

  await runner.runTest("Cache Configuration", async () => {
    const { redisConfig } = require("../tools/cache/config");

    if (!redisConfig.host) {
      throw new Error("Redis host should be configured");
    }
    if (typeof redisConfig.port !== "number") {
      throw new Error("Redis port should be a number");
    }
    if (typeof redisConfig.ttlSeconds !== "number") {
      throw new Error("Redis TTL should be a number");
    }
  });

  runner.printSummary();
}

runE2ETests().catch((error) => {
  console.error("Test runner failed:", error);
  process.exit(1);
});
