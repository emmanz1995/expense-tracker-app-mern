import CustomError from './CustomError';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends CustomError {
  status: number
  constructor(message: string) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;