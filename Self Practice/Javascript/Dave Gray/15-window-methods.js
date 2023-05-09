//Window Objects methods

// 1. alert() = pop up a message with an okay button to exit message. No return value
alert("Hello, Welcome!");

// 2. confirm() = pop up a message to user with a return value of true or false. Ok = true, Cancel = false
let exitMsg = confirm("Do you want to exit Page? \nOk === True \nCancel === False");
console.log(exitMsg);  // true or false depending on the button clicked

// 3. prompt() = accepts users' input with a message. The return values are: a string of whatever the user typed, "" (length is 0) if nothing is typed and null if cancel button is clicked.
let myName = prompt("Enter your name");
console.log(myName);

// nullish cholescheme ??: means if myName is null then "Message"
console.log(myName ?? "You have to enter your name.");

if(myName){
  console.log(myName);
} else {
  console.log("You didn't enter your name.");
}