//====== SELF LEARNING =======
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 25. pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// 26. shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const arrayNum = [1, 2, 3];
const firstElement = arrayNum.shift();
console.log(arrayNum); // Expected output: Array [2, 3]
console.log(firstElement); // Expected output: 1

// 27. push() method adds the specified elements to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count); // output: 4
console.log(animals); // output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals); // output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// 28. unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
const arrayNumb = [1, 2, 3];
console.log(arrayNumb.unshift(4, 5)); // Expected output: 5
console.log(arrayNumb); // Expected output: Array [4, 5, 1, 2, 3]

// 29. reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().
// Syntax: 
// reduce(callbackFn)
// reduce(callbackFn, initialValue)
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// total	(Required). The initialValue, or the previously returned value of the function.
// currentValue	(Required). The value of the current element.
// currentIndex	(Optional). The index of the current element.
// arr	(Optional). The array the current element belongs to.
// initialValue	(Optional). A value to be passed to the function as the initial value.
// Example: 
const initialValue = 0;
const sumWithInitial = [1, 2, 3, 4].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); // 0 + 1 + 2 + 3 + 4
console.log(sumWithInitial); // Expected output: 10

// 30. reverse() method reverses an array in place (by mutating; changing the array) and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
// To reverse the elements in an array without mutating the original array, use toReversed().
console.log([1, 2, 3].reverse()); // Expected output: [3, 2, 1]

// 31. toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.
/* (Not working in nodejs)
console.log([1, 2, 3].toReversed()); // Expected output: [3, 2, 1]
console.log([1, , 3, 4].toReversed()); // Expected output: [4, 3, undefined, 1]
*/

// 32. some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const even = (element) => element % 2 === 0; // Checks whether an element is even
console.log([1, 2, 3, 4, 5].some(even)); // Expected output: true