// Creating an object based on the existence of another object.
// Inheritance means getting the properties and methods of a parent object
// Example

const vehicle = {
  wheels: 4,
  engine: function(){
    return "Vrrooooom!";
  }
};

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck["wheels"]); //Inheritance 
console.log(truck.engine());  // 

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() { 
  return "Whooosh!"
};
console.log(car.engine());