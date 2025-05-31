import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";
import { useEffect } from "react";

const ProductView = () => {
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // console.log(productState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productState.error) {
    return (
      <div className="error-container">
        <h2 className="">Opps!</h2>
        <p className="error">Error: {productState.error}</p>
      </div>
    );
  }

  if (productState.loading) {
    return (
      <div className="error-container">
        <h3 className="">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Products</h2>
      <ul>
        {productState.products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductView;
