import { Types } from '../types';
import { Expense } from '../../../util/expenseEntity';
import { AnyAction } from 'redux';

const initialState: Expense[] = []

const expenseReducer = (expenses = initialState, action: AnyAction) => {
    const { type, payload } = action;
    // const expense = expenses.findIndex((expense: Expense) => expense._id === payload._id)
    switch(type){
        case Types.GET_EXPENSES_SUCCESS:
            return payload
        case Types.GET_EXPENSES_ERROR:
            return { error: payload }
        case Types.CREATE_EXPENSES_SUCCESS:
            return [...expenses, payload];
        case Types.CREATE_EXPENSES_ERROR:
            return { error: payload }
        case Types.UPDATE_EXPENSES_SUCCESS:
            return expenses.map((expense: Expense) => (
                expense.id === payload.id ? { ...expense, ...payload } : expense)
            )
        case Types.UPDATE_EXPENSES_ERROR:
            return { error: payload }
        case Types.DELETE_EXPENSES_SUCCESS:
            return expenses.filter(( expense: Expense ) => {
                return expense.id !== payload.id
            });

        case Types.DELETE_EXPENSES_ERROR:
            return { error: payload }
        default: return expenses;
    }
}

export default expenseReducer;