// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks: are functions that are passed to other functions as parameter
function firstFunction(parameters, callbackFunction){
  // do stuffs with the parameters
  callbackFunction();
}
//A.K.A 'callback hell'.
firstFunction(parameters, function() {
  // do stuffs with the parameters
  secondFunction(parameters, function(){
    // do stuffs with the parameters
    thirdFunction(parameters, function(){
      // do stuffs with the parameters
      // and the list goes on
    });
  });
});

//Promises: are designed to get rid of callbacks.