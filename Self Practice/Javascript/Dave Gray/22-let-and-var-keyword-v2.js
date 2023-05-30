// Scope of var, let, and const

// global scope 
var x = 1;  // function scoped
let y = 2;  // block scoped
const z = 3;  // block scoped

console.log(`global scope x: ${x}`);
console.log(`global scope y: ${y}`);
console.log(`global scope z: ${z}`);

function myFunction(){
  var x = 10;
  const z = 5;
  console.log(`function scope x: ${x}`);
  console.log(`function scope y: ${y}`);  // gets the global scope value
  console.log(`function scope z: ${z}`);

  {
    var x = 11;
    const z = 6;
    console.log(`function block scope x: ${x}`);
    console.log(`function block scope y: ${y}`);  // gets the global scope value
    console.log(`function block scope z: ${z}`);
  }
  // now repeating the above code below the function block code
  console.log(`below block within function x: ${x}`); // x = 11 not 10 bcos 'var' is 'function scoped' and not 'block scoped' whereas 'let' and 'const' are 'block scoped'
  // instead of 'var' use 'let' in the block
  console.log(`below block within function y: ${y}`);  // gets the global scope value
  console.log(`below block within function z: ${z}`);
}
myFunction();