import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { burger_order, customer_choice } from "./burgerSlice";

const BurgerView = () => {
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="card">
      <div className="">
        <div className="quantity-container flex gap-2 flex-wrap items-center">
          <label htmlFor="burger_quantity">Quantity of Burger Needed: </label>
          <input
            type="number"
            id="burger_quantity"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-2">
          <h2>Burger buns available: </h2>
          <h2 className="text-center">{burgerBuns}</h2>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => dispatch(burger_order())}>Order 1 Burger</button>
        <button onClick={() => dispatch(customer_choice(quantity))}>
          Order Burger by Quantity
        </button>
      </div>
    </article>
  );
};

export default BurgerView;
