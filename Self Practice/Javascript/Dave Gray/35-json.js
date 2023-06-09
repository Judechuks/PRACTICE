// JSON: JavaScript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages not just in JavaScript.
*/
const myObj = {
  name: "Jude",
  hobbies: ["eat", "sleep", "code"],
  hello: function(){
    console.log("Hello!");
  }
};
console.log(myObj); // shows object details
console.log(myObj.name); 
myObj.hello(); 
console.log(typeof myObj); 

const sendJSON = JSON.stringify(myObj)  //JSON built-in static object
// converts the object to a string so it can be sent
console.log(sendJSON);
// it outputs the properties and values in quote, without including methods, because methods are not sent
console.log(sendJSON.name); // output: undefined
// because it is now a JSON formatted string and so the name property cannot be accessed.

// We can use JSON.parse static ethod to convert the JSON formatted string back to an object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);