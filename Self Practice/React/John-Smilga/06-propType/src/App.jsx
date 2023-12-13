import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useFetch } from "./custom-hook/useFetch";
// propType: when you fetch data from an API, there is a possibility that your data that
// is fetched may be missing some properties, which when accessed will result to an error
// to solve this, use propType

export default function App() {
  // const url = "https://course-api.netlify.app/api/javascript-store-products";
  const url = "https://dummyjson.com/products";
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h1>{loading ? "loading..." : "Products"}</h1>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}
