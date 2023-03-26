// let pattern = new RegExp("kinda");
// let pattern = /kinda/;
let pattern = /k..da/;
let sentence = "This is kinda a practice.";

console.log(sentence);
console.log(pattern);
console.log('Regular Expression is a type of:', typeof pattern); //object

console.log("Is the pattern present in the sentence?:", pattern.test(sentence));

if (pattern.test(sentence)){
  console.log(sentence.replace(pattern, 'just'));
}
  console.log("");
  console.log("Details About the pattern");
  console.log(sentence.match(pattern));
  let match = sentence.match(pattern);
  console.log("Datatype of match is:", typeof match); //object
  console.log("The pattern is found at index:", match.index);
  // console.log("The pattern is found at index:", sentence.match(pattern).index);