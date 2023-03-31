// synchronous code = in a orderly sequence, step-by-step linear instructions (start now, finish now).
// asynchronous code = out of sequence. e.g. access a database, fetch a file, tasks that take time (start now, finish sometime later).

// synchronous code
console.log("synchronous code:");
console.log("START");
console.log("I'M NEXT");
console.log("SAME HERE");
console.log("GET INPUT FROM USER");
console.log("END");
// the output occurs in order

console.log("");

// asynchronous code
console.log("asynchronous code:");
console.log("START");
console.log("OPENING A FILE");
setTimeout(() => console.log("Other codes did not wait for me, I'm asynchronous"), 5000);
console.log("COMPARING INPUT AND INFO FROM DATABASE");
console.log("END");
// the output is out of order

