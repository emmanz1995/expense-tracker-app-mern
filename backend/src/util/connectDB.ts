import { config } from './config';
import mongoose from 'mongoose';

const { DB_URI } = config;

export default async function connectMongoDB() {
  await mongoose.connect(`${ DB_URI }`);
  mongoose.connection.on('connected', () => {
    console.log('MongoDB Connection established!');
  });
  mongoose.connection.once('failed to connect', (err) => {
    console.log('Failure to connect to MongoDB!', err);
  });
}