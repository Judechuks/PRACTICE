// faster/easier way to access/unpack variables from arrays/objects

const bob = {
  first: 'bob', 
  last: 'sanders', 
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

//destructuring
const {first, last, city} = bob; // order of arrangement does not matter
console.log(first, last, city); // bob sanders chicago

// if you specify wrong property it returns undefined
const {p1, p2, p3, zip} = bob;
console.log(p1, p2, p3, zip); // undefined undefined undefined undefined

// you give the properties an alias 
const {first: firstName, last: lastName} = bob;
console.log(firstName, lastName); // bob sanders

// alias to an object (the sibling property is destructured)
const {siblings: {sister: favSibling}} = bob;
console.log(favSibling); // jane

function printPerson({first, last, city, siblings: {sister}}) { // object destructured as parameter
  // const {first, last, city, siblings: {sister}} = person // destructed after parameter was received
  console.log(first, last, city, sister); // bob sanders chicago jane
}
printPerson(bob);