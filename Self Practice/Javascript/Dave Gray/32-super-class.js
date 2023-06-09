// Javascript Classes
// A super class is a parent class from which other classes can be  created
class Pizza{
  constructor(pizzaSize) {  
    this._size = pizzaSize; // a property
    this._crust = 'original'; 
  }
  // getter
  getCrust(){
    return this._crust;
  }
  // setter
  setCrust(pizzaCrust){
    this._crust = pizzaCrust;
  }
}
// NOTE: the underscore as used in the key, (this._rust) doesn't apply any special function but rather its a convention that means the properties are private and hence, not to be modified outside the class.

class SpecialtyPizza extends Pizza {
  constructor(pizzaSize){
    super(pizzaSize); 
    // 'super' imports the super class constructor. that will then allow 'this' keyword to be used
    this.type = "Special";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
  }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();