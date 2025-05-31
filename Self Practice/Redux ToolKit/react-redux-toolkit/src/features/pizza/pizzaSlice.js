import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaBase: 1000,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBase--;
    },
    customer_choice: (state, action) => {
      state.pizzaBase = state.pizzaBase - action.payload;
    },
  },
});

export const { pizza_order, customer_choice } = pizzaSlice.actions;
// console.log(pizzaSlice);

export default pizzaSlice.reducer;
