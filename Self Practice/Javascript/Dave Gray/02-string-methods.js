//====== FURTHER LEARNING =======
// link: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 14. at(index) = works similarly to charAt(arg), accepts both positive and negative index. Returns undefined if the given index can not be found.

// 15. charCodeAt(index) = method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index (just like charAt() but it is getting the UTF-16 code of the returned value)
console.log("The quick brown fox jumps over the lazy dog.".charCodeAt(4)); // 113 (that q = 113)

// 16. endsWith(arg) = checks if the sgrument ends the string and returns true or false
console.log("Cats are the best!".endsWith("best!")); // true

// 17. includes(searchString, position) = checks if a string exists in a string, returns true or false. position is optional. It is case sensitive i.e boy is not equal to Boy
console.log("The fish shallowed Jonah".includes("Jonah")); // true
console.log("The fish shallowed Jonah".includes("Fish")); // false (case sensitive)
console.log("The fish shallowed Jonah".includes("The fish", 1)); // false (index starts from 0)
console.log("The fish shallowed Jonah".includes("The fish", 0)); // true

// 18. match() = retrieves the result of matching a string against a regular expression.
const regex = /[A-Z]/g;
console.log(
  "The quick brown fox jumps over the lazy dog. It barked.".match(regex)
); // ['T', 'I']
console.log(
  "The quick brown fox jumps over the lazy dog. It barked.".matchAll(regex)
); // ['T', 'I']

// 19a. padEnd(targetLength) = pads or adds the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
console.log("200".padEnd(6)); //'200   ' (gives additional 3 character spaces to make it a total of 6 characters. if the character)
// 19b. padEnd(targetLength, padString) = targetLength is how many characters to be returned, padString is the string to be added to the original string
console.log("200".padEnd(6).length); // 6
console.log("Breaded Mushrooms".padEnd(25, ".")); //Breaded Mushrooms....... (7 dots added) to make it total of 25

// 20. padStart(targetLength, padString) = padding starts from the front.
console.log("5463".padStart(11, "*")); // *******5463 (7 asterisks added) to make it total of 11
// When the targetLength is equal or more than the string's Length then padStart or padEnd doesn't work.
let phoneNum = "08145445463";
console.log(phoneNum.padStart(11, "*")); // 08145445463

// 21. String.raw = is used to preserve a template literal without escaping the backlashes, but ${var} is processed
const filePath = `C:\Development\profile\aboutme.html`;
console.log(String.raw`The file was uploaded from: ${filePath}`);

// 22. repeat() = constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`); // I feel Happy! Happy! Happy!

// 23. replace() = replaces a matching string with the provided argument. (just the first matching string)
const sentence = `The sleeping dog.`; // Note: you can use RegEx, and then pas it as argument
console.log(sentence.replace("dog", "monkey")); // The sleeping dog

// 24. replaceAll() = replaces all matching string with the provided argument. (all matching string)
// NOTE: not working in node
// const phrase = 'If John walks like a dog, then John is a dog.';
// console.log(phrase.replaceAll('dog', 'man')); // If John walks like a man, then John is a man

// 25. search() = method executes a search for a match between a regular expression and this String object.
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const regEx = /[^\w\s]/g; // Any character that is not a word character or whitespace
console.log(paragraph.search(regEx)); // Expected output: 43
console.log(paragraph[paragraph.search(regEx)]); // Expected output: '.'

// 26a. startsWith() = method determines whether a string begins with the characters of a specified string, returning true or false
console.log("Saturday night plans".startsWith("Sat")); // Expected output: true

// 26b. startsWith(searchString, position)
console.log("Saturday night plans".startsWith("Sat", 3)); // Expected output: false; position = 0

// 27. substr() = method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
// 27a. substr(start). start = The index of the first character to include in the returned substring.
console.log("Mozilla".substr(2)); // Expected output: "zilla"
// 27b. substr(start, length). length = The number of characters to extract.
console.log("Mozilla".substr(1, 2)); // Expected output: "oz"
// NOTE: if start < 0, the index starts counting from the end of the string. More formally, in this case the substring starts at max(start + str.length, 0).

// 28. substring() = method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
// 28a. substring(indexStart). start = The index of the first character to include in the returned substring.
console.log("Mozilla".substring(2)); // Expected output: "zilla"
// 28b. substr(indexStart, indexEnd). indexEnd = index of the first character to exclude from the returned substring. (zero based).
console.log("Mozilla".substring(1, 3)); // Expected output: "oz"
