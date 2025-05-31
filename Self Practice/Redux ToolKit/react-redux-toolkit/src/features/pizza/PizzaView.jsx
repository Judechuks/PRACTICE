import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pizza_order, customer_choice } from "./pizzaSlice";

const PizzaView = () => {
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <div>
        <div className="quantity-container flex gap-2 flex-wrap items-center">
          <label htmlFor="pizza_quantity">Quantity of Pizza Needed: </label>
          <input
            type="number"
            id="pizza_quantity"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-2">
          <h2>Pizza base available: </h2>
          <h2 className="text-center">{pizzaBase}</h2>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => dispatch(pizza_order())}>Order 1 Pizza</button>
        <button onClick={() => dispatch(customer_choice(quantity))}>
          Order Pizza by Quantity
        </button>
      </div>
    </div>
  );
};

export default PizzaView;
