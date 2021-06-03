import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './Auth';
import shapesReducer from './Shapes';

const rootReducer = (history: any) => combineReducers({
  routers: connectRouter(history),
  auth: authReducer,
  shapes: shapesReducer,
  // your reducer here
});

export default rootReducer;
