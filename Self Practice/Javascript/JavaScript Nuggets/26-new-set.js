// Set object - stores a collection of unique values of any type

// new Set()
//add(value), delete(value), clear(), has(value)

// iterators - such as the ones listed below can be used on set (see the next file)
// keys(), values(), entries(), forEach()
const unique = new Set();
unique.add('first');
unique.add('first');
unique.add('second');
unique.add('hi');
const deleted = unique.delete('hi'); // delete the item, and returns true/false if it asigned to a variable
console.log(deleted);
unique.add(3);
console.log(unique);
unique.clear(); // delete all the data
console.log(unique);
console.log(unique.has('first')); // returns true or false