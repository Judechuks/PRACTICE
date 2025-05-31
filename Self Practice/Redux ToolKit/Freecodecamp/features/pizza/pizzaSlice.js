// const {createSlice} = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";
const initialState = { pizzaBase: 1000 };

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBase--; // direct mutation without using the spread operator because redux/toolkit uses immer behind the scene
    },
  },
});

// console.log(pizzaSlice);
// export default pizzaSlice.reducer; // reducer which is coming from the the createSlice/pizzaSlice

// default export
// module.exports = pizzaSlice.reducer; // reducer which is coming from the the createSlice/pizzaSlice
// named export
// modeile.exports.pizzaActions = pizzaSlice.actions;
const pizzaActions = pizzaSlice.actions;
export { pizzaActions };
export default pizzaSlice.reducer;
