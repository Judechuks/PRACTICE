const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", start);

let x = 0, y = 0;
/*
function move(event){
  switch(event.key){
    case "ArrowDown":
      const downTimer = setInterval(moveDown, 1000);
      function moveDown(){
        y += 5;
        myDiv.style.top = y + "px";
      }
      break;
    case "ArrowUp":
      const topTimer = setInterval(moveTop, 1000);
      function moveTop(){
        y -= 5;
        myDiv.style.top = y + "px";
      }
      break;
    case "ArrowLeft":
      const leftTimer = setInterval(moveLeft, 1000);
      function moveLeft(){
        x -= 5;
        myDiv.style.left = x + "px";
      }
      break;
    case "ArrowRight":
      const rightTimer = setInterval(moveRight, 1000);
      function moveRight(){
        x += 5;
        myDiv.style.left = x + "px";
      }
      break;
  }
}
*/
/*
function start(event){
  if (event.key == "ArrowUp"){
    const topTimer = setInterval(moveTop, 1000);
    function moveTop(){
      y -= 5;
      myDiv.style.top = y + "px";
    }
  } 
  else if (event.key == "ArrowDown"){
    const downTimer = setInterval(moveDown, 1000);
    function moveDown(){
      y += 5;
      myDiv.style.top = y + "px";
    }
  }
  else if (event.key == "ArrowLeft"){
    const leftTimer = setInterval(moveLeft, 1000);
    function moveLeft(){
      x -= 5;
      myDiv.style.left = x + "px";
    }
  } 
  else if (event.key == "ArrowRight"){
    const rightTimer = setInterval(moveRight, 1000);
    function moveRight(){
      x += 5;
      myDiv.style.left = x + "px";
    }
  }
}
*/