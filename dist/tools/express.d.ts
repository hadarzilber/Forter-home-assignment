import { NextFunction, Request, Response } from "express";
export declare const handleSuccess: (response: Response, text: string, content?: any) => void;
export declare const apiFuncWrapper: (func: (req: Request, res: Response) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=express.d.ts.map