// spread operator = ...
// is used to decompose an array individually

const arrayA = ["A", "B", "C"];
const arrayB = ["E", "D", "F"];

const newArray = [arrayA, arrayB]; // this forms a nexted array
console.log(newArray); // output: [['A', 'B', 'C'], ['D', 'E', 'F']]

const spreadArray = [...arrayA, ...arrayB]; // this splits the items individually into an array
console.log(spreadArray); // output: ['A', 'B', 'C', 'D', 'E', 'F']
