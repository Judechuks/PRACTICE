// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want 
// Great for any general utility values and functions
// Helps to make your code more reusable and maintainable
// Think of modules as separate chapters of a book
// Working with modules, in your html file, in the script tag, add an attribute (type="module")

// use 'import', 'from' keyword and absolute or relative file path to import the variables and functions
import {PI, myCircumference, myArea} from "./40-math_util.js";

let circumference = myCircumference(10);
console.log("Circumference:", circumference);

let area = myArea(10);
console.log("Area: ", area);