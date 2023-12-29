import axios from "axios";
import {
  fetchDataBegin,
  fetchDataSuccess,
  fetchDataFailure,
} from "../APIRedux/Actions";
import { getData, postUser } from "../APIRedux/API/Service";
import {
  postBegin,
  postSuccess,
  postFailure,
} from "../APIRedux/PostRedux/Actions";

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
