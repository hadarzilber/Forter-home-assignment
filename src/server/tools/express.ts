import { NextFunction, Request, Response } from "express";

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

export const apiFuncWrapper =
  (func: (req: Request, res: Response) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    func(req, res).catch(next);
  };
