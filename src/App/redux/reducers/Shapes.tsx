import * as actionTypes from '../constants';

const initState = {
  loading: false,
  error: null,
  shapes: null,
};

const shapesReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SHAPES_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_ALL_SHAPES_SUCCESS:
      return {
        ...state,
        shapes: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default shapesReducer;
