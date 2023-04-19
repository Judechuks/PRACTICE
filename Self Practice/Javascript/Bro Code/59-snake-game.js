const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBg = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX = 0;
let foodY = 0;
let score = 0;
let snake = [
  {x:unitSize * 4, y:0},  // x-cordinate, y-cordinate
  {x:unitSize * 3, y:0},  // x-cordinate, y-cordinate
  {x:unitSize * 2, y:0},  // x-cordinate, y-cordinate
  {x:unitSize, y:0},  // x-cordinate, y-cordinate
  {x:0, y:0}  // x-cordinate, y-cordinate
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();
}
function nextTick(){
  if(running){
    setTimeout(()=> {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 75);
  }
  else{
    displayGameOver();
  }
}
function clearBoard(){
  context.fillStyle = boardBg;
  context.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood(){ // random place to play food
  function randomFood(min, max){
    const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize; 
    // random number that will not exceed the width of the gameboard (number divisible by the unitsize = 25, and would place the food within the board)
    return randNum;
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
}
function drawFood(){ // paint food food within the board
  context.fillStyle = foodColor;
  context.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake(){ 
  const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);
  // if food is eaten
  if (snake[0].x == foodX && snake[0].y == foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}
function drawSnake(){ 
  context.fillStyle = snakeColor;
  context.strokeStyle = snakeBorder;
  snake.forEach(snakePart => {
    context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
}
function changeDirection(event){
  const keyPressed = event.keyCode;  //keycode gets the unique code for a key pressed
  // left = 37, up = 38, right = 39, down = 40, 
  const LEFT = 37; 
  const UP = 38; 
  const RIGHT = 39; 
  const DOWN = 40;

  const goingUp = (yVelocity == -unitSize);
  const goingDown = (yVelocity == unitSize);
  const goingRight = (xVelocity == unitSize);
  const goingLeft = (xVelocity == -unitSize);

  switch(true){
    case(keyPressed == LEFT && !goingRight): 
      xVelocity = -unitSize;
      yVelocity = 0;
    break;
    case(keyPressed == UP && !goingDown): 
      xVelocity = 0;
      yVelocity = -unitSize;
    break;
    case(keyPressed == RIGHT && !goingLeft): 
      xVelocity = unitSize;
      yVelocity = 0;
    break;
    case(keyPressed == DOWN && !goingUp): 
      xVelocity = 0;
      yVelocity = unitSize;
    break;
  }
}
function checkGameOver(){
  switch(true){
    case (snake[0].x < 0): // if goes outisde the game board on the LHS
      running = false; // then stop game
    break;
    case (snake[0].x >= gameWidth): // if goes outisde the game board on the RHS
      running = false;  
    break;
    case (snake[0].y < 0): // if goes outisde the game board from the Top
      running = false; // then stop game
    break;
    case (snake[0].y >= gameHeight): // if goes outisde the game board from the Bottom
      running = false; // then stop game
    break;
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      running = false;
    }
    
  }
}
function displayGameOver(){
  context.font = "3.5rem MV Boli";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2); // place to center
  running = false;
}
function resetGame(){
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    {x:unitSize * 4, y:0},  // x-cordinate, y-cordinate
    {x:unitSize * 3, y:0},  // x-cordinate, y-cordinate
    {x:unitSize * 2, y:0},  // x-cordinate, y-cordinate
    {x:unitSize, y:0},  // x-cordinate, y-cordinate
    {x:0, y:0}  // x-cordinate, y-cordinate
  ];
  gameStart();
}
