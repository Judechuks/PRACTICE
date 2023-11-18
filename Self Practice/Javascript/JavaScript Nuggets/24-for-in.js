// for-in loop - iterating over object properties
// not adviced to be used in arrays, especialy if the order is important
// on arrays, use 'for-of' loop instead

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

for (const propertyName in person) {
  console.log(`${propertyName}: ${person[propertyName]}`);
}