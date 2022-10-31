import dotenv from 'dotenv';
dotenv.config();

export const config = {
  DB_URI: process.env.DB_MONGODB_URI,
}