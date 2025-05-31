import { createSlice } from "@reduxjs/toolkit";
import { pizzaActions } from "../pizza/pizzaSlice.js";

const initialState = { burgerBuns: 200 };

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--; // direct mutation without using the spread operator because redux/toolkit uses immer behind the scene
    },
  },
  // to add more reducers to the slice
  extraReducers: (builder) => {
    builder.addCase(pizzaActions.pizza_order, (state) => {
      state.burgerBuns--;
    });
  },
});

// console.log(burgerSlice);
// export default burgerSlice.reducer; // reducer which is coming from the the createSlice/burgerSlice
const burgerActions = burgerSlice.actions;
export { burgerActions };
export default burgerSlice.reducer;
