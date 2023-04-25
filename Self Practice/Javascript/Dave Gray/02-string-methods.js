//====== FURTHER LEARNING =======
// link: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1. at(index) = works similarly to charAt(arg), accepts both positive and negative index. Returns undefined if the given index can not be found.

// 2. charCodeAt(index) = method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index (just like charAt() but it is getting the UTF-16 code of the returned value)
console.log("The quick brown fox jumps over the lazy dog.".charCodeAt(4));  // 113 (that q = 113)

// 3. endsWith(arg) = checks if the sgrument ends the string and returns true or false
console.log("Cats are the best!".endsWith("best!")); // true

// 4. includes(searchString, position) = checks if a string exists in a string, returns true or false. position is optional. It is case sensitive i.e boy is not equal to Boy
console.log("The fish shallowed Jonah".includes("Jonah")); // true
console.log("The fish shallowed Jonah".includes("Fish")); // false (case sensitive)
console.log("The fish shallowed Jonah".includes("The fish", 1)); // false (index starts from 0)
console.log("The fish shallowed Jonah".includes("The fish", 0)); // true

// 5. match() = retrieves the result of matching a string against a regular expression.
const regex = /[A-Z]/g; 
console.log('The quick brown fox jumps over the lazy dog. It barked.'.match(regex)); // ['T', 'I']
console.log('The quick brown fox jumps over the lazy dog. It barked.'.matchAll(regex)); // ['T', 'I']

// 6a. padEnd(targetLength) = pads or adds the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
console.log("200".padEnd(6));  //'200   ' (gives additional 3 character spaces to make it a total of 6 characters. if the character)
// 6b. padEnd(targetLength, padString) = targetLength is how many characters to be returned, padString is the string to be added to the original string
console.log("200".padEnd(6).length);  // 6
console.log("Breaded Mushrooms".padEnd(25, ".")); //Breaded Mushrooms....... (7 dots added) to make it total of 25

// 7. padStart(targetLength, padString) = padding starts from the front.
console.log("5463".padStart(11, "*")); // *******5463 (7 asterisks added) to make it total of 11
// When the targetLength is equal or more than the string's Length then padStart or padEnd doesn't work.
let phoneNum = "08145445463";
console.log(phoneNum.padStart(11, "*")); // 08145445463

// 8. String.raw = is used to preserve a template literal without escaping the backlashes, but ${var} is processed
const filePath = `C:\Development\profile\aboutme.html`;
console.log(String.raw`The file was uploaded from: ${filePath}`);

// 9. repeat() = constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`); // I feel Happy! Happy! Happy!

// 10. replace() = replaces a matching string with the provided argument. (just the first matching string)
const sentence = `The sleeping dog.`; // Note: you can use RegEx, and then pas it as argument
console.log(sentence.replace('dog', 'monkey')); // The sleeping dog

// 11. replaceAll() = replaces all matching string with the provided argument. (all matching string)
// NOTE: not working in node
// const phrase = 'If John walks like a dog, then John is a dog.'; 
// console.log(phrase.replaceAll('dog', 'man')); // If John walks like a man, then John is a man

12. 