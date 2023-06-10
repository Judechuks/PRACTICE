// JavaScript Errors and Error Handling
// Error have two major part: name and message 

const makeError = () => {
  try{
    const name = "Jude";
    name = "Dave";
  } catch(err){
    //console.warn(err); // as a warning in golden yellowish color
    //console.table(err); // in presents the info in tabular form
    console.error(err);
    //console.error(err.name); // error name
    //console.error(err.message); // error message
    //console.error(err.stack); // error name followed by the error message (default)
  }
}
makeError();

const anotherError = () => {
  try{
    throw new customError("This is a custom error!");
    //throw new Error("This is a custom error!");
    // will also work even when the function is not available (Generic error. Error is a keyword)
  } catch(err){
    console.error(err.stack);
  } finally {
    console.log("finally executes with or without error.");
  }
}
anotherError();

// creating a personalized error
function customError(message) {
  this.name = "CustomError";
  this.message = message;
  this.stack = `${this.name}: ${this.message}`;
}

