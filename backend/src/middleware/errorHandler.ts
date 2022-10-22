import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let customError = {
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later!'
  }
  if(err.name === 'ValidationError') {
    customError.msg
      .Object.values(err.errors)
      .map((items: any) => items.value.toString());
    customError.status = 400;
  }

  if(err.code === '11000') {
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
    customError.status = 400;
  }

  if(err.name === 'CastError') {
    customError.msg = `No item found with id ${err.value}`;
    customError.status(404);
  }

  return res.status(customError.status).send({ msg: customError.msg });
}

export default ErrorHandler;

