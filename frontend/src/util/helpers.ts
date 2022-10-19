import { Expense } from './expenseEntity';
import { FaPlus, FaMinus, FaDollarSign } from 'react-icons/fa';

export type Price = Omit<Expense, 'item' | 'type' | 'createdAt' | 'updatedAt' | 'id'>

export const moneyFormat = () => {
    const moneyOptions = { style: 'currency', currency: 'USD' };
    const money = new Intl.NumberFormat('en-US', moneyOptions);

    return money;
}

export const reduceFunc = (transaction: Expense[]) => {
    const total = transaction?.reduce((total: any, amount: Price) => total + amount.price);
    return total
}

export const colorType = (type: any) => {
    let icon = ''
    switch (type) {
        case type = 'expense':
            return 'red'
        case type = 'income':
            return 'green'
        default: return 'red'
    }
    console.log(icon);
}