const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

// changing colors using setTimeout
//IN SEQUENCE

// event listeners
btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red', 'Hey!')
  .then((data) => addColor(3000, '.second', 'green', data)
    .then((data) => {
      addColor(2000, '.third', 'blue');
      console.log(data);
    })
    .then().catch((err) => console.log(err))
    .catch((err) => console.log(err)))
  .catch((err) => console.log(err));
  // addColor(2000, '.third', 'blue').then().catch((err) => {console.log(err);});
  first.style.color = 'initial';
  second.style.color = 'initial';
  third.style.color = 'initial';
});

function addColor(time, selector, color, data){
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
  if (element) {
    setTimeout(() => {
      element.style.color = color;
      resolve(data) // you need to resolve it, else it will be pending with no result for the next promise
    }, time)
  } else {
    reject(`There is no such element: "${selector}"`)
  }
  });
}