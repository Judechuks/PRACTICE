//====== SELF LEARNING =======
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 17. includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 17a. includes(searchElement)
// 17b. includes(searchElement, fromIndex)
console.log([1, 2, 3].includes(2)); // Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // Expected output: true
console.log(pets.includes('cat', 2)); // Expected output: false
console.log(pets.includes('at')); // Expected output: false

// 18. indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex) -ve index counts from the back
// Example:
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // Expected output: 1
console.log(beasts.indexOf('bison', 2)); // Start from index 2 // Expected output: 4
console.log(beasts.indexOf('giraffe')); // Expected output: -1 (not found)

// 19. Array.isArray() static method determines whether the passed value is an Array. returns true or false
// Syntax: Array.isArray(value)
console.log(Array.isArray([1, 3, 5])); // Expected output: true
console.log(Array.isArray('[]')); // Expected output: false
console.log(Array.isArray(new Array(5))); // Expected output: true
console.log(Array.isArray(new Int16Array([15, 33]))); // Expected output: false

// 20. join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // Expected output: "Fire,Air,Water" (join them with no space)
console.log(elements.join('')); // Expected output: "FireAirWater" (join them with nothing)
console.log(elements.join('-')); // Expected output: "Fire-Air-Water" (join them with dash)

// 21. keys() method returns a new array iterator object that contains the keys for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

// 22. lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. (descending order)
// 22a. lastIndexOf(searchElement)
// 22b. lastIndexOf(searchElement, fromIndex)
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); // Expected output: 3
console.log(animals.lastIndexOf('Tiger')); // Expected output: 1

// 23. map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// 23a. map(callbackFn)
// 2ba. map(callbackFn, thisArg)
const arrayTwice = [1, 4, 9, 16]; 
const map1 = arrayTwice.map(x => x * 2); // Pass a function to map
console.log(map1); // Expected output: Array [2, 8, 18, 32]

// 24. Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.(duplicates an array)
console.log(Array.of('foo', 2, 'bar', true)); // output: Array ["foo", 2, "bar", true]
console.log(Array.of()); // output: Array []