import axios from "axios";
import {
  fetchDataBegin,
  fetchDataSuccess,
  fetchDataFailure,
} from "../APIRedux/Actions";
import { getData, postUser, updateUser } from "../APIRedux/API/Service";
import {
  postBegin,
  postSuccess,
  postFailure,
} from "../APIRedux/PostRedux/Actions";
import { updateDataBegin, updateDatasuccess, updateDataFailure } from "../APIRedux/UpdateReducer/Actions";
export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataBegin());
  try {
    const response = await getData();
    dispatch(fetchDataSuccess(response));
  } catch (err) {
    dispatch(fetchDataFailure(err));
  }
};
export const postUsers = (user) => async (dispatch) => {
  dispatch(postBegin());
  try {
    const response = await postUser(user);
    dispatch(postSuccess(response));
  } catch (err) {
    dispatch(postFailure());
  }
};

export const updateData = (id, updatedUser) => async dispatch => {
  try{
    dispatch(updateDataBegin());
    const response = await updateUser(id, updatedUser);
    dispatch(updateDatasuccess(response));
  }
  catch(err){
    dispatch(updateDataFailure(err))
  }
}
