// callback = is a function passed as an argument to another function
// the file 13-callback-v2.js example explains it better

function sum(x, y){
  return x + y;
}
let total = sum(3, 5);

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myOutput").innerHTML = output;
}

displayConsole(total);
displayDOM(total);