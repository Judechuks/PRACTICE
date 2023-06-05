// Objects = are items or elements that have properties and/or can perform an action
// key-value pairs in curly braces 
// {} used to create object with its property(s) and/or method(s)
// an object can have another object, array etc.
// you can create object using the 'new Object()' keyword or using curly brace.

const myObj = {name: "Jude"};

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea"
  },
  action: function() {
    // return "Hello World";
    // inchaining properties and methods, you can use 'dot' or 'bracket' notaion
    // return `Time for ${this["beverage"]["morning"]}`;  // bracket notation
    // when using bracket notation, the property or method has to be in quote
    return `Time for ${this.beverage.morning}`; // dot notation
  }
};
console.log(anotherObj["action"]());  // bracket notation
console.log(anotherObj.action());  // dot notation