// Javascript Classes
// A class is a blue print for creating an object
class Pizza{
  constructor(pizzaType, pizzaSize){  // constructor is a keyword
    this.type = pizzaType; // a property
    this.size = pizzaSize; // a property
    this.crust = 'original'; // you can pass the value as a parameter
    this.toppings = [];
  }
  // getter
  getCrust(){
    return this.crust;
  }
  // setter
  setCrust(pizzaCrust){
    this.crust = pizzaCrust;
  }
  getToppings(){
    return this.toppings;
  }
  setToppings(topping){
    this.toppings.push(topping); 
  }
  bake() { // a method, you don't have to use 'function' keyword
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
  }
}
const myPizza = new Pizza("Pepperoni", "small"); // creating a 'myPizza' object from 'Pizza' class
// myPizza.type = 'Supreme';
// you can directly assign/change the property of an object, but it is not adviceable to do that, instead use the getter and setter convention
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
myPizza.setToppings("Sausage");
myPizza.setToppings("Olive");
console.log(myPizza.getToppings());