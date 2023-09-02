import React from "react"

function Product(props){
  return (
    <div className="">
      <h1 className="text-2xl font-bold" style={{}}>
        {props.product.name}
      </h1>
      <p className="" style={{}}>
        {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}
      </p>
      <p className="" style={{}}>
        {props.product.descriptions}
      </p>
    </div>
  )
}

export default Product