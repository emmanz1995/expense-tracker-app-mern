import { Types } from '../types';
import { api } from '../../../util/api';
import { SignInType, UserType } from '../../../util/userType';
import { Dispatch } from 'redux';

export const signIn = (formData: SignInType) => async(dispatch: Dispatch) => {
  try {
    dispatch({ type: Types.SIGN_IN_PENDING });
    const response = await api.signIn(formData);
    dispatch({
      type: Types.SIGN_IN_SUCCESS,
      payload: response
    })
  } catch(err: any) {
    const error = (err.response && err.response.data && err.response.data.msg) || err || err.msg.toString();
    console.log(err);
    dispatch({
      type: Types.SIGN_IN_ERROR,
      payload: error
    })
  }
}

export const signUp = (formData: UserType) => async(dispatch: Dispatch) => {
  try {
    dispatch({ type: Types.SIGN_IN_PENDING });
    const response = await api.signUp(formData);
    dispatch({
      type: Types.SIGN_UP_SUCCESS,
      payload: response
    });
  } catch(err: any) {
    console.log(err);
    const error = (err.response && err.response.data && err.response.data.msg) || err || err.msg.toString();
    dispatch({
      type: Types.SIGN_UP_ERROR,
      payload: error
    })
  }
}