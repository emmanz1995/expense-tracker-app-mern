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