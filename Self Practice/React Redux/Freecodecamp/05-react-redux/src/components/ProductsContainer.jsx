import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./redux";

const ProductsContainer = () => {
  const state = useSelector((state) => state.product); // accessing global state for product reducer
  console.log("state", state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // fetching data
  }, [dispatch]);

  // if (true) {
  if (state.loading) {
    return (
      <div className="loader-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  // if (true) {
  if (state.error) {
    return (
      <div className="error-container">
        <h2>Opps</h2>
        <p className="error-msg">{state.error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Fake Store API Products</h2>
      <ul>
        {state.products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsContainer;
