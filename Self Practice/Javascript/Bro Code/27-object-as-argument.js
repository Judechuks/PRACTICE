// passing object as argument
class Car{
  constructor (model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

function displayInfo(car){
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}

function changeColor(car, color){
  car.color = color;
}
console.log("Before Color Change:");
displayInfo(car3);
changeColor(car3, "gold");
console.log("After Color Change:");
displayInfo(car3);