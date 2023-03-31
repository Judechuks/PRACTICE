// console.time = used to start a timer you can use to track how long an operation takes. Give each timer a unique name.

// start
console.time("Response time"); // Response time is the unique name
// alert("Click the Ok button"); // if you are using a broswer's console
for(let i = 0; i <= 30; i++){
  console.log(i);
}
// end
console.timeEnd("Response time"); // same response time for the timer you want to end
// for asynchronous code, timeEnd doesn't wait for its complete execution (e.g. setTimeout)

// start
console.time("Finish time"); // Finish time is the unique name
  setTimeout(() => console.log("Wait for me!"), 4000); 
// end
console.timeEnd("Finish time");