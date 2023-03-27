// static = belongs to the class, not the objects
            // properties: useful for caches, fixed configuration
            // methods: useful for utility functions 
// A member that is static whether a property or a method belongs to that class and not any object created from that class

class Car{
  static numberOfCars = 0; // static makes the property numberOfCars to belong only to the Car class

  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;  // to count each time a class is instantiated
  }

  startRace(){
    console.log(this.model, "3...2...1...GO!");  // this is not static
  }
}

const Car1 = new Car("Mustang");
const Car2 = new Car("Corvette");
const Car3 = new Car("BMW");
const Car4 = new Car("Ferrari");
const Car5 = new Car("Lambo");

console.log(Car1.numberOfCars);  // undefined bcos the numberOfCars is static only to the class Car
console.log(Car2.numberOfCars);  // undefined bcos the numberOfCars is static only to the class Car
console.log(Car.numberOfCars);   // 5

Car1.startRace();
Car2.startRace();
// Car.startRace();  //undefined - you are not working on the class rather the object created from the class. Car.startRace will only work when it is static and then Car1.startRace, Car2.startRace, ... will be undefined