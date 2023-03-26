let grades = [100, 50, 90, 60, 80, 70];

function descendingOrder(x, y){
  return y - x;
}
function ascendingOrder(x, y){
  return x - y;
}

// let AscendGrade = grades.sort(ascendingOrder); // comment to see descend
let DescendGrade = grades.sort(descendingOrder);  // comment to see ascend

console.log("Grades:", grades);
// console.log("Grades in ascending order:", AscendGrade); // comment to see descending order
console.log("Grades in descending order:", DescendGrade);  // comment to see ascending order