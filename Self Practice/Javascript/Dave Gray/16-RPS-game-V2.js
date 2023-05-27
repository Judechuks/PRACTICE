// Rock, Paper, Scissors Game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame){
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
      let result = 
      playerOne === computer ? "Tie game!"
      : playerOne === "rock" && computer === "paper" ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
      : playerOne === "paper" && computer === "scissors" ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
      : playerOne === "scissors" && computer === "rock" ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
      : `Player One: ${playerOne}\nComputer: ${computer}\n\nPlayer One Wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. \nMaybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}