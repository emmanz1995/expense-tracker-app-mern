import { Request, Response } from 'express';
import TransactionService from '../service/TransactionService';
import BadRequestError from '../error/BadRequestError';
import NotFoundError from '../error/NotFound';

class TransactionController {
  constructor(public transaction: TransactionService) {}

  public getAllTransactions = async (req: Request, res: Response) => {
    try {
      // @ts-ignore
      // TODO: configure types for req.user in the Request type
      const showTransactions = await this.transaction.getAll(req.user);
      res.status(200).json(showTransactions);
    } catch(err: any) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  createTransaction = async (req: Request, res: Response) => {
    const { item, type, price } = req.body;
    if(!item || ! type || !price) {
      // return res.status(400).send({ msg: 'Item, type, Price are empty!' });
      throw new BadRequestError('Item, type, Price are empty!');
    }
    try {
      // @ts-ignore
      const newTransaction = await this.transaction.create({ item, type, price, userId: req.user });
      res.status(201).json(newTransaction);
    } catch(err: any) {
      console.log(err);
      res.status(500).send({ msg: err });
    }
  }

  updateTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      // if(req.user.toString() === )
      if(!id) {
        throw new NotFoundError('Id not Found!');
      }
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
