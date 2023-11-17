// Width/Height - window, any element
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any element (the dimension of an element)

console.log("Browser's Height", window.innerHeight);
console.log("Browser's Width", window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
btn.addEventListener('click', () => {
  const dimensions = box.getBoundingClientRect();
  console.log(dimensions);
});