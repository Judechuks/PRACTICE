// callback = is a function passed as an argument to another function
//            Ensures that a function is not going to run before a task is completed.
//            Helps us to develop asychronous code (When one function has to wait for another function) Which can help us to avoid errors and potential problems.
//            Example: Wait for a file to load.

sum(3, 5, displayConsole, displayDOM);

function sum(x, y, callBack, callBackAgain){
  result = x + y;
  callBack(result);
  callBackAgain(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myOutput").innerHTML = output;
}