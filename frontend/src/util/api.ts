import axios from 'axios';
import { Expense } from './expenseEntity';

const API_URL = process.env.REACT_APP_URL;

/* Transaction api calls */

export const createExpense = async (formData: Expense) => {
  const response = await axios.post(`${API_URL}/api/expenses`, formData);
  return response.data;
}
export const getExpenses = async () => {
  const response = await axios.get(`${API_URL}/api/expenses`);
  return response.data;
}

export const updateExpense = async (id: string, formData: Expense) => {
  const response = await axios.put(`${API_URL}/api/expenses/${id}`, formData);
  return response.data;
}

const deleteExpense = async (id: string) => {
  const response = await axios.delete(`${API_URL}/api/expenses/${id}`);
  return response.data;
}

export const api = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
};