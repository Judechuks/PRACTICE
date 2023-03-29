// setInterval = invokes a function repeatedly after a number of milliseconds
//               its an asynchronous function(does not pause the execution of your program)
let count = 0;
let max = 10;
let timer = setInterval(countUp, 1000);  // you can pass argument in here from countUp, if needed

function countUp(){  // parameters if needed can be passed as argument in setInterval
  count += 1;
  console.log(count);
  if (count >= max){
    clearInterval(timer);
  }
}