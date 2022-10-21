import { ITransactions } from '../interfaces/transactionInterface';
import Transactions from '../models/transaction.model';

class TransactionRepository {
  db = Transactions;
  async create(transactionData: ITransactions) {
    const { item, price, type, userId } = transactionData;
    const transaction = await this.db.create({ item, price, type, userId });
    return transaction;
  }

  async getAll(id: string) {
    const transactions = await this.db.find({ userId: id }).sort({ createdAt: -1 });
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