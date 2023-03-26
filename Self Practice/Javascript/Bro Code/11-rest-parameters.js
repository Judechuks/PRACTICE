// rest parameters '...' = represents an indefinite number of parameters (packs arguments into an array)

let a = 1, b = 2, c = 3, d = 4, e = 5;

/*
 function sum(a, b){
  return a + b;
}
function sum(a, b, c){
  return a + b + c;
}
function sum(a, b, c, d){
  return a + b + c + d;
}
console.log(sum(a, b));  // NaN
// This is becasue the last function declared have 4 parameters and 2 arguments were passed and the remaining 2 undefined, then the general result will be not a number 
*/
// But with rest parameter '...', you can declare a function can can take any number of argument.

function sum(...numbers){
//function sum( x, ...numbers){ // still correct
//function sum( x, y, ...numbers){ // still correct
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(a, b, c));
console.log(sum(a, b, c, d, e));