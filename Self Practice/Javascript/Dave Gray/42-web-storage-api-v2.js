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
// localStorage.setItem("key", value);
// getItem("dataName"): it used to retrieve data from the session or local storage 
// localStorage.getItem("key");

/* As a string */
/*
sessionStorage.setItem("mySessionStore", myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(typeof mySessionData);
console.log(mySessionData);
*/

/* As an object */
localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
// JSON.stringify(myObject): converts the object to string 
const myLocal = JSON.parse(localStorage.getItem("myLocalStorage"));
// JSON.parse(localStorage.getItem("myLocalStorage")): converts the string back to object 
console.log(typeof myLocal);
console.log(myLocal);
// removeItem("myLocalStorage") is used to delete the data from the localStorage 
// localStorage.removeItem("myLocalStorage");
// clear() is used to delete all item from the localStorage 
// localStorage.clear();
// key(index) retrieves the name of a particular data in the localStorage with its index (index is zero based)
const key = localStorage.key(3);
console.log(key);
// length retrieves the total number of data from the localStorage
console.log(localStorage.length);

