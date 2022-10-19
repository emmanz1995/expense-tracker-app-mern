import { Schema, model } from 'mongoose';
import { ITransactions, transactionType } from './types';

const TransactionSchema = new Schema<ITransactions>({
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: transactionType
  }
}, { timestamps: true });

TransactionSchema.set('toJSON', {
  transform: (doc, object) => {
    object.id = object._id.toString();
    delete object._id
    delete object.__v
  }
})

const Transactions = model<ITransactions>('transactions', TransactionSchema);

export default Transactions;