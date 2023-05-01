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
console.log([1, 2, 3, 4, 5].copyWithin(2));  // [1, 2, 3, 1, 2]
console.log([1, 2, 3, 4, 5].copyWithin(-2));  // [1, 2, 3, 1, 2]
// 4b. copyWithin(target, start). start = zero-based index at which to start copying elements from. (<-ve count backward)
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));  // [4, 5, 3, 4, 5]
// 4c. copyWithin(target, start, end). end = zero-based index at which to end copying elements from. (<-ve count backward)
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));  // [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));  // [1, 2, 3, 3, 4]