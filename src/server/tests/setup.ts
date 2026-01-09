import { initRedis } from "../tools/cache/redis";

process.env.NODE_ENV = "test";
process.env.PORT = "3001";

beforeAll(async () => {
  try {
    initRedis();
  } catch (error) {
    console.warn(
      "Redis connection failed in test setup, tests may fail:",
      error
    );
  }
});

afterEach(() => {
  jest.clearAllMocks();
});
