let fruits =     ['apple', 'orange', 'banana'];
let vegetables = ['carrot', 'onion', 'potato'];
let meats =      ['egg', 'chicken', 'fish'];

let groceryList = [fruits, vegetables, meats];

/* for (let list of groceryList) {  // to get all arrays in groceryList
  for (let food of list) {  // to get all the items of list
    console.log(food); 
  }
} */

// you can get a particular item of a particular array using the matrix notation, 3x3 matrix
// [first value for the row][second value for the column] the value should be in indexc i.e starting from zero [0]
console.log(groceryList[1][2]);
console.log(groceryList[2][0]);
groceryList[2][0] = 'beef';
console.log(groceryList[2][0]);