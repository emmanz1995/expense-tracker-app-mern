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
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1664932691/avatars/acm2gcrooqrartajkytq.svg'
  },
  // transactions: {
  //   ref: 'transactions',
  //   type: Schema.Types.ObjectId
  // }
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

