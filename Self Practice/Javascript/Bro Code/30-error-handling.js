// error = object with a description of something went wrong, 
// Errors can happen for the following reasons: can't open a file, lose connection, user types incorrect input, TypeError
// throw = executes a user-defined error
// sometimes things will go wrong and they don't cause error then you use throw
// finally = will always execute, whether there is error or Notification. It is mostly used for code clean up, e.g. when you open a file and something goes wrong, you still would want to close the file, this is one of the usefulness of finally

try{
  let x = window.prompt("Enter a Number:");
  let value = Number(x);

  if(isNaN(x)) throw `Wrong! ${x} isn't a number!`;
  if(x == "") throw `Opps! ${x} you didn't enter a number!`;

  console.log(`Correct! ${value} is a number`);
}
catch(error){
  console.log(error);
}
finally{
  console.log("This always executes - code cleaned up");
}