// replace 
// function (){content} OR function Hello(){content}
// with
// () => {content} OR Hello() => {content}

// Using the arrow function with the map() method
// the map method is used to call a function that is linked to each member of an array.

let names = ['David', 'Eddie', 'Alex', 'Michael'];
names.map( (name) => { console.log(`Hello ${name}!`); } );
console.log("");
let greetPeople = names.map((name) => { return `Hello ${name}!`});
console.log(greetPeople);