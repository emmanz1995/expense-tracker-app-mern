import type { Expense } from './expenseEntity';

const create = (doc: Expense) => ({
    item: doc,
    price: doc,
    type: doc
});

// @ts-ignore
const addExpense = (expense: Expense[]) => ([ ...expense, { item: expense.item, price: expense.price, type: expense.type } ]);

const deleteExpense = (id: string, expense: Expense[]) => ({ expense: expense.filter(exp => exp.id === id) });

const updateExpense = (id: string, expense: Expense[]) => ({ expense: expense.map(exp => exp.id === id ? {...exp} : exp) });

export { create, addExpense, updateExpense, deleteExpense }