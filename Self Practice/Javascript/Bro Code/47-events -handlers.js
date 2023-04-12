// .addEventListener(event, function, useCapture)
// You can add many event handlers to one Element.
// Even the same event that invokes different functions

const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("click", changeRed);

function changeRed(){
  this.style.backgroundColor = "red";
  alert(`You selected ${this.id}`);
}

//The 'useCapture' parameter is useful when an item is on another item, the useCapture is then used to make either the one overlay(ontop i.e true) or the one underneath to listen for the event
// working on the outerDiv
outerDiv.addEventListener("click", changeRed, true);
// here for the outerDiv set to true, then the outerDiv's event will be handled first 