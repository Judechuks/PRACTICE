// destructuring means unpacking the array members or properties of an object into a variable, another object or another array as the case may be. e.g.
let a, b, c, d, e;

let names = ['David', 'Eddie', 'Alex', 'michael', 'Sammy'];

[a, b, c, d, e] = names;

// with variables
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("");

let others;
// with variables and array
[a, b, ... others] = names;

console.log(a);
console.log(b);
console.log(others);
console.log("");

// with objects
let year, model;
({year, model} = {
  make: 'BMW',
  model: '745li',
  year: 2010,
  value: 5000
});

console.log(model);
console.log(year);
console.log("Year is a datatype of:", typeof year);