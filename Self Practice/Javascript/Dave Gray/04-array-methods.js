//====== SELF LEARNING =======
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1. iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.
// Example:
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e

// 2. at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
// NOTE: not working in node 
/*
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];
console.log(`Using an index of 2 the item returned is ${prime.at(2)}`);  // 5
console.log(`Using an index of 2 the item returned is ${prime.at(-4)}`);  // 13
*/

// 3. concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// 4. copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// 4a. copyWithin(target). target = zero-based index at which to copy the sequence to.(<-ve count backward)
console.log([1, 2, 3, 4, 5].copyWithin(2));  // [1, 2, 1, 2, 3]
console.log([1, 2, 3, 4, 5].copyWithin(-2));  // [1, 2, 3, 1, 2]

// 4b. copyWithin(target, start). start = zero-based index at which to start copying elements from. (<-ve count backward)
const array = ['a', 'b', 'c', 'd', 'e'];
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));  // [4, 5, 3, 4, 5]
console.log(array.copyWithin(1, 3)); // Copy to index 1 all elements from index 3 to the end
// Expected output: Array ["a", "d", "e", "d", "e"]

// 4c. copyWithin(target, start, end). end = zero-based index at which to end copying elements from. with the end index not included(<-ve count backward)
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));  // [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));  // [1, 2, 3, 3, 4]
console.log(array.copyWithin(0, 3, 4)); // Copy to index 0 the element at index 3
// Expected output: Array ["d", "d", "e", "d", "e"]

// 5. entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element); // (0 'a') (1 'b') (2 'c')
}

// 6. every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// 6a. every(callbackFn)
// 6b. every(callbackFn, thisArg)
// Return value: true if callbackFn returns a truthy value for every array element. Otherwise, false.
// Example 1: Checks if every element in the array is greater than or equal to 10. returns true or false
function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough)) // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Example 2: tests if all the elements of an array are present in another array.
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// 7. fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// 7a. fill(value, start, end). end = zero based, fill up to but not including
console.log([1, 2, 3, 4].fill(0, 2, 4));  // Fill with 0 from position 2 until position 4
// Expected output: Array [1, 2, 0, 0]
// 7b. fill(value, start). start = -ve starts from back
console.log([1, 2, 3, 4].fill(5, 1)); // Fill with 5 from position 1
// Expected output: Array [1, 5, 5, 5]
// 7c. fill(value)
console.log([1, 2, 3, 4].fill(6)); // Fill with 6 from position 0 until the last position
// Expected output: Array [6, 6, 6, 6]

// 8. filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.
// filter(callbackFn)
// filter(callbackFn, thisArg)
// Example 1: To get a words greater than 6 letters
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]

// Example 2: To get prime numbers
const arrayNum = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(arrayNum.filter(isPrime)); // [2, 3, 5, 7, 11, 13]