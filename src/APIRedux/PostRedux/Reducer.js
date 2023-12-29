import { POST_DATA_BEGINS, POST_DATA_SUCCESS, POST_DATA_FAILURE } from "./Actions";

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case POST_DATA_BEGINS:
            return{
                ...state,
                loading: true,
                error: null
            }
        case POST_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
            }
        case POST_DATA_FAILURE:
            return{
                ...state,
                loading: false,
                data: [],
                error: action.payload.error
            }
        default:
            return state
    }
}