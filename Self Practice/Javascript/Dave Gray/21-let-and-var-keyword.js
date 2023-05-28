// Scope of var, let, and const
var x = 1;
var x = 2;
// doesn't throw an error when a variable is redeclared using var unlike let or const
console.log(x);
// you can't re-initialize a variable declared using const unlike let or var
const PI = 3.142;
//PI = 3.14;  // TypeError: Assignment to constant variable.

// Global Scope
var x = 1; let y = 2; const z = 3;

// local scope 
// i. block scope
{
  let y = 4; //if this is not available
  console.log("y value in a block: "+ y); // y becomes the global scope value: 2
  // the scope of y = 4, ends here
}
// ii. function scope
function myFunction(){
  const z = 5; // if this is not available
  console.log("z value in a function: "+ z); // z becomes the global scope value: 3
  // the scope of z = 5, ends here
}
myFunction();

console.log("Global x, y and z value respectively: "+ x + " " + y + " " + z);
// the values for x =1, y = 2, z = 3, is available in all scope