import { Types } from '../types';
import { api } from '../../../util/api';
import { Expense } from '../../../util/expenseEntity';
import { Dispatch } from 'redux';

type Partial = Omit<Expense, 'updatedAt' | 'createdAt' | 'id'>

export const createExpense = (formData: Expense) => async(dispatch: Dispatch) => {
    try {
        const response = await api.createExpense(formData);
        dispatch({
            type: Types.CREATE_EXPENSES_SUCCESS,
            payload: response
        })
    } catch(err: any) {
        const msg = (err?.response && err?.response?.data && err?.response?.data?.msg) || err || err?.msg.toString();
        console.log(err);
        dispatch({
            type: Types.CREATE_EXPENSES_ERROR,
            payload: msg
        })
    }
}

export const fetchExpense = () => async(dispatch: Dispatch) => {
    try {
        const response = await api.getExpenses();
        dispatch({
            type: Types.GET_EXPENSES_SUCCESS,
            payload: response
        })
    } catch(err: any) {
        const msg = (err?.response && err?.response?.data && err?.response?.data?.msg) || err || err?.msg.toString();
        console.log(err);
        dispatch({
            type: Types.GET_EXPENSES_ERROR,
            payload: msg
        })
    }
}

export const updateExpense = (id: string, formData: Partial) => async(dispatch: Dispatch) => {
    try {
        const response = await api.updateExpense(id, formData);
        dispatch({
            type: Types.UPDATE_EXPENSES_SUCCESS,
            payload: response
        })
    } catch(err: any) {
        const msg = (err?.response && err?.response?.data && err?.response?.data?.msg) || err || err?.msg.toString();
        console.log(err);
        dispatch({
            type: Types.UPDATE_EXPENSES_ERROR,
            payload: msg
        })
    }
}

export const deleteExpense = (id: string) => async(dispatch: Dispatch) => {
    try {
        const response = await api.deleteExpense(id);
        dispatch({
            type: Types.DELETE_EXPENSES_SUCCESS,
            payload: response
        })
    } catch(err: any) {
        const msg = (err?.response && err?.response?.data && err?.response?.data?.msg) || err || err?.msg.toString();
        console.log(err);
        dispatch({
            type: Types.DELETE_EXPENSES_ERROR,
            payload: msg
        })
    }
}