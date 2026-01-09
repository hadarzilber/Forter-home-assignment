import { NextFunction, Response, Request } from "express";

export const handleSuccess = (
  response: Response,
  text: string,
  content?: any
) => {
  response.send({
    error: null,
    text,
    content,
  });
};

// hadar return different errors for validations vs rate limit
export const apiFuncWrapper =
  (func: (req: Request, res: Response) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    func(req, res).catch(next);
  };
