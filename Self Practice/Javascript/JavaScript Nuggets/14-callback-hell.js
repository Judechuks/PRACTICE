// Callback Hell 

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');
function handleName(name, cb){
  const fullname = `${name} smith`;
  cb(fullname); // callback function
}

// event listeners
btn.addEventListener('click', () => {
  console.log('Button Clicked!')
})