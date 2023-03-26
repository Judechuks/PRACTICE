// function expression = function without a name (anonymous function), helps to avoid polluting the global scope with names.
//                       write it, then forget about it.

// let greeting = function (){
//   console.log('Hello!');
// }
// greeting();

let counter = 0;
document.getElementById("increaseBtn").onclick = function(){
  counter += 1;
  document.getElementById("myLabel").innerHTML = counter;
}
document.getElementById("decreaseBtn").onclick = function(){
  counter -= 1;
  document.getElementById("myLabel").innerHTML = counter;
}