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
console.log('The quick brown fox jumps over the lazy dog. It barked.'.match(regex));
