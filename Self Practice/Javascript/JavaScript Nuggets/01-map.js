const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer'
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer'
  },
  {
    name: 'susy',
    age: 30,
    position: 'content writer'
  },
  {
    name: 'john',
    age: 26,
    position: 'intern'
  },
];

/* When map is used, it returns a new array

*/
const nothing = people.map(() => {}) // if nothing is done here, it returns undefined for all the value
console.log(nothing); // [ undefined, undefined, undefined, undefined ]

const persons = people.map((person) => {
  console.log(person); // prints all the objects in people
  return 'Hey!'
  // return person
})
console.log(persons); // [ Hey!, Hey!, Hey!, Hey! ]

const ages = people.map(person => person.age * 2)
console.log(ages); // [ 40, 50, 50, 62 ]

const getAges = (person) => person.age * 2;
const allAge = people.map(getAges);
console.log(allAge); // [ 40, 50, 50, 62 ]

const newPeople = people.map(item => {
  return { // returning an object
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 50
  }
})
console.log(newPeople);

/*
  // To add the result to the DOM
  const names = people.map((person) => `<h2>${person.name}</h2>`) // commas from the array is included
  const result = document.querySelector("#result")
  result.innerHTML = names.join('') // removes those commas
*/ 