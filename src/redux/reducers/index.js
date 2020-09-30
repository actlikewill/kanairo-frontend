import {combineReducers} from 'redux';
import menusReducer from './menusReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    menusReducer,
    userReducer
});



export default rootReducer;