import axios from "axios";

export const UPDATE_DATA_BEGIN = "UPDATE_DATA_BEGIN";
export const UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS";
export const UPDATE_DATA_FAILURE = "UPDATE_DATA_FAILURE";

export const updateDataBegin = () => {
  return {
    type: UPDATE_DATA_BEGIN,
  };
};

export const updateDatasuccess = (payload) => {
  return {
    type: UPDATE_DATA_SUCCESS,
    payload,
  };
};

export const updateDataFailure = (error) => {
  return {
    type: UPDATE_DATA_FAILURE,
    payload: { error },
  };
};


