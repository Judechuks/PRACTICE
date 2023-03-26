// Object Prototype Chain: means creating a link between two or more objects where a new object gets it properties or methods from the original object (parent) and the new object (child) can then be further enhanced to contain more properties and/or methods.
// In other OOP languages, it is referred to as inheritance, and this inheritance is between classes, whereas in JavaScript it is referred to object Prototype chain and it is between objects (not classes).

let OriginalCar = {
  make: 'BMW',
  model: '745li',
  year: 2010
} 
let NewCar = Object.create(OriginalCar);
console.log(NewCar.make);
// NOTE: you can change, delete and create new properties and methods of the new object
NewCar.speed = '20hp';
console.log(NewCar.year);  // 2010 which it gets from the OriginalCar prototype 
console.log(NewCar.speed);
console.log(OriginalCar.speed); // undefined
// It checks if the speed property exists in the OriginalCar, it doesn't get it, then it checks the prototype of the OriginalCar which is the built-in native Object, and it doesn't get it, it checks the built-in prototype which is the global object, it doesn't get it, then it returns primitive datatype 'undefined'. Same scenario happens when a property that does not exist is used a a new object, it checks its original prototype. 
// NOTE: There is a link between the new object and its Prototype
console.log(Object.getPrototypeOf(NewCar));
NewCar.year = 2023;
console.log(NewCar.year) // 2023
// It returns 2023 because the NewCar now has its own property 'year' and so the interpreter does not need to go check the prototype's year which '2010'
OriginalCar.doors = 4;
console.log(NewCar.doors);
// The NewCar seems to get the new property from the OriginalCar, but the Original doesn't get the 'speed' property of the 'NewCar'
// To check which object have a particular property, you use the 'hasOwnProperty' method
console.log(OriginalCar.hasOwnProperty('doors')); // true
console.log(NewCar.hasOwnProperty('doors')); // false
console.log(OriginalCar.hasOwnProperty('speed')); // false
