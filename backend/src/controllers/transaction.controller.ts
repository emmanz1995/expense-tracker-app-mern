import { Request, Response } from 'express';
import TransactionService from '../service/TransactionService';
import { ITransactions } from '../interfaces/transactionInterface';

class TransactionController {
  constructor(public transaction: TransactionService) {}

  public getAllTransactions = async (req: Request, res: Response) => {
    try {
      const showTransactions = await this.transaction.getAll();
      res.status(200).json(showTransactions);
    } catch(err: any) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  createTransaction = async (req: Request, res: Response) => {
    const { item, type, price } = req.body;
    if(!item || !type || !price) {
      return res.status(400).send({ msg: 'Item, type, Price are empty!' });
    }
    try {
      const newTransaction = await this.transaction.create({ item, type, price });
      res.status(201).json(newTransaction);
    } catch(err: any) {
      console.log(err);
      res.status(500).send({ msg: err });
    }
  }

  updateTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updateTransaction = await this.transaction.updateTransaction(req.body, id);
      res.status(200).json(updateTransaction);
    } catch(err: any) {
      console.log(err);
      res.status(500).send({ msg: err });
    }
  }

  deleteTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deleteTransaction = await this.transaction.deleteTransaction(id);
      res.status(200).json(deleteTransaction);
    } catch(err: any) {
      console.log(err);
      res.status(500).send({ msg: err });
    }
  }
}

export default TransactionController;
