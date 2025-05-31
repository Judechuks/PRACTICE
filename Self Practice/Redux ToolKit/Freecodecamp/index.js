import store from "./app/store.js";
import { pizzaActions } from "./features/pizza/pizzaSlice.js";
import { burgerActions } from "./features/burger/burgerSlice.js";
import { fetchProducts } from "./features/product/productSlice.js";

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
// const unsubscribe = store.subscribe();

// dispatching actions
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerActions.burger_order());
// store.dispatch(burgerActions.burger_order());

// this just dispatches the action without waiting for response of the operation
// store.dispatch(fetchProducts());

// with the then() method we can await for the async operation
store
  .dispatch(fetchProducts())
  .then(() => console.log("Final state after updating: ", store.getState()));

// unsubscribe
unsubscribe();
