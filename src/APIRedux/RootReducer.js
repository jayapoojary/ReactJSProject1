import {dataReducer} from "./Reducer";
import { combineReducers } from "redux";
import winningReducer from "../Redux/Reducer";
import { updateReducer } from "./UpdateReducer/reducer";
import { postReducer } from "./PostRedux/Reducer";

const rootReducer = combineReducers({
    data : dataReducer,
    score: winningReducer,
    update: updateReducer,
    post: postReducer,
})
export default rootReducer