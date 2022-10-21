import dotenv from 'dotenv';
dotenv.config();

export const config = {
    DB_URI: process.env.DB_MONGODB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
}