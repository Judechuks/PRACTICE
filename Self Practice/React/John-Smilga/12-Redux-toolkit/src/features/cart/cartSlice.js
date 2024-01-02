import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  // cartItems: cartItems, // Local setup
  cartItems: [], // to be fetched
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

/*
// Advanced way of using createAsyncThunk
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (value, thunkAPI) => {
    // where value is a value from getCartItems call if needed
    try {
      console.log(thunkAPI.getState());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response");
      return thunkAPI.rejectWithValue("There was an error..");
    }
  }
);
*/

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // state.cartItems = []; // state is mutated which is handled by 'Immer' library from redux
      // Alternatively, you can return the initialState with some adjustments
      return { ...initialState, cartItems: [] }; // cartItems is emptied
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  /*// The object notation for creatSlice.extraReducers is deprecated, from RTK 2.0 use the 'builder callback'
  extraReducers: {
    // life cycle actions from the createAsyncThunk method
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.cartItems = actions.payload;
    },
    [getCartItems.rejected]: (state, actions) => {
      state.isLoading = false;
      // network errors, 404 error is not included in fetch API unlike axios
      console.log(action); // from createAsyncThunk using axios
    },
  }, 
  */

  // The builder callback
  extraReducers: (builder) => {
    // life cycle actions from the createAsyncThunk method
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        // network errors, 404 error is not included in fetch API unlike axios
        console.log(action); // from createAsyncThunk using axios
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
