import React from "react"
import Product from "./components/Product"
import ProductDetails from "./components/ProductDetails"

function App(){
  const productComponents = ProductDetails.map(item => <Product key={item.id} product={item} />)
  return (
    <div className="">
      {productComponents}
    </div>
  )
}
  
export default App