console.log('Hello World!');

let x = 7;
let y = '8';
y = parseInt(y, 10);
// the parseInt(value, radix) method forces/coercion of the argument 'value' into a number where the 'radix' specifies the base of the number, in this case 'decimal'
let z = x + y;
console.log(x+" + "+y);
console.log("Answer: "+z);

let value = "Bob";
// isNaN(value) method is used to check if a value is a number. (is Not a Number). It returns 'true' if it is not a number and returns 'false' otherwise.
console.log('\"'+value+ '\" is not a number: '+ isNaN(value));