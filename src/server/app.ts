import { initRedis } from "./tools/cache/redis";
import BasicServer from "./BasicServer";
import { initApis } from "./routes";

async function initializeIpToCountryServer() {
  initRedis();

  const server = new BasicServer();
  const app = server.getAppInstance();

  initApis(app);

  app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);
  });
}

initializeIpToCountryServer();
