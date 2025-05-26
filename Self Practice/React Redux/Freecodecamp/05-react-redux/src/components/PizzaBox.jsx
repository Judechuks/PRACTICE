import React from "react";
import { connect } from "react-redux";
import { orderPizza } from "./redux";

const PizzaBox = (props) => {
  console.log(props);

  return (
    <div className="pizzabox-container">
      <h3 className="text">Number of Pizza Base available</h3>
      <p className="count">{props.pizzaBase}</p>
      <button type="button" onClick={props.orderPizza}>
        Order Pizza
      </button>
    </div>
  );
};

// to have access to state
const mapStateToProps = (state) => {
  return {
    // pizzaBase: state.pizzaBase, // property - when reducers were not combined
    pizzaBase: state.pizza.pizzaBase, // property - when reducers were combined
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()), // method
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
