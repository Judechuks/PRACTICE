// filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// find - returns single instance, returns first match, if no match - undefined.

const people = [
  {name: 'bob', age: 20, position: 'developer'},
  {name: 'peter', age: 25, position: 'designer'},
  {name: 'susy', age: 30, position: 'writer'},
  {name: 'anna', age: 35, position: 'intern'},
  {name: 'john', age: 22, position: 'developer'},
];

// filter 
const youngPeople = people.filter((person)=> {
  //return true // returns all the items in people
  //return false // returns [] empty array
  /*if (person.age < 30) { 
    return person
  }*/
  // Alternatively
  return person.age < 30
});
console.log(youngPeople);

const developers = people.filter((person)=> person.position === 'developer');
console.log(developers); // items are in array

// no match 
const seniorDevs = people.filter((item)=> item.position === 'senior dev');
console.log(seniorDevs); // []

// find 
const peter = people.find((item)=> item.name === 'peter');
console.log(peter); // items are not in array

// no match 
const oldPerson = people.find((item)=> item.age > 35);
console.log(oldPerson); // undefined

// multiple matches - first match
const youngPerson = people.find((person)=> person.age < 35);
console.log(youngPerson); // returns only the first match

/* NOTE:
filters returns the item in array but find does not, so accessing their values will be different
*/
const anna = people.filter((item)=> item.name === 'anna');
console.log(peter.position); // designer
console.log(anna[0].position); // intern