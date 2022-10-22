import { Types } from '../types';

const currentUser = JSON.parse(<string>localStorage.getItem('user'));

const initialState = currentUser ?
  { user: currentUser, message: '', isLoading: false } :
  { user: null, message: '', isLoading: false }

type actionType = {
  type: string;
  payload: {
    email: string;
    password: string;
  }
}

const userReducer = (state = initialState, action: actionType) => {
  const { type, payload } = action;
  switch(type) {
    case Types.SIGN_IN_PENDING:
    case Types.SIGN_UP_PENDING:
      return {
        ...state,
        loading: true
      }
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        message: 'Successfully signed in!'
      }
    case Types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'Successfully registered!'
      }
    case Types.SIGN_IN_ERROR:
    case Types.SIGN_UP_ERROR:
      return {
        ...state,
        message: payload
      }
    default: return state;
  }
}

export default userReducer;