// array.reduce() = reduces an array to a single value
// Example: summing up the elements of an array

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

function checkOut(total, element){
  return total + element;
}

console.log(`The total price is: $${total}`);