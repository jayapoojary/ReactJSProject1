import Reducer from './Reducer';
import { combineReducers } from 'redux';
import winningReducer from './Reducer'

const rootReducer = combineReducers({
    score: Reducer
});

export default rootReducer;