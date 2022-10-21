import { ITransactions } from '../models/types';

export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  transactions?: ITransactions[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IHash {
  // salt: number;
  encrypt(text: string, salt: number): any;
  compare(text: string, text2: string): boolean;
}