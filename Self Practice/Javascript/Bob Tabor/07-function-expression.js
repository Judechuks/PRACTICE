// function declaration: has a name with which it can be called
function declaration(){
  console.log('Example of function Declaration');
}
declaration();

// function expression: no name, just used for immediate execution, usually used in built-in functions such as (setTimout, setInterval etc)
(function (){
  console.log('Example of function Expression');
})();
// the second () makes the immediate function possible which is known as IIFE = Immediately Invoked Function Expression