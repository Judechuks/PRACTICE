// Rock, Paper, Scissors Game: Refractored with Array
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame){
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result = 
        playerOne === computer ? "Tie game!"
        : playerOne === "rock" && computer === "paper" ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
        : playerOne === "paper" && computer === "scissors" ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
        : playerOne === "scissors" && computer === "rock" ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
        : `Player One: ${playerOne}\nComputer: ${computer}\n\nPlayer One Wins!`;
        alert(result);

        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper, or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind. \nMaybe next time.");
      break;
    } 
  }
} else {
  alert("Ok, maybe next time.");
}