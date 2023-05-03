//====== SELF LEARNING =======
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 9. find() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. find() then returns that element and stops iterating through the array. If callbackFn never returns a truthy value, find() returns undefined.
// 9a. find(callbackFn)
//9b. find(callbackFn, thisArg)
// Example: To get the first element that is greater than 10
const found = [5, 12, 8, 130, 44].find(element => element > 10);
console.log(found); // Expected output: 12

// 10. findIndex() is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. findIndex() then returns the index of that element and stops iterating through the array. If callbackFn never returns a truthy value, findIndex() returns -1.
// Examole:
const isLargeNumber = (element) => element > 13;
console.log([5, 12, 8, 130, 44].findIndex(isLargeNumber)); // Expected output: 3

// 11. findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
/* Not working in nodejs
console.log([5, 12, 50, 130, 44].findLast((element) => element > 45)); // Expected output: 130
*/

// 12. findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)
/* Not working in nodejs
const isLargeNum = (element) => element > 45;
console.log([5, 12, 50, 130, 44].findLastIndex(isLargeNum)); 
// Expected output: 3 which is the Index of element with value: 130
*/

// 13. flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// 13a. flat(). depth default is 1
// 13b. flat(depth). depth = The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
// Return Value: A new array with the sub-array elements concatenated into it.
// Example:
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());  // Expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2)); // Expected output: Array [0, 1, 2, Array [3, 4]]

// 14. flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)
console.log([1, 2, 1].flatMap((num) => (num === 2 ? [2, 2] : 1))); // [1, [2,2], 1] when mapped
// Expected output: Array [1, 2, 2, 1] (after flattened)

// 15. forEach() method executes a provided function once for each array element.
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
const arrayA = ['a', 'b', 'c'];
arrayA.forEach(element => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// 16. Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// 16a. Array.from(arrayLike)
// 16b. Array.from(arrayLike, mapFn)
// 16c. Array.from(arrayLike, mapFn, thisArg)
console.log(Array.from('foo')); // Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // Expected output: Array [2, 4, 6]
