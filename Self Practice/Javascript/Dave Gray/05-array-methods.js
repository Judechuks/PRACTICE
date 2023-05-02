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

// 14. 