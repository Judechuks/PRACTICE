import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { orderBurger } from "./redux";

const CustomersChoice = () => {
  // const burgerBuns = useSelector((state) => state.burgerBuns); // when reducers were not combined
  const burgerBuns = useSelector((state) => state.burger.burgerBuns); // when reducers were combined
  const dispatch = useDispatch();
  const [numberOfBurger, setNumberOfBurger] = useState(1);

  return (
    <div className="pizzabox-container">
      <h3 className="text">Number of Burger Buns Available</h3>
      <p className="count">{burgerBuns}</p>
      <div className="input-container">
        <label htmlFor="request">Number of Burger</label>
        <input
          type="number"
          id="request"
          placeholder="Enter Number of Burger Needed"
          value={numberOfBurger}
          onChange={(e) => setNumberOfBurger(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={() => dispatch(orderBurger(numberOfBurger))}
      >
        Order Burger
      </button>
    </div>
  );
};

export default CustomersChoice;
