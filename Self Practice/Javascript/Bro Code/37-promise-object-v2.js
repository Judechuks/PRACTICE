// don't necessarily need to have 'reject' as an argument
// resolve don't necessarily need to return a value

// Example 1
const promise = new Promise(resolve => {
  setTimeout(resolve, 5000);  // a promise to call me 5 seconds later
});

promise.then(() => console.log("Promise with no arg: Thanks for waiting!"));

// Example 2  // wait is having a parameter of 'time'
const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);  // a promise to call me 5 seconds later
});

wait(3000).then(() => console.log("Promise with arg: Thanks for waiting!"));