let counter = 0;
function timeout(){
  setTimeout(function() {
    console.log("Hi ", counter++);
    timeout();
  }, 2000);
}

timeout();
//Press ctrl + c on the keyboard to stop the execution