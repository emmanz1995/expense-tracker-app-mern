import { StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';

class NotFoundError extends CustomError {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;