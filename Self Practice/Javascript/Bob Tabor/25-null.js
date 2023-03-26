// Null: represents a variable that points to nothing but an object reference was expected in that case
// Undefined means a value was expected of a varibale but no value is given to the variable.
// Null is not the same as zero or undefined or "" empty string.
// Though Null is a bit similar to Undefined, but 'null' has to do with reference to an object not found.

let pattern = /k..da/;
let sentence = "This is just a practice.";
let result = sentence.match(pattern);
console.log(typeof result);  // object
console.log(result);  // null
//Null is return because it expected the object to have the pattern 'k..da' but it couldn't get it

if (result === null){  // returns true, so first line is executed
  console.log('No match was found');
} else {
  console.log(sentence.replace(pattern, 'just'));
}

// With Understanding from '24-truthy-falsy.js' file
if (result){  // returns false, so second line is executed
  console.log(sentence.replace(pattern, 'just'));
} else {
  console.log('No match was found');
}
