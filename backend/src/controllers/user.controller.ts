import { Request, Response } from 'express';
import UserService from '../service/UserService';
import { IHash } from '../interfaces/userInterface';
import { jwtGenerate } from '../util/jwtGenerate';

class UserController {
  constructor(private userService: UserService, private bcrypt: IHash) {
    this.userService = userService;
  }
  public signUp = async(req: Request, res: Response) => {
    const { name, username, email, password } = req.body;
    const user = await this.userService.getOne(email);
    try {
      if(user) return res.status(400).send({ msg: 'User already registered!' });
      const hashPassword = this.bcrypt.encrypt(password, 13);
      const registerUser = await this.userService.createUser({ name, username, email, password: hashPassword });
      res.status(201).send(registerUser);
    } catch(err: any) {
      console.log(err);
      res.status(500).send({ msg: err });
    }
  }

  public signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(!email || !password) {
      return res.status(400).send({ msg: 'Email or password are required!' });
    }
    const user = await this.userService.getOne(email);
    try {
      // @ts-ignore
      const hashPassword = this.bcrypt.compare(password, user?.password);
      if(!hashPassword) {
        return res.status(400).send({ msg: 'Password is incorrect!' });
      }

      const userInfo = {
        username: user?.username,
        id: user?.id,
        email: user?.email,
        avatar: user?.avatar,
      };
      res.status(200).json({ token: jwtGenerate(userInfo), userInfo });
    } catch(err: any) {
      console.log(err);
      res.status(500).send({ msg: err });
    }
  }
  // public getProfile = async(req: Request, res: Response) => {}
  // public updateProfile = async(req: Request, res: Response) => {}
  // public deleteProfile = async(req: Request, res: Response) => {}
}

export default UserController;