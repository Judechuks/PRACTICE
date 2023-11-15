// checking is random number matches my own

const value = 2;

const promise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 3);
  console.log('Value:', value);
  console.log('Random Number:', randomNum);
  randomNum === value ? resolve("Got a match!") : reject("Wrong number!");
});

promise.then((data) => console.log(data));
promise.catch((error) => console.log(error));