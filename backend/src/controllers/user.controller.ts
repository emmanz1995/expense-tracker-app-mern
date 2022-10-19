import { Request, Response } from 'express';
import User from '../models/user.model';
import { IUser } from '../models/types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// class User {}

const signIn = async(req: Request, res: Response) => {
  const { email, password } = req.body;
  if(!email || !password) {
    return res.status(400).send({ msg: 'Email or password is missing!' });
  }
  try {
    const user: any = await User.findOne<IUser>({ email });
    if(!user) {
      return res.status(400).send({ msg: 'User not found!' });
    }
    const hashPassword = bcrypt.compareSync(password, user.password);
    if(!hashPassword) {
      return res.status(400).send({ msg: 'Password is incorrect!' });
    }

    const userInfo = {
      username: user.username,
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(userInfo, '123456', { expiresIn: 8600 });
    res.status(200).json({ token, userInfo });
  } catch(err) {
    res.status(500).send({ msg: err });
    console.log(err);
  }
}

const signUp = async(req: Request, res: Response) => {}

const getProfile = async(req: Request, res: Response) => {}

const getAllUsers = async(req: Request, res: Response) => {}

export const UserController = {
  signIn,
  signUp,
  getProfile,
  getAllUsers
}