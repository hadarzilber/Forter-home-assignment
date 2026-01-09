"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const hadar_1 = require("./hadar");
const logger_1 = require("../tools/logger");
// hadar check this file
// export class AppError extends Error {
//   statusCode: number;
//   constructor(message: string, statusCode = 500) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }
// export const errorHandler = (
//   err: unknown,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.error(err); // log for debugging
//   // hadar check if data arrives from cached data
//   if (err instanceof AppError) {
//     // hadar is this best practice?
//     const message =
//       err.statusCode === 400
//         ? "Bad Request"
//         : err.statusCode === 404
//         ? err.message
//         : "An application error occurred";
//     return res.status(err.statusCode).json({
//       success: false,
//       message,
//     });
//   }
//   if (err instanceof Error) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
//   res.status(500).json({
//     success: false,
//     message: "Unknown error occurred",
//   });
// };
//hadar
const errorHandler = (err, req, res, next) => {
    if (err instanceof hadar_1.AppError) {
        // Expected / operational error
        logger_1.logger.warn("AppError", {
            message: err.message,
            statusCode: err.statusCode,
            path: req.path,
            method: req.method,
        });
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    // Unexpected error (bug / infra / crash)
    logger_1.logger.error("Unhandled error", {
        err,
        path: req.path,
        method: req.method,
    });
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9taWRkbGV3YXJlcy9lcnJvckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQW1DO0FBQ25DLDRDQUF5QztBQUV6Qyx3QkFBd0I7QUFDeEIsd0NBQXdDO0FBQ3hDLHdCQUF3QjtBQUN4QixxREFBcUQ7QUFDckQsc0JBQXNCO0FBQ3RCLG9DQUFvQztBQUNwQyxNQUFNO0FBQ04sSUFBSTtBQUVKLGdDQUFnQztBQUNoQyxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsU0FBUztBQUNULDZDQUE2QztBQUU3QyxvREFBb0Q7QUFDcEQsbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0QyxzQkFBc0I7QUFDdEIsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsd0JBQXdCO0FBQ3hCLDZDQUE2QztBQUM3QywrQ0FBK0M7QUFDL0Msd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsTUFBTTtBQUVOLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFDcEMsd0JBQXdCO0FBQ3hCLDBDQUEwQztBQUMxQyxVQUFVO0FBQ1YsTUFBTTtBQUVOLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEIseUNBQXlDO0FBQ3pDLFFBQVE7QUFDUixLQUFLO0FBRUwsT0FBTztBQUVBLE1BQU0sWUFBWSxHQUFHLENBQzFCLEdBQVksRUFDWixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixJQUFJLEdBQUcsWUFBWSxnQkFBUSxFQUFFLENBQUM7UUFDNUIsK0JBQStCO1FBQy9CLGVBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1NBQ25CLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsZUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUM5QixHQUFHO1FBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1FBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0tBQ25CLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFoQ1csUUFBQSxZQUFZLGdCQWdDdkIifQ==