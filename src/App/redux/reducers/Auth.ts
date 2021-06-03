import * as actionTypes from '../constants';

const initState = {
  loading: false,
  error: null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || '') : null,
};

const authReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.LOGOUT_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    case actionTypes.LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
