import { NextFunction, Request, Response } from 'express';
import HttpException from './HttpExceptions';

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    console.log(
      `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
    );
    res.status(status).json({ message });
  } catch (error: any) {
    console.log(
      `[${req.method}] ${req.path} >> StatusCode:: ${error.status}, Message:: ${error.message}`
    );
    next(error);
  }
};

export default errorMiddleware;
