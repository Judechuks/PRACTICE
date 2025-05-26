const redux = require("redux");
const thunk = require("redux-thunk").thunk;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// action types
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

// State
const initialState = {
  loading: false,
  products: [],
  error: false,
};

// action creators
function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}
function fetchSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
}
function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

// Thunk Action Creator - for fetching data
const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data.map((product) => product.title);
        // dispatch(fetchSuccess(products));
        console.log(products);
      })
      .catch((error) => dispatch(fetchError()));
  };
};

// store
const store = createStore(reducer, applyMiddleware(thunk));
// The redux thunk middleware package for performing asynchronous operation - Thunk allows redux to wait before dispatch fetch data inside the store. In other words, we have to use thunk to differ dispatching into the future.

// subscribe
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// dispatch the action creator for fetching products
store.dispatch(fetchProducts());
