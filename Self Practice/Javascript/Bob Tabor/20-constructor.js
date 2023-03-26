// In JavaScript, the new keyword is the constructor (and not the function) which calls the function (in this case Car) and then create an empty object (myCar) which is linked to 'this' and then get the properties (and/function) of the function (in this case make, model and year).
// When creating a function to be used as a constructor using the new keyword, the function name should start with an uppercase letter just as 'C' in 'Car'. It is just a naming convention that signifies that it is to be used alongside the 'new' keyword to create an object. (it is not compulsory, but just a naming convention).
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}
let myCar = new Car("BMW", "745li", 2010);
console.log(myCar);
console.log(typeof Car);
console.log(typeof myCar);
// NOTE: you can't call myCar() as a function because it is not a function reference, rather an object and you can get it properties or function as follows:
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
