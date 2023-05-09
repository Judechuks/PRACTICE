// Conditional: Ternary Operator

// Syntax: 
// condition ? if-true : if-false;

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today."; 
// if soup constains a text then respond "yes" else "no soup"
console.log(response);

// chaining ternary operators
let isCustomerBanned = true;
let soupAccess = isCustomerBanned
 ? "Sorry, no soup for you!"
 : soup 
 ? `Yes, we have ${soup}`
 : `Sorry, no ${soup} today`;
console.log(soupAccess);