import axios from "axios";


const baseURL = 'http://localhost:8087/login'

export const getData = async () => {
  const response = await axios.get(`${baseURL}`);
  return response.data;
};

export const postUser = async ( newUser ) => {
  const response = await axios.post(`${baseURL}`, newUser)
  return response.data;
}

export const updateUser = async (id, updatedUser) => {
  const response = await axios.put(`${baseURL}/${id}`,updatedUser)
  return response;
}