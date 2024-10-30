import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/CustomError";

export const errorHandler = (error:CustomError, req: Request, res: Response, next:NextFunction) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  })
}

export const asyncErrorHandler = (func: Function) => {
  return (req: Request, res: Response, next:NextFunction) => {
    func().catch((err: CustomError) => next(err));
  }
}