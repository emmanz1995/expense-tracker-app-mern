import { Request, Response } from 'express';
import TransactionService from '../service/TransactionService';
import { ITransactions } from '../interfaces/transactionInterface';

// const createTransaction = async (req: Request, res: Response) => {
//   const { item, price, type } = req.body;
//   try {
//     if(!item || !price || !type) {
//       return res.status(400).send({ msg: 'Item or Price or Type cannot be empty!' });
//     }
//     const response = await new Transaction({
//       item,
//       price,
//       type
//     });
//     response.save()
//     res.status(201).send(response);
//   } catch(err) {
//     console.log(err);
//     res.status(500).send({ msg: err });
//   }
// }
//
// const getAllTransactions = async (req: Request, res: Response) => {
//   try {
//     const response: ITransactions[] = await Transaction.find({})
//     res.status(200).send(response)
//   } catch(err) {
//     console.log(err)
//     res.status(500).send({ msg: err });
//   }
// }
//
// const updateTransaction = async(req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const response = await Transaction.findByIdAndUpdate(id, req.body);
//     res.status(200).send(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ msg: err });
//   }
// }
//
// const deleteTransaction = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const transaction = await Transaction.findByIdAndDelete(id);
//     res.status(200).send(transaction);
//   } catch(err) {
//     console.log(err);
//     res.status(500).send({ msg: err });
//   }
// }

// export const TransactionController = {
//   createTransaction,
//   getAllTransactions,
//   updateTransaction,
//   deleteTransaction
// }

class TransactionController {
  constructor(public transaction: TransactionService) {}

  public getAllTransactions = async (req: Request, res: Response) => {
    try {
      const showTransactions = await this.transaction.getAll();
      console.log(showTransactions)
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
