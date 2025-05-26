import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./ProductsTypes";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

// Thunk Action Creator - for fetching data. It doesn't need to be a pure function unlike the ones above.
export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data.map((product) => product.title);
        dispatch(fetchSuccess(products));
        // console.log(products);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchError(errorMsg));
      });
  };
}
