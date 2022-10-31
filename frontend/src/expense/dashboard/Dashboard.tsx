import React, { useEffect } from 'react';
import { DispatchProp, useDispatch, useSelector } from 'react-redux';
import { fetchExpense, deleteExpense } from '../store/action/expenseAction';
import './dashboard.scss';
import { FaPlus, FaMinus, FaDollarSign } from 'react-icons/fa';
import { Expense } from '../../util/expenseEntity';
import { Price } from '../../util/helpers';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from 'chart.js';
import TransactionCard from '../../shared/components/transactionCard/TransactionCard';

const Dashboard = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state: any) => state.expenses);

    const retrieveTransactions = () => {
      // @ts-ignore
      dispatch<DispatchProp>(fetchExpense());
    }

    useEffect(() => {
      retrieveTransactions();
    }, []);

    const moneyOptions = { style: 'currency', currency: 'USD' };
    const money = new Intl.NumberFormat('en-US', moneyOptions);

    // Find and get the total amount of the expense transaction
    const expenseAmount = transactions?.filter((transaction: Expense) => transaction?.type === 'expense')?.reduce((value1: number, value2: Price) => value1 + value2?.price, 0);

    // Find and get the total amount of the income transaction
    const incomeAmount = transactions?.filter((transaction: Expense) => transaction.type === 'income')?.reduce((value1: number, value2: Price) => value1 + value2?.price, 0);

    const balance = incomeAmount - expenseAmount;

    ChartJs.register(ArcElement, Tooltip, Legend);

    const data = {
      labels: ['Your Balance', 'Your Expenses', 'Your Income'],
      datasets: [
        {
          label: 'total amount of #',
          data: [balance, expenseAmount, incomeAmount],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1,
        },
      ],
    }

    return (
        <div className="dashboard">
            <div className="dashboard__card__wrapper">
                <div className="dashboard__cards">Welcome Back</div>
                <div className="dashboard__cards">
                    <h5><b><FaDollarSign />{' '}Balance</b></h5>
                    <p>{money?.format(balance)}</p>
                </div>
                <div className="dashboard__cards">
                    <h5><b><FaMinus style={{ color: 'red' }} />{' '}Expense</b></h5>
                    <p>-{money?.format(expenseAmount)}</p>
                </div>
                <div className="dashboard__cards">
                    <h5><b><FaPlus style={{ color: 'green' }} />{' '}Income</b></h5>
                    <p>+{money?.format(incomeAmount)}</p>
                </div>
            </div>
            <div className="dashboard__stats__container">
                <div className="dashboard__pie__wrapper">
                    <h4>Chart of Income and Expense</h4>
                    <Doughnut data={data} />
                </div>
                <div className="dashboard__transaction__wrapper">
                    <h4>Transaction History!</h4>
                    <div className="transactions">
                        {transactions?.map((transaction: Expense) => (
                            <div key={transaction.id}>
                                <TransactionCard transaction={transaction} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;