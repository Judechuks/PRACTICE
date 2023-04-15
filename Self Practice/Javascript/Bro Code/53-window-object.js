// Window = an interface used to talk to the web browser
//          the DOM is a property of the window

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.scrollX); // px away from the left scroll
// console.log(window.scrollY); // px away from the top scroll
// console.log(window.location.href); 
// window.location.href = "https://google.com"; // takes me to the url specified
// console.log(window.location.hostname); 
// console.log(window.location.pathname); 

const myButton = document.getElementById("myButton");
const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");
myButton.addEventListener("click", () => window.open()); // opens a blank page
// myButton.addEventListener("click", () => window.open("https://google.com")); // opens google page
myButton1.addEventListener("click", () => window.close()); // closes the current page
myButton2.addEventListener("click", () => window.print()); // prints the page

// window.alert("Hello!");  // Pops up a Hello message
// window.confirm("Press Ok to continue!");  // Pops up Message with OK button to continue

// let age = window.prompt("Enter your age");  // requests for user input