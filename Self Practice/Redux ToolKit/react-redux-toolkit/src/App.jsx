import BurgerView from "./features/burger/BurgerView";
import PizzaView from "./features/pizza/PizzaView";
import ProductView from "./features/products/ProductView";

function App() {
  return (
    <main className="card-container">
      <PizzaView />
      <BurgerView />
      <ProductView />
    </main>
  );
}

export default App;
