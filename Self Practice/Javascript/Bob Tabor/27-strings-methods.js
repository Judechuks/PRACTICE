let first = 'Knowledge is power but enthusiasm pulls the switch.';
let second = 'Do or do not. There is no try.';
let third = 'I am, learning, Javascript';
let fourth = '12 > 10 > 8 > 6 > 4 > 2';

// You can call methods on string literals
console.log('Coding is fun'.toUpperCase());

let mySplit = third.split(',');
// Wherever you come across the , comma sign, split it into 'mySplit' variable forming an array
console.log(mySplit);

let numSplit = fourth.split('>');
// Wherever you come across the > greater than sign, split it into 'numSplit' variable forming an array
console.log(numSplit);

let mySlice = first.slice(13, 18);
// In first variable string, pull out the letter starting from index 13 to 18 into 'mySlice' variable
console.log(mySlice);

let mySubstr = first.substr(13, 5); // it is outdated / deprecated
// In first variable string, go to the letter with index 13 and move 5 times pull out the letter into 'mySubstr' variable
console.log(mySubstr);

// let mySubstring = first.substring(13, 18);  // is the same thing as slice(13, 18);

let myEndsWith = second.endsWith('try.'); // returns true or false (its case sensitive).
// checks if the string argument is at the end of the main string
console.log(myEndsWith);

let myStartsWith = second.endsWith('Do'); // returns true or false (its case sensitive).
// checks if the string argument is at the beginning of the main string
console.log(myStartsWith);

let myInclude = second.includes('There'); // returns true or false (its case sensitive).
// checks if the string argument exists in the main string
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3); 
// repeats or duplicate a string the number of times passed in the argument
console.log(myRepeat);

let myTrim = '     Bloated     '; 
// trim() removes every empty space before and after a string
console.log("Before Trim, there are", myTrim.length, "characters");
console.log("After Trim, there are", myTrim.trim().length, "characters");