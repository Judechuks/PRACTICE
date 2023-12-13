import React from "react";
import PropType from "prop-types";
import defaultImg from "./assets/Logo.png";

function Product({ title, image, price }) {
  const imgSrc = image && image.url;
  return (
    <div className="modal">
      <h1>Product Iteml</h1>
      <img src={imgSrc || defaultImg} alt={title || "default name"} />
      <h1>{title}</h1>
      <p>${price || 99.9}</p>
    </div>
  );
}

// proptype properties on the component 'product'
Product.propType = {
  image: PropType.object.isRequired,
  title: PropType.string.isRequired,
  price: PropType.number.isRequired,
};
// defaultProps: the values to be displayed if some certain values were not provided
Product.defaultProps = {
  image: defaultImg,
  title: "default Product",
  price: 99.9,
};

export default Product;
