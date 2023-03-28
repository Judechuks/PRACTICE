// array of objects = collection of objects
class Car{
  constructor (model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive(){
    console.log(`You drive the ${this.model}`);
  }
}
const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferrari", 2025, "white");

const cars = [car1, car2, car3, car4];

console.log("All:", cars);
console.log("First:", cars[0]);
console.log("Third:", cars[2]);
console.log("Third car's Model:", cars[2].model);

cars[1].drive();

function startRace(cars){
  for(const car of cars){
    car.drive();
  }
}
startRace(cars);