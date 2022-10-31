import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import transactionRoutes from './routes/expense.routes';
import ErrorHandler from './middleware/errorHandler';
import connectMongoDB from './util/connectDB';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the budget and expense tracker!</h1>');
});

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());

connectMongoDB();
app.use('/api/expenses', transactionRoutes);
app.use(ErrorHandler);

export default app;