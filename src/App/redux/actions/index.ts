import * as Redux from 'redux';
import shapes from '../../../utils/data.json';
import { LoginData } from '../../type';
import * as actionTypes from '../constants';

const SignOutUser = () => async (dispatch: Redux.Dispatch<any>) => {
  dispatch({
    type: actionTypes.LOGOUT_PENDING,
  });

  await localStorage.clear();
  window.location.href = '/';

  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
  });
};

export const signOut = () => (dispatch: Redux.Dispatch<any>) => {
  dispatch(SignOutUser());
};

const LoginUser = (data: LoginData) => async (dispatch: Redux.Dispatch<any>) => {
  dispatch({
    type: actionTypes.LOGIN_PENDING,
  });

  if (data.email !== "admin@admin.com") {
    dispatch({
      type: actionTypes.LOGIN_FAILED,
      payload: 'User does not exist.'
    });
  } else if (data.password !== 'password') {
    dispatch({
      type: actionTypes.LOGIN_FAILED,
      payload: 'Incorrect Password.'
    });
  } else {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
    window.location.href = "/app"; 
  }

};

export const loginUser = (data: any) => (dispatch: Redux.Dispatch<any>) => {
  dispatch(LoginUser(data));
};

const GetAllShapes = () => async (dispatch: Redux.Dispatch<any>) => {
  dispatch({
    type: actionTypes.GET_ALL_SHAPES_PENDING,
  });

  dispatch({
    type: actionTypes.GET_ALL_SHAPES_SUCCESS,
    payload: shapes,
  });

};

export const getAllShapes = () => (dispatch: Redux.Dispatch<any>) => {
  dispatch(GetAllShapes());
};