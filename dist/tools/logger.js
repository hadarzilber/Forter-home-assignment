"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function log(level, message, meta) {
    const timestamp = new Date().toISOString();
    const output = Object.assign({ timestamp,
        level,
        message }, (meta !== undefined ? { meta } : {}));
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
exports.logger = {
    debug: (message, meta) => log("debug", message, meta),
    info: (message, meta) => log("info", message, meta),
    warn: (message, meta) => log("warn", message, meta),
    error: (message, meta) => log("error", message, meta),
};
//# sourceMappingURL=logger.js.map