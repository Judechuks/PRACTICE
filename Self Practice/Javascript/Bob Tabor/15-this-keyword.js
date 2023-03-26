function clickHandler(arg){
  console.log(arg); //prints this keyword passed in the button element as an argument(button reference).
  console.log(arg.innerHTML); //prints the button's inner text.
  console.log(this); //refers to the global object (window) and its properties.
}