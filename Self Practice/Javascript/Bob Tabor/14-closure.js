// Closure simply means passing a data to a function, marrying the data to the function in that they become one and work together. e.g.
function sayHello(name) {
  return function() {
    console.log('Howdy ' + name);
  }
}

let jude = sayHello('Jude');
let bob = sayHello('Bob');
let jay = sayHello('Jay');

jude();
bob();
jay();