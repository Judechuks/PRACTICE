// break is used to skip or go out of (discontinue) a loop.
// continue is used to skip a particular iteration without actually discontinuing the loop.

let name = "Dave";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "v") break;
  counter++;
}
console.log(counter);