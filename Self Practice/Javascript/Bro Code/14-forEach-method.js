// array.forEach() = executes a provided callback function once for each array element

let students = ["jude", "james", "lilian"];

function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1); 
  // selects the first element of every array
  // + element.substring(1); includes the letters 'ude', 'ames' 'ilian' to 'J', 'J' 'L' respectively
}
function print(element){
  console.log(element);
}

students.forEach(capitalize);
students.forEach(print);