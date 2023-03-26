// String template literal is simply the combination of both strings and literals as seen in the console.log() with the backtick symbol ` ` below
// it allows us to display the value of a variable or to call a function
let name = "Jude";
console.log(`Hi ${name} Welcome`);

function reason() { return 1; }

let interpolation = `Give me ${ (reason() == 1) ? 'one good reason' : 'a few reasons' } to try this.`;
console.log(interpolation);