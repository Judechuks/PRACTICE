// Class Declaration
// class Car {}

// Class Expression
// let car = class {}

// In class, the name of the constructor function has to be named 'constructor' for it to work
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`Car's Make: ${this.make}, Model: ${this.model}, Year: (${this.year})`);
  }
}
let myCar = new Car('BMW', '745li', 2010);
myCar.print();

class SportsCar extends Car {
  revEngine(){
    console.log('Vrrroom goest the', this.model);
  }
} 
// the 'Sportscar' class has been created by its prototype class 'Car'

let mySportsCar = new SportsCar('Dodge', 'Viper', 2011);
// Here, the instance 'mySportsCar' of the new 'SportsCar' is being created. Hence it gets its definition from the "Sportscar" which also gets its own definition from 'Car'
mySportsCar.print();
mySportsCar.revEngine(); // it exits on mySportsCar
//myCar.revEngine(); // it does not exits on myCar