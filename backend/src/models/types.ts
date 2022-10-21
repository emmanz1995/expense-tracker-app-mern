export interface ITransactions {
  _id?: string;
  item: string;
  price: number;
  type: transactionType;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export enum transactionType {
  expense = 'expense',
  income = 'income'
}

export interface IUser {
  name: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  transactions: ITransactions;
}