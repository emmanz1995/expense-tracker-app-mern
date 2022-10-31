import express from 'express';
import TransactionController from '../controllers/transaction.controller';
import TransactionRepository from '../repositories/TransactionRepository';
import TransactionService from '../service/TransactionService';

const router = express.Router();

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

router.post('/', transactionController.createTransaction);

router.get('/', transactionController.getAllTransactions);

router.put('/:id', transactionController.updateTransaction);

router.delete('/:id', transactionController.deleteTransaction);

export default router;
