let names = [ 'Jude', 'Eddie', 'Alex', 'Michael' ];
let others = [ 'David', 'Sammy', 'Gary', 'Mark' ];
let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];

// concat(): merges or combine two arrays together
var combine = lost.concat(fibonacci);
console.log(combine);

// join(): takes an argument that is used to merge elements in an array.
console.log(fibonacci.join('~'));

// push(): used to add an element to the end of an array
// console.log(lost.push(89));  // this shows the length of the array
console.log(lost.push(89));
console.log(lost);

// unshift(): used to add an element to the beginning of an array
// console.log(lost.unshift(1, 2, 3, 4)); // this shows the length of the array
lost.unshift(1, 2, 3, 4);
console.log(lost);

// pop(): used to remove an element from the end of an array
// console.log(lost.pop());  // this shows the length of the array
lost.pop(); 
console.log(lost);

// shift(): used to remove an element from the beginning of an array
// console.log(lost.shift());  // this shows the length of the array
lost.shift();
console.log(lost);

// reverse(): reverses the order or arrangement of elements in an array
console.log(names);
console.log(names.reverse());

// sort(): arrangement of elements on an array in ascending order
console.log(names.sort());

// indexOf(): to locate the position of an element in an array
console.log(others.indexOf('Mark'));

// lastIndexOf(): to locate the last position of an element in an array(in index that is starting from 0)
console.log(combine);
console.log(combine.lastIndexOf(1));

// filter(condition): is used to return value when a particular condition is met.
var filtered = combine.filter((x) => { if (x <= 15) return x; });
console.log(filtered);

// forEach(function): is used to loop through each member of an array and return the value
names.forEach((name) => console.log(`Howdy ${name}`) );

// every(condition): is used to loop through each member of an array to check if they meet a certain condition and returns true if all the members meets the condition and false otherwise
console.log(filtered.every((num) => num < 10 ));  // false
console.log(filtered.every((num) => num < 16 ));  // true

// some(condition): is used to loop through each member of an array to check if they meet a certain condition and returns true if at least one member meets the condition and false when none
console.log(filtered.some((num) => num > 16 ));  // false
console.log(filtered.some((num) => num < 10 ));  // true
