import axios from 'axios';
import { Expense } from './expenseEntity';
import { UserType, SignInType } from './userType';

const API_URL = process.env.REACT_APP_URL;
const currentUser = JSON.parse(<string>localStorage.getItem('user'));

/* Transaction api calls */

export const createExpense = async (formData: Expense) => {
  const response = await axios.post(`${API_URL}`, formData, {
    headers: {
      Authorization: `${currentUser.token}`
    }
  });
  return response.data;
}
export const getExpenses = async () => {
  const response = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `${currentUser.token}`
    }
  });
  return response.data;
}

export const updateExpense = async (id: string, formData: Expense) => {
  const response = await axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      Authorization: `${currentUser.token}`
    }
  });
  return response.data;
}

const deleteExpense = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `${currentUser.token}`
    }
  });
  return response.data;
}

/* User api calls */

const signIn = async(formData: SignInType) => {
  const response = await axios.post('/api/user/auth', formData);
  localStorage.setItem('user', JSON.stringify(response.data));
  return response.data;
}

const signUp = async(formData: UserType) => {
  const response = await axios.post('/api/user', formData);
  return response.data;
}

export const api = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  signIn,
  signUp
};