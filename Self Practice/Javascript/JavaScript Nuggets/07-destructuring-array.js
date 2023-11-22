// faster/easier way to access/unpack variables from arrays/objects

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

//destructuring
const [john, peter, bob] = friends; // order of arrangement matters
console.log(john, peter, bob); // john peter bob

// you can use different variables
const [mentor, bestie, pal, anna] = friends;
console.log(mentor, bestie, pal, anna); // john peter bob anna

// accessing some persons while skipping some, you leave empty space
const [frnd1, , frnd3, , frnd5] = friends;
console.log(frnd1, frnd3, frnd5); // john bob kelly

// more than the number of item returns undefined
const [f1, , f3, , f5, f6, f7] = friends;
console.log(f1, f3, f5, f6, f7); // john bob kelly undefined undefined

let first = "bob";
let second = "john";

// swapping values
[second, first] = [first, second];
console.log(first, second); // john bob
