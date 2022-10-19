import { ITransactions } from '../interfaces/transactionInterface';
import Transactions from '../models/transaction.model';

class TransactionRepository {
  db = Transactions;

  async create(transactionData: ITransactions) {
    const { item, price, type } = transactionData;
    const transaction = await this.db.create({ item, price, type });
    return transaction;
  }

  async getAll() {
    const transactions = await this.db.find({});
    return transactions;
  }

  async updateTransaction(transactionData: ITransactions, id: string) {
    const transaction = await this.db.findByIdAndUpdate(id, transactionData, { new: true });
    return transaction;
  }

  async deleteTransaction(id: string) {
    const transaction = await this.db.findByIdAndDelete(id);
    return transaction;
  }
}

export default TransactionRepository;