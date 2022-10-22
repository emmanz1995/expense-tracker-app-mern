import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import userReducer from './userReducer';

export default combineReducers({
    expenses: expenseReducer,
    user: userReducer
})