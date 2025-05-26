import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux";

const HooksContainer = () => {
  // const pizzaBase = useSelector((state) => state.pizzaBase); // when reducers were not combined
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase); // when reducers were combined
  const dispatch = useDispatch();

  return (
    <div className="pizzabox-container">
      <h3 className="text">Number of Pizza Base available</h3>
      <p className="count">{pizzaBase}</p>
      <button type="button" onClick={() => dispatch(orderPizza())}>
        Order Pizza
      </button>
    </div>
  );
};

export default HooksContainer;
