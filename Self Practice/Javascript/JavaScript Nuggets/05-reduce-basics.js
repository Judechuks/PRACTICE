// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations (accumulator)
// 2nd parameter ('curr') - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "the boss", salary: 400 },
  { name: "anna", age: 35, position: "intern", salary: 10 },
];

const dailyTotal = staff.reduce((total, person) => {
  // callback function
  total += person.salary;
  return total;
}, 0);
console.log(dailyTotal); // 810
// the initial value (in this case, 0) needs to be included, it is added to all your values
// in reduce, you always have to return your first parameter which in this case is total
/*
  initail value = 0
  1st iteration, it perform 0 + 100 = 100
  2nd iteration, it perform 100 + 300 = 400
  3rd iteration, it perform 400 + 400 = 800
  4th iteration, it perform 800 + 10 = 810
*/
