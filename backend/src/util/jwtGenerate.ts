import jwt, { Secret } from 'jsonwebtoken';
import { config } from './config';

const { JWT_SECRET_KEY } = config;

export const jwtGenerate = (userInfo: any) => {
  return jwt.sign(userInfo, JWT_SECRET_KEY as Secret, { expiresIn: 8600 });
}