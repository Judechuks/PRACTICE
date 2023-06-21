const myPromise = new Promise((resolve, reject) => {
  // const error = true;
  const error = false;
  if(!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

myPromise.then(value => {
  console.log(value); 
})
.catch(err => {
  console.error(err);
})

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("myNextPromise resolved!");
  }, 3000);
});

// this gets called last because of the setTimout function delay of 3 seconds
myNextPromise.then(value => {
  console.log(value);
});

// this gets called first even though it appeared last, because it's a promise (asynchronous) it doesn't need to wait for the promise above
myPromise.then(value => {
  console.log(value);
});