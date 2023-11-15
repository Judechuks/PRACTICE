// Promises - A promise is an object that returns a value which we intend to receive later but not instantly, the purpose of using promises is to avoid callback hell, and also allows to write async code in a synchronous manner.
// when creating a promise you use a constructor pass in a callback function with 2 more arguments(resolve and reject)

// async await
// consume/use promises
// Promises can be in 3 state (function): Pending(default), Rejected, Fulfilled

// to get the values, for a 'resolve' use '.then', for 'reject' use '.catch'

const promise = new Promise((resolve, reject) => {
  resolve("data to be received");
  // reject("couldn't be resolved");
});

promise.then((data) => console.log(data));
// promise.catch((error) => console.log(error));