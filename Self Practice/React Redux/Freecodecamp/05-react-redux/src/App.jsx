import { Provider } from "react-redux"; // connecting react to redux
import store from "./components/redux/store";
// import PizzaBox from "./components/PizzaBox";
// import BurgerBox from "./components/BurgerBox";
// import HooksContainer from "./components/HooksContainer";
// import CustomersChoice from "./components/CustomersChoice";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      {/* <PizzaBox />/ */}
      {/* <BurgerBox /> */}
      {/* <HooksContainer /> */}
      {/* <CustomersChoice /> */}
      <ProductsContainer />
    </Provider>
  );
}

export default App;
