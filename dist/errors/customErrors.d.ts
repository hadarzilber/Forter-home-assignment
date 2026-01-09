export declare class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare class BadRequestError extends AppError {
    constructor(message?: string);
}
export declare class ServiceUnavailableError extends AppError {
    constructor(message?: string);
}
//# sourceMappingURL=customErrors.d.ts.map