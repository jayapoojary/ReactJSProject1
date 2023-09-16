import Reducer from './Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    score: Reducer
});

export default rootReducer;