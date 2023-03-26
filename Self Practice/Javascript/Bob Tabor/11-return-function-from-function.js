// function one
function one(){
  return "Hey, I'm function One";
}

// function two
let two = one;
//NOTE: not calling the function one() rather associating it to two, which automatically make it to become a function

console.log(two());
// function two is now a reference to function one

function three(){
  return function(){
    console.log("Hey, I'm the returned function");
  }
  // function three is a function returning another function
}

let myFunction = three();
//myFunction has now called function three, which returns the inner function
//so myFunction now have reference to the inner function and not reference to function three, as seen in function two
myFunction();
//so myFunction is now invoking the inner function which returns "Hey, I'm the returned function"

//Alternatively we can use
// console.log(three()()); to replace line 20