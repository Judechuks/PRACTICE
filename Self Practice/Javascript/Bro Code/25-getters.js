// get = binds an object property to a function when that property is accessed.

class Car{
  constructor(power){
    this._power = power;  // _power naming convention means that its protected and not to be changed
    this._gas = 50; // starting point of the gas level
  }
  get power(){
    return `${this._power}hp`;  // it is ReadOnly, getters increases data security, 
    // it allows one to add additional logic, like the inclusion of 'hp' in this example
  }
  get gas(){
    return `${this._gas}L (${this._gas / 50 * 100})%`; 
  }
}

let car = new Car(400);
console.log(car.power);
console.log(car.gas);