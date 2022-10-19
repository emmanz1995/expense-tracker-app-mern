import axios from 'axios';
import { Expense } from './expenseEntity';

const API_URL = process.env.REACT_APP_URL

export const createExpense = async (formData: Expense) => {
    const response = await axios.post(`${API_URL}`, formData);
    return response.data;
}
export const getExpenses = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
}

export const updateExpense = async (id: string, formData: Expense) => {
    const response = await axios.put(`${API_URL}/${id}`, formData);
    return response.data;
}

const deleteExpense = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}

export const api = {
    createExpense,
    getExpenses,
    updateExpense,
    deleteExpense
};