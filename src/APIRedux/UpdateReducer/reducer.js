import { UPDATE_DATA_BEGIN, UPDATE_DATA_SUCCESS, UPDATE_DATA_FAILURE } from "./Actions";
const initialState = {
    data: [],
    loading: false,
    error: null
}

export const updateReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_DATA_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null,
                
            }
        case UPDATE_DATA_SUCCESS: 
        return{
            ...state,
            loading: false,
            data: action.payload,
        }
        case UPDATE_DATA_FAILURE:
            return{
                ...state,
                data: [],
                loading: false,
                error: action.payload.error
            }
        default: 
            return state;
    }
}