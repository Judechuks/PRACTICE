// setTimeout() = invokes a function after a number of milliseconds
//                its asynchronous function (doesn't pause execution)

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000, item, price);  
let timer3 = setTimeout(thirdMessage, 9000); 
setTimeout(stop, 8000); // stops thirdMessage from executing
// 'item and price' arguments of the function 'secondMessage' were passed in the setTimeout
// you don't invoke secondMessage() in the setTimeout

function firstMessage(){
  console.log("Welcome!");
}
function secondMessage(item, price){
  console.log(`Buy this ${item} for $${price}`);
}
function thirdMessage(){
  console.log("Crypto is great!");
  // this won't be seen because clearTimeout will stop it from executing
}
function stop(){
  clearTimeout(timer3) // you need a handler from the setTimeout in this case 'timer1'
}