// use axios for api call
import axios from "axios";

import {FILTER_PROD,GET_PROD,ERR_PROD,REQ_PROD,SORT_PROD} from "./actionTypes";

function getProductsData(dispatch) {
    dispatch(req_data());
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) =>
      dispatch({
        type: GET_PROD,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(error_data(err.message)));
}


const sortProducts = (payload) => ({
    type: SORT_PROD,
    payload,
  });


const filterProducts = (payload) => ({
    type:FILTER_PROD,
    payload
});

export { getProductsData, sortProducts, filterProducts };


export const req_data = () => ({
    type: REQ_PROD,
  });
  
  export const error_data = (err) => ({
    type: ERR_PROD,
    payload: err,
  });