import { connect } from "react-redux";
import { orderBurger } from "./redux";

const BurgerBox = (props) => {
  console.log(props);

  return (
    <div className="pizzabox-container">
      <h3 className="text">Number of Burger Buns available</h3>
      <p className="count">{props.burgerBuns}</p>
      <button type="button" onClick={props.orderBurger}>
        Order Burger
      </button>
    </div>
  );
};

// to have access to state
const mapStateToProps = (state) => {
  return {
    // burgerBuns: state.burgerBuns, // property - when reducers were not combined
    burgerBuns: state.burger.burgerBuns, // property - when reducers were combined
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: () => dispatch(orderBurger()), // method
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
