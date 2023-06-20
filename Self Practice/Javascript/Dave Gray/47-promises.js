//Promises: are designed to get rid of callbacks.
//Promises have 3 states: i. pending ii. fulfilled iii. rejected
//Promises produces asynchronous code, unlike the normal synchronous code Javascript is known for.

const myPromise = new Promise((resolve, reject) => {
  // const error = false;
  const error = true;
  if(!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});
console.log(typeof myPromise); //object
console.log(myPromise); // doesn't really return the value but the full info (value & state) of the promise
// to return the value of the promise then we use chaining
// the chaining of 'then' is referred to as 'Thenables'
myPromise.then(value => {
  console.log(value); //output: Yes! resolved the promise!
  return value + " as expected.";
})
.then(newValue => {
  console.log(newValue); //output: Yes! resolved the promise! as expected.
})
// but when the else part is executed 'reject', it produces error, which should be caught with a 'catch'.
.catch(err => {
  console.error(err);
})