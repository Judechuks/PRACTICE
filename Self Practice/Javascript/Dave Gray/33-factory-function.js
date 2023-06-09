// Factory Function
// is another way to create an object in javascript. It is used as a factory for object creation
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    // Notice that the 'this' keyword wasn't used
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake();
// console.log(myPizza.size); //undefined
// the properties can not be accessed outside the function. (Remember Scope). This makes it easier to implement 'private properties' 