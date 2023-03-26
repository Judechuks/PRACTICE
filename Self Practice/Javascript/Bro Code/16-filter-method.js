// array.filter() = creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 22];

function checkAge(age){
  return age >= 18;
}

let adults = ages.filter(checkAge);

function print(age){
  console.log(age);
}

adults.forEach(print);