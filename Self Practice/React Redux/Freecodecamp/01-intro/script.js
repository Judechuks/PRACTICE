const redux = require("redux");
// use Redux Toolkit instead of the createStore from core redux
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";

// Action Creator - returns action
function orderPizza() {
  // returns action
  return {
    type: ORDER_PIZZA,
    payload: 90,
  };
}

// initial state
const initialState = { pizzaBase: 100 };

// Reducer
function reducer(state = initialState, action) {
  switch (
    action.type // to check which action was dispatch, for reducer to execute
  ) {
    case ORDER_PIZZA:
      return {
        // return the recent state after making necessary adjustment
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
}

// STORE
// 1. Store needs to hold the application's state
//Though we are passing the reducer function in the store, instead of the initialState, this is because the reducer also has accesss to the initialState
const store = createStore(reducer);

// 2. It exposes a method called getState which gives your application access to the current state in the store.
console.log("Initial State: ", store.getState());

// 3. Registers listeners via subscribe(listener) - listener is a function, subscribe is executed anytime the state in the Redux store changes.
const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);

// 4. Allows state to be updated by a dispatch(action) - And the action can be gotten from the action Creator
store.dispatch(orderPizza());
store.dispatch(orderPizza());

// 5. unsubscribing of listeners via the function returned by the subscribe method.
unsubscribe();
store.dispatch(orderPizza()); // can't dispatch an action once you have unsubscribed - state will not be affected
