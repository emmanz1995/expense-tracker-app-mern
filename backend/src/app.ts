import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { config } from './util/config';
import mongoose from 'mongoose';
import transactionRoutes from './routes/expense.routes';
import userRoutes from './routes/user.routes';
import ErrorHandler from './middleware/errorHandler';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the budget and expense tracker!</h1>');
});

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());

const { DB_URI } = config;

async function connectMongoDB() {
    await mongoose.connect(`${ DB_URI }`);
    mongoose.connection.on('connected', () => {
        console.log('MongoDB Connection established!');
    });
    mongoose.connection.once('failed to connect', (err) => {
        console.log('Failure to connect to MongoDB!', err);
    });
}

connectMongoDB();
app.use('/api/expenses', transactionRoutes);
app.use('/api/user', userRoutes);
app.use(ErrorHandler);

export default app;