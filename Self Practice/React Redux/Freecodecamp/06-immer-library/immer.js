const redux = require("redux");
const produce = require("immer").produce;
// use Redux Toolkit instead of the createStore from core redux
const createStore = redux.createStore;

const FILL_UPDATE = "FILL_UPDATE";

// Action Creator - returns action
function updateFill(filling) {
  return {
    type: FILL_UPDATE,
    payload: filling,
  };
}

// initial state
const initialState = {
  type: "veggie",
  ingredients: {
    bread: "Whole Grain",
    filling: "Lettuce and Tomato",
    sauce: "Mustard",
  },
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case FILL_UPDATE:
      /*  return {
        ...state,
        ingredients: {
          ...state.ingredients,
          filling: action.payload,
        },
      }; 
      // Instead of doing this you can use the immer library to handle this process
      */
      return produce(state, (draft) => {
        draft.ingredients.filling = action.payload;
      });
    default:
      return state;
  }
}

// STORE
// 1. Store needs to hold the application's state
const store = createStore(reducer);

// 2. It exposes a method called getState which gives your application access to the current state in the store.
console.log("Initial State: ", store.getState());

// 3. Registers listeners via subscribe(listener) - listener is a function, subscribe is executed anytime the state in the Redux store changes.
const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);

// 4. Allows state to be updated by a dispatch(action) - And the action can be gotten from the action Creator
store.dispatch(updateFill("Grilled Veggies and Cheese"));

// 5. unsubscribing of listeners via the function returned by the subscribe method.
unsubscribe();
store.dispatch(updateFill()); // can't dispatch an action once you have unsubscribed - state will not be affected
