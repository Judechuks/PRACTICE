// onload, onclick, onsubmit, onmouseover, onkeydown etc
// onchange = e.g after typing into a textbox and you remove your mouse from the textbox
const btn = document.getElementById("btn");
btn.onclick = popup;  // call back (not function invocation)

function popup(){
  alert("Wecome");
}

const myDiv = document.getElementById("myDiv");
myDiv.onmouseover = changeBg;
function changeBg(){
  myDiv.style.backgroundColor = "red"; // and remains that color
}
// change back to the original color
myDiv.onmouseout = changeBgBack;
function changeBgBack(){
  myDiv.style.backgroundColor = "#8df"; // and remains that color
}

// onmousedown = when you press down the mouse (click)
myDiv.onmousedown = mouseDown;
// onmouseup = when you release the mouse after an onmousedown (i.e after )click
myDiv.onmouseup = mouseUp;

function mouseDown(){
  myDiv.style.backgroundColor = "green";
}
function mouseUp(){
  myDiv.style.backgroundColor = "yellow";
}