module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/src/server/tests/setup.ts"],
  testTimeout: 30000,
  extensionsToTreatAsEsm: [],
  globals: {},
};
