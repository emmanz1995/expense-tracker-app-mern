import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import { config } from '../util/config';
import AuthenticationError from '../error/AuthenticationError';

const requireLogin = async(req: any, res: any, next: NextFunction) => {
  const { JWT_SECRET_KEY } = config;
  const token = req.headers['x-access-token'];
  try {
    // if(!token) return res.status(401).send({ msg: 'Access token was not provided!' });
    if(!token) {
      throw new AuthenticationError('Unauthorized access!');
    }

    const decoded = jwt.verify(token, `${JWT_SECRET_KEY}`);
    if(token) {
      // @ts-ignore
      // TODO: configure types for req.user in the Request type
      const user = await User.findById(decoded.id);
      req.user = user?.id;
      next();
    }
  } catch(err) {
    console.log(err);
    // res.status(500).send({ msg: 'Unauthorized access!' });
    throw new AuthenticationError('Unauthorized access!');
  }
}

export default requireLogin;