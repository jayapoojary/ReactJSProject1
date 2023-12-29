export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN,
  });

  export const fetchDataSuccess = payload => ({
    type: FETCH_DATA_SUCCESS,
    payload,
  });
  
  export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error },
  });

  // export function fetchData() {
  //   return async dispatch => {
  //     dispatch(fetchDataBegin());
  //     return axios.get('http://localhost:8087/login/')
  //       .then(response => {
  //         dispatch(fetchDataSuccess(response.data));
  //         return response.data;
  //       })
  //       .catch(error => dispatch(fetchDataFailure(error)));
  //   };
  // }

  
// export const getData = async () => {
//     const response = await axios.get(`http://localhost:8087/login`);
//     return response.data
// }
// export const fetchData2 = () => async dispatch => {
//   dispatch(fetchDataBegin());
//   try{
//     const response = await getData();
//     dispatch(fetchDataSuccess(response))
//     console.log("response ",response)
//   }
//   catch(err){
//     dispatch(fetchDataFailure(err))
//   }
// }