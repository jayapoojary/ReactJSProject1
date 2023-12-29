import axios from "axios";

export const POST_DATA_BEGINS = 'POST_DATA_BEGINS';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const postBegin = () => {
    return{
        type: POST_DATA_BEGINS,
    }
}

export const postSuccess = payload => {
    return{
        type: POST_DATA_SUCCESS,
        payload,
    }
}

export const postFailure = (error) => {
    return {
        type: POST_DATA_FAILURE,
        payload: { error }
    }
}

export const postData = (Content) => {
    return async dispatch => {
        dispatch(postBegin())
        return axios.post('http://localhost:8087/login',Content)
        .then((response) => {
            dispatch(postSuccess(response.data))
        return response.data
        })
        .catch((error) => dispatch(postFailure(error)))
    }
}

