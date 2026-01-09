"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../tools/logger");
const AppError_1 = require("../errors/AppError");
const errorHandler = (err, req, res) => {
    if (err instanceof AppError_1.AppError) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9taWRkbGV3YXJlcy9lcnJvckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNENBQXlDO0FBQ3pDLGlEQUE4QztBQUV2QyxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEUsSUFBSSxHQUFHLFlBQVksbUJBQVEsRUFBRSxDQUFDO1FBQzVCLGVBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1NBQ25CLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1FBQzlCLEdBQUc7UUFDSCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7UUFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07S0FDbkIsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsT0FBTyxFQUFFLEtBQUs7UUFDZCxPQUFPLEVBQUUsdUJBQXVCO0tBQ2pDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQXpCVyxRQUFBLFlBQVksZ0JBeUJ2QiJ9