// Object.keys(obj) - iterates over the object to get its keys/properties into an array
// Object.values(obj) - iterates over the object to get its values into an array
// Object.entries(obj) - iterates over the object to get its keys and values into an array of array

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

console.log(Object.keys(person)); // ['name', 'age', 'status']
console.log(Object.values(person)); // ['john', 25, 'student']
const entries = Object.entries(person)
console.log(entries); // [['name', 'john'], ['age', 25], ['status','student']]

// using map method on the entries
const result = entries.map((item) => {
  const [first, second] = item; // array destructuring
  //where 'first' gets all the properties and 'second' get all the values
  //console.log(first, second);
  return first; // all the properties
});
console.log(result);

// using 'for of' loop on the entries
for (const item of entries) {
  const [first, second] = item;
  console.log(first, second); // all the properties & values
}

// 'for of' refactored
for (const [first, second] of entries) {
  console.log(first, second); // all the properties & values
}