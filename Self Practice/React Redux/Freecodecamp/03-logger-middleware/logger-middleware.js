const redux = require("redux");
// use Redux Toolkit instead of the createStore from core redux
const createStore = redux.createStore;
// combineReducers() - method from redux that is used to combine multiple reducers together
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

// Action Creator - returns action
function orderPizza() {
  // returns action
  return {
    type: ORDER_PIZZA,
    payload: 90,
  };
}
// Action Creator - returns action
function orderBurger() {
  return {
    type: ORDER_BURGER,
  };
}

// initial state
// const initialState = { pizzaBase: 100, burgerBuns: 200 };
// it is better to have different state for different reducers
const initialStateForPizza = { pizzaBase: 100 };
const initialStateForBurger = { burgerBuns: 200 };

// Reducer for pizza
function reducerPizza(state = initialStateForPizza, action) {
  switch (
    action.type // to check which action was dispatched, for reducer to execute
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

// Reducer for pizza
function reducerBurger(state = initialStateForBurger, action) {
  switch (
    action.type // to check which action was dispatch, for reducer to execute
  ) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
}

// STORE
// 1. Store needs to hold the application's state
//Though we are passing the reducer function in the store, instead of the initialState, this is because the reducer also has accesss to the initialState
// const store = createStore(reducer);
// so because the createStore method only accepts, one reducer, we use the combineReducers to combine our multiple reducers and then pass that single reducer into the createStore() method.
const rootReducer = combineReducers({
  pizza: reducerPizza,
  burger: reducerBurger,
});
const store = createStore(rootReducer, applyMiddleware(logger));

// 2. It exposes a method called getState which gives your application access to the current state in the store.
console.log("Initial State: ", store.getState());

// 3. Registers listeners via subscribe(listener) - listener is a function, subscribe is executed anytime the state in the Redux store changes.
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State: ", store.getState())
// );
const unsubscribe = store.subscribe(() => {}); // no need to manually log anything, logger will handle that.

// 4. Allows state to be updated by a dispatch(action) - And the action can be gotten from the action Creator
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());

// 5. unsubscribing of listeners via the function returned by the subscribe method.
unsubscribe();
store.dispatch(orderPizza()); // can't dispatch an action once you have unsubscribed - state will not be affected
