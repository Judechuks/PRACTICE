import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import singleReducer from "./singleReducer";

// const store = createStore(pizzaReducer);

const store = createStore(
  singleReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
