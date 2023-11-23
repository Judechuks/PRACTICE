// Array includes() - checks if an item is in an array.
// returns true or false, and is case sensitive.
// useful in the conditional statement
// String includes('search string', positionOfStr)

const groceries = ["milk", "bread", "meat"];
let randomItem = "pear";
let isIncluded = groceries.includes(randomItem);
console.log(isIncluded); // false
randomItem = "milk";
isIncluded = groceries.includes(randomItem, 0);
console.log(isIncluded); // true

if (groceries.includes(randomItem)) {
  console.log(randomItem, "will be delivered to you shortly.");
} else {
  console.log(randomItem, "is not availabe at the moment.");
}
