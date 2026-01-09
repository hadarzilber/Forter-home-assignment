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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci90b29scy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBUyxHQUFHLENBQUMsS0FBZSxFQUFFLE9BQWUsRUFBRSxJQUFjO0lBQzNELE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFM0MsTUFBTSxNQUFNLG1CQUNWLFNBQVM7UUFDVCxLQUFLO1FBQ0wsT0FBTyxJQUNKLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ3hDLENBQUM7SUFFRixRQUFRLEtBQUssRUFBRSxDQUFDO1FBQ2QsS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixNQUFNO1FBQ1IsS0FBSyxNQUFNO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixNQUFNO1FBQ1IsS0FBSyxNQUFNO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixNQUFNO1FBQ1IsS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixNQUFNO0lBQ1YsQ0FBQztBQUNILENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBRztJQUNwQixLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQUUsSUFBYyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFFdkUsSUFBSSxFQUFFLENBQUMsT0FBZSxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBRXJFLElBQUksRUFBRSxDQUFDLE9BQWUsRUFBRSxJQUFjLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztJQUVyRSxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQUUsSUFBYyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7Q0FDeEUsQ0FBQyJ9