// spread operator '...' = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements into many individual pieces)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(numbers); // NaN; because the numbers are packed together as an array and not numbers 
let maximum = Math.max(...numbers);  // using the spread operator '...' now separates the numbers as individual items
console.log(maximum);  // returns 9

let class1 = ['Jude', 'Bobby', 'Jane'];
let class2 = ['Sandra', 'Mark', 'Gift'];

//class1.push(class2); // adds the array class2 into class1, without unpacking the individual item.
//console.log(class1); // [Jude, Bobby, Jane, [Sandra, Mark, Gift]]
class1.push(...class2); 
console.log(class1);  // [Jude, Bobby, Jane, Sandra, Mark, Gift]
console.log(...class1);  // Jude, Bobby, Jane, Sandra, Mark, Gift