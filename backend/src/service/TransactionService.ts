import TransactionRepository from '../repositories/TransactionRepository';
import { ITransactions } from '../interfaces/transactionInterface';

class TransactionService {
  constructor(private transaction: TransactionRepository) {}

  public async getAll() {
    const response = await this.transaction.getAll();
    return response;
  }
  public async create(transactionData: ITransactions) {
    const response = await this.transaction.create(transactionData);
    return response;
  }

  public async updateTransaction(transactionData: ITransactions, id: string) {
    const response = await this.transaction.updateTransaction(transactionData, id);
    return response;
  }

  public async deleteTransaction(id: string) {
    const response = await this.transaction.deleteTransaction(id);
    return response;
  }
}

export default TransactionService;