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

// 29. 