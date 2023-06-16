// Web storage API (is Not part of the Dom) - it refers to the Window API avaliable to JS via the global variable (window)
// We do not have to type window. (It is implied)

// sessionStorage: temporary storage when the browser's tab is still open
// localStorage: permanent storage unless the localStorage is cleared
const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  }
};

// setItem("dataName", dataInfo): it used to store data into the session or local storage 
// getItem("dataName"): it used to retrieve data from the session or local storage 

/* As a string */
sessionStorage.setItem("mySessionStore", myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(typeof mySessionData);
console.log(mySessionData);

/* As an object */
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
// JSON.stringify(myObject): converts the object to string 
const mySession = JSON.parse(sessionStorage.getItem("mySessionStorage"));
// JSON.parse(sessionStorage.getItem("mySessionStorage")): converts the string back to object 
console.log(typeof mySession);
console.log(mySession);