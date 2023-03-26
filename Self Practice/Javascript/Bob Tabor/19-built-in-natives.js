// Built in natives are simply built in functions in javascript
// Examples: 
// Built in natives with their own primitive datatypes versions like: number, string, boolean, function, object 
/*
 String()
 Number()
 Boolean()
 Object()
 Function()
 Symbol() 
 */

// Built in natives that do not have their own primitive datatypes versions
/*
 Array()
 RegExp() 
 */

// Built in natives that provides foundational datatypes for important features
/*
 Date()
 Error() 
 */

let myString = new String('Hello');
console.log(myString);
console.log(myString.toString);
console.log(myString.toString());
console.log("String native is a tye of:", typeof myString);

let myPrimitive = 'THIS IS CRAZY';
myPrimitive = myPrimitive.toLowerCase();
console.log(myPrimitive);
// console.log(typeof myPrimitive);
//toLowerCase() is a built function which coerses the myPrimitive into a built-in native, and then when it want to display it, it converts it back to a primitive datatype (in this case to a string).

// How to convert a built-in native into a primitive datatype
console.log("");
let myNumber = new Number(7);
console.log(typeof myNumber);
let primitive = myNumber.valueOf();
console.log(typeof primitive);