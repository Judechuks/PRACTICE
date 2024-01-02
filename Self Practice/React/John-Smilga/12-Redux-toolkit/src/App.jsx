import React, { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
function App() {
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
    // dispatch(getCartItems(value));
    // where value is a value to be passed to the createAsyncThunk if needed when fetching data
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="">
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
