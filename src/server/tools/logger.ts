type LogLevel = "debug" | "info" | "warn" | "error";

function log(level: LogLevel, message: string, meta?: unknown) {
  const timestamp = new Date().toISOString();

  const output = {
    timestamp,
    level,
    message,
    ...(meta !== undefined ? { meta } : {}),
  };

  switch (level) {
    case "debug":
      console.debug(output);
      break;
    case "info":
      console.info(output);
      break;
    case "warn":
      console.warn(output);
      break;
    case "error":
      console.error(output);
      break;
  }
}

export const logger = {
  debug: (message: string, meta?: unknown) => log("debug", message, meta),

  info: (message: string, meta?: unknown) => log("info", message, meta),

  warn: (message: string, meta?: unknown) => log("warn", message, meta),

  error: (message: string, meta?: unknown) => log("error", message, meta),
};
