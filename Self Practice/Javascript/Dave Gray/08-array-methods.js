//====== SELF LEARNING =======
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 33. sort() method sorts the elements of an array in place (by mutating; changing the array) and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// To sort the elements in an array without mutating the original array, use toSorted().
console.log([1, 30, 4, 21, 100000].sort()); // Expected output: [1, 100000, 21, 30, 4]

// 34. toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.
/* (Not working in nodejs)
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
*/

// 35. splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
// Negative index counts back from the end of the array — if start < 0, start + array.length is used.
// Example:
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts at index 1 (without removing/replacing any element)
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May'); // Replaces 1 element at index 4 with 'May'
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1); // removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

// 36. toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.
// toSpliced(start, deleteCount, item1, item2, itemN)
/* (Not working in nodejs)
const someMonths = ["Jan", "Mar", "Apr", "May"]; 
const months2 = someMonths.toSpliced(1, 0, "Feb"); // Inserting an element at index 1
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]
const months3 = months2.toSpliced(2, 2); // Deleting two elements starting from index 2
console.log(months3); // ["Jan", "Feb", "May"]
const months4 = months3.toSpliced(1, 1, "Feb", "Mar"); // Replace 1 element at index 1 with 2 new elements
console.log(months4); // ["Jan", "Feb", "Mar", "May"]
// Original array is not modified
console.log(someMonths); // ["Jan", "Mar", "Apr", "May"]
*/

// 37. toString() method returns a string representing the specified array and its elements.
// The Array object overrides the toString method of Object. The toString method of arrays calls join() internally, which joins the array and returns one string containing each array element separated by commas. If the join method is unavailable or is not a function, Object.prototype.toString is used instead, returning [object Array].
// Example 1:
const array1 = [1, 2, "a", "1a"];
console.log(array1.toString()); // output: "1,2,a,1a"

// Example 2:
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // output: [object Array]
console.log(Array.prototype.toString.call({ join: () => 1 })); // output: 1

// 38. toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").
// 38a. toLocaleString()
// 38b. toLocaleString(locales)
// 38c. toLocaleString(locales, options)
const array = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString); // Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

// 39. values() method returns a new array iterator object that iterates the value of each item in the array.
const letters = ['a', 'b', 'c'];
const iterator = letters.values();
for (const value of iterator) {
  console.log(value);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// 40. with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.
// array.with(index, value)
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]