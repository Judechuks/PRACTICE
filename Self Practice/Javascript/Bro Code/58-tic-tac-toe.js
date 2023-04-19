const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
  [0, 1, 2], //all have to be same for row 1 win condition
  [3, 4, 5], //all have to be same for row 2 win condition
  [6, 7, 8], //all have to be same for row 3 win condition
  [0, 3, 6], //all have to be same for column 1 win condition
  [1, 4, 7], //all have to be same for column 2 win condition
  [2, 5, 8], //all have to be same for column 3 win condition
  [0, 4, 8], //for diagonal top left - bottom right win condition
  [2, 4, 6]  //for diagonal top right - bottom left win condition
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}
function cellClicked(){
  const cellIndex = this.getAttribute("cellIndex");

  if(options[cellIndex] != "" || !running){
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}
function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function changePlayer(){
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }
  if(roundWon){
    statusText.textContent = `${currentPlayer} Wins!`;
    statusText.style.color = "green";
    running = false;
  }
  else if(!options.includes("")){
    statusText.textContent = `${currentPlayer} Draw!`;
    statusText.style.color = "blue";
    running = false;
  } else {
    changePlayer();
  }
}
function restartGame(){
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
  statusText.style.color = "inherit";
}