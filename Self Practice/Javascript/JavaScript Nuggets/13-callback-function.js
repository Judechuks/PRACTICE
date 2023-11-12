// callback functions - used in array methods (forEach), setTimeouts, event listeners, etc.
function makeUppercase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

function handleName(name, cb){
  const fullname = `${name} smith`;
  cb(fullname); // callback function
}
handleName('peter', makeUppercase) // callback function as argument
handleName('peter', reverseString) // callback function as argument
// direct callback function
handleName('susan', (value) => console.log(value));

// event listeners
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('Button Clicked!'))