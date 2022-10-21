import express from 'express';
import TransactionController from '../controllers/transaction.controller';
import TransactionRepository from '../repositories/TransactionRepository';
import TransactionService from '../service/TransactionService';
import requireLogin from '../middleware/requireLogin';

const router = express.Router();

const transactionRepository = new TransactionRepository()
const transactionService = new TransactionService(transactionRepository)
const transactionController = new TransactionController(transactionService)

router.post('/', requireLogin, transactionController.createTransaction);

router.get('/', requireLogin, transactionController.getAllTransactions);

router.put('/:id', requireLogin, transactionController.updateTransaction);

router.delete('/:id', requireLogin, transactionController.deleteTransaction);

export default router;
