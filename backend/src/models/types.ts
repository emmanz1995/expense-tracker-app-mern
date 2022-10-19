export interface ITransactions {
  _id?: string;
  item: string;
  price: number;
  type: transactionType;
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
  password: string;
  transactions: ITransactions;
}