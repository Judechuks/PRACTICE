// Rock paper scissors game using switch statement

let playerOne = "rock";
let computer = "scissors";

switch (playerOne) {
  case computer:
    console.log("tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("Computer Wins!");
    } else {
      console.log("PlayerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("Computer Wins!");
    } else {
      console.log("PlayerOne wins!");
    }
  default:
    if (computer === "rock") {
      console.log("Computer Wins!");
    } else {
      console.log("PlayerOne wins!");
    }
  break;
}