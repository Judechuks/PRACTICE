// Rosck Paper Scissors game using ternary operator

let playerOne = "paper";
let computer = "rock";
let result = 
playerOne === computer ? "Tie game!"
 : playerOne === "rock" && computer === "paper" ? "Computer Wins!"
 : playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
 : playerOne === "scissors" && computer === "rock" ? "Computer Wins!"
 : "playerOne Wins!";
console.log(result);