import { useState } from "react";

function Product({ name, price, img, description }) {
  const [isBought, setIsBought] = useState(false);
  return (
    <>
      <div className="product">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        {isBought ? (
          <p className="btn bought">bought</p>
        ) : (
          <button className="btn" onClick={() => setIsBought(true)}>
            buy
          </button>
        )}
      </div>
    </>
  );
}
export default Product;
