// Javascript Classes
class Pizza{
  crust = "original"
  // a public static field, should be placed outside the constructor
  #sauce = "traditional"
  // a private field that is indicated with a '#' cannot be accessed outside the class
  #size; // is a private field
  constructor(pizzaSize) {  
    //this._size = pizzaSize; // a property
    this.#size = pizzaSize; // a property
  }
  // getter
  getCrust(){
    return this.crust;
  }
  // setter
  setCrust(pizzaCrust){
    this.crust = pizzaCrust;
  }
  hereYouGo(){
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
// console.log(myPizza.crust); // output the value of the public field
console.log(myPizza.getCrust()); // output the value of the public field ("original")
//console.log(myPizza.sauce()); // output 'undefined' (because it isn't defined as public)
//console.log(myPizza.#sauce()); // output "error: private field 'sauce' must be declared in an enclosing class" that is because the private field cannot be used outside the class.
console.log(myPizza.crust); // output "original" because crust is public field and so can be used outside the class