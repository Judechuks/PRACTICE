import React, { useEffect, useState, useCallback, useMemo, memo } from "react";
import products from "./products";

const calculateMostExpensive = (products) => {
  console.log("Hello");
  return products.reduce((total, item) => {
    const price = item.fields.price; // from the fetched data
    if (price >= total) {
      total = price;
    }
    return total;
  }, 0);
};

export default function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]); // also add the dependency array, it only re-renders when cart changes

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  ); // also add the dependency array, it only re-renders when products changes

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1>Cart: {cart}</h1>
      <h1>Most Expensive: ${mostExpensive}</h1>
      <ProductList products={products} addToCart={addToCart} />
    </>
  );
}

// ProductList component
const ProductList = React.memo(({ products, addToCart }) => {
  // stops re-render when state changes, unless when props 'products' changes
  // useCallback hook to handle the re-render caused by addToCart function
  useEffect(() => {
    console.log("Product List called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return <Product key={product.id} {...product} addToCart={addToCart} />;
      })}
    </section>
  );
});

// Single Product component
const Product = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Product called");
  });

  let { name, price } = fields;
  const image = fields.image[0].url;
  return (
    <article className="product font-bold">
      <img src={image} alt={name} />
      <h4 className="text-xl pt-2">{name}</h4>
      <p className="text-lg">${price}</p>
      <button className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </article>
  );
};

// Performance Optimization - Memoizing(caching i.e remember)
// Although this improves performance but it comes at a cost (memory, cpu). Indeed React is fast, optimization is not compulsory
/* 1. React.memo - is used to prevent the component from re-rendering when there is a change in state or props,
// you use it to wrap your component as in:
const MyComponent = React.memo(({props destructured is any}) => {
  return <div></div>
});
*/
/* 2. useCallback - is similar to a React.memo, but its used when it involves a function
// you use it to wrap your function as in:
const MyComponent = React.memo(({props destructured is any}) => {
  const [cart, setCart] = useState();
  useEffect();
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
  return (
    <section className="item">
      <p>Your items that you may want to render</p>
    </section>
  )
});
*/
/* 3. useMemo - is similar to useCallback but this time it memoizes i.e. it remembers the value used in the function
// you use it to wrap your function as in:
const calculateMostExpensive = (data) => {
  console.log('hello');
  return (
    data.reduce((total, item) => {
      const price = item.fields.price; // from the fetched data
      if(price >= total){
        total = price;
      }
      return total;
    }, 0) / 100 // value is in cent
  );
};
const MyComponent = React.memo(({props destructured is any}) => {
  const [cart, setCart] = useState();
  useEffect();
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [products]);
  // to always remember the value used in the function, it will only call the function when value 'products' change
  return (
    <section className="item">
      <p>Your items that you may want to render</p>
    </section>
  )
});
*/
