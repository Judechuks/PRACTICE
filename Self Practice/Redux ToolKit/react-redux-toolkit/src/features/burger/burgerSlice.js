import { createSlice } from "@reduxjs/toolkit";
import { pizza_order as pizzaOrdered } from "../pizza/pizzaSlice";

const initialState = {
  burgerBuns: 200,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--;
    },
    customer_choice: (state, action) => {
      state.burgerBuns = state.burgerBuns - action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pizzaOrdered, (state) => {
      state.burgerBuns--;
    });
  },
});

export const { burger_order, customer_choice } = burgerSlice.actions;
// console.log(burgerSlice);

export default burgerSlice.reducer;
