import Reducer from './Reducer';
import { combineReducers } from 'redux';
import winningReducer from './Reducer'

const rootReducer = combineReducers({
    scores: Reducer
});

export default rootReducer;