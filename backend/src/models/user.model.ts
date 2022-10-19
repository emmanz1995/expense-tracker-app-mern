import { Schema, model } from 'mongoose';
import { IUser } from './types';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  transactions: {
    ref: 'transactions',
    type: Schema.Types.ObjectId
  }
}, { timestamps: true });

userSchema.set('toJSON', {
  transform: (doc, object) => {
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  }
});

const User = model<IUser>('users', userSchema);
export default User;

