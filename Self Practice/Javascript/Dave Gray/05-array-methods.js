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