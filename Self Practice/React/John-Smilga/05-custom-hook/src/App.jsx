import React, { useEffect, useState } from "react";
import { useFetch } from "./custom-hook/useFetch";
// the custom hook name must start with 'use'

export default function App() {
  // const [name, setName] = useState("");
  // const url = "https://course-api.netlify.app/api/javascript-store-products";
  const url = "https://dummyjson.com/products";
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h1>{loading ? "loading..." : "Data"}</h1>
    </div>
  );
}
