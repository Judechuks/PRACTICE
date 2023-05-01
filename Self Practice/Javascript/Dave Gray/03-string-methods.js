//====== FURTHER LEARNING =======
// link: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 29a. toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
console.log("ALPHABET".toLocaleLowerCase()); // 'alphabet'
// 29b. toLocaleLowerCase(locale)
console.log("ALPHABET".toLocaleLowerCase("tr")); // 'alphabet' (tr = turkey)
console.log("ALPHABET".toLocaleLowerCase("en-US")); // 'alphabet' (en-US = United State English)

// 30a. toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
console.log("istanbul".toLocaleUpperCase()); // 'ISTANBUL'
// 30b. toLocaleUppererCase(locale)
console.log("istanbul".toLocaleUpperCase('en-US')); // 'ISTANBUL' (en-US = United State English)
console.log("istanbul".toLocaleUpperCase("TR")); // 'İSTANBUL' (TR = Turkey)

// 31 toLowerCase() method returns the calling string value converted to lower case.
console.log('SENTENCE'.toLowerCase()); //sentence
console.log('SENTence'.toLowerCase()); //sentence

// 32. toString() method returns a string representing the specified string value. 
// The String object overrides the toString method of Object; it does not inherit Object.prototype.toString(). For String values, the toString method returns the string itself (if it's a primitive) or the string that the String object wraps. It has the exact same implementation as String.prototype.valueOf().
// Example
const x = new String("Hello world"); // (this is string object)
console.log(x.toString()); // "Hello world" (converted to primitive string type)