import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import CardReducer from './reducers/CarReducer';
const rootReducer = combineReducers({
   AuthReducer,
   CardReducer
});
export default rootReducer;