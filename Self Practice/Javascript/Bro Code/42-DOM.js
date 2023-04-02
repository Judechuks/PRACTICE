// DOM = Document Object Model (API)
//       An interface for changing the content of a page

// console.log(document);  // displays everything in the DOM
console.dir(document);  // list all of the properties of the DOM
console.log(document.title); //title inside the head tag
console.log(document.URL);  // address of the file on the local machine or server 
document.title = "My title changed";  
document.location = "https://www.google.com";  
document.body.style.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Hello World!";