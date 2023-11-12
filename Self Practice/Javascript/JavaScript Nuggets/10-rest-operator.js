// Rest Operator (...)
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, second, ...retsOfTheItem] = fruits
console.log(first, second, retsOfTheItem); // apple orange [ 'lemon', 'banana' ]
// in the case retsOfTheItem gets the remaining items from the fruits array curtesy of the rest operator...

// objects
const person = {name: 'john', lastName: 'smith', job: 'developer'};
const {job, ...rest} = person;
console.log(job, rest); // developer { name: 'john', lastName: 'smith' }
/* NOTE: the rest operator should always be the last
  const {...rest, job} = person; // this is wrong
*/
// functions
/* NOTE: rest operator is used when you declare a function
  spread operator is used when you invoke a function
*/
const getAverage = (name, ...scores) => { // rest operator
  console.log(name); // john
  console.log(scores); // [value, value2, value3, etc]
  const average = scores.reduce((total, item) => {
    return total += item
  }, 0) / scores.length
  console.log(average);
}
// getAverage(person.name, 80, 80, 90, 100)
const testScore = [80, 80, 90, 100]
getAverage(person.name, ...testScore) // spread operator