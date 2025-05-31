import { configureStore } from "@reduxjs/toolkit";
// import { createLogger, logger } from "redux-logger";
import pizzaReducer from "../features/pizza/pizzaSlice.js";
import burgerReducer from "../features/burger/burgerSlice.js";
import productReducer from "../features/product/productSlice.js";
// const logger = createLogger();

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// module.exports = store;
export default store;
