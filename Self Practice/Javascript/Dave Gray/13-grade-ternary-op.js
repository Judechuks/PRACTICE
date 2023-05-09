// Grade Score using ternary operator

let testScore = 49;
let grade = testScore > 89 ? "A"
 : testScore > 79 ? "B"
 : testScore > 69 ? "C"
 : testScore > 59 ? "D"
 : testScore > 49 ? "E"
 : "F";
console.log(`Your test grade is ${grade}`);