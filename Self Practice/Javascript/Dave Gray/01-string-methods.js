let myString = "Mathematics";

// 1. charAt(index) = to check a character at at particular position starting from 0 index
console.log(myString.charAt(0));  // M

// 2a. indexOf(arg) = to check the index of a character or group of characters
console.log(myString.indexOf("mat"));  // 5

// 2b. indexOf(arg, position) = where position is optional. And is index based. If position is greater than the length of the calling string, the method doesn't search the calling string at all (returns -1). If position is less than zero, the method behaves as it would if position were 0. If the actual position is not equal or greater than arg position it returns -1
console.log(myString.indexOf("ma", 8)); // -1 (!(=> position))

// 3. LatstIndexOf(arg) = to check the last index of appearance of a character or group of characters
console.log(myString.lastIndexOf("a"));  // 6

// 4a. slice(5) = gets the characters starting from the index 5 to the end of the string
console.log(myString.slice(5));  // matics
// 4b. slice(0, 2) = gets the letter starting from starting index 0 to the ending position 3 without including the ending position
console.log(myString.slice(0, 3));  // Mat

// 4c. slice(-4) = gets the characters starting from the back (first item from the back is -1)
console.log(myString.slice(-4));  // tics
// 4c. slice(-1) = gets the characters starting from the back
console.log(myString.slice(-7, -3));  // ema

// 5. include(arg) = returns true or false if the argument passed is contained in the string
console.log(myString.includes("t"));  // true

// 6a. split(arg) = splits the string into different strings saved in an array wherever the arg is found in the string
console.log(myString.split("e"));  // "Math", "matics"
// 6b. split("") = splits the all the characters into an array.
console.log(myString.split(""));  // "M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"
// 6c. split(" ") = splits using space
console.log("Coding is fun".split(" "));  // "Coding", "is", "fun"
// 6d. split(",") = splits using comma
console.log("John, James, Prince and Kenedy are friends".split(","));  // "John", " James", " Prince and Kenedy are friends"

// 7. Number(arg) = converts a string number into a number. when the argumnent is a string it gives NaN (Not a Number)
console.log(Number("25")); // 25
console.log(Number("25a")); // NaN (Not a Number)
console.log(Number("Hey")); // NaN (Not a Number)
console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(Number(undefined));  // NaN

// 8. Number.isInteger(arg) = checks if the arg is an integer and returns true or false
console.log(Number.isInteger("Hey"));  // false
console.log(Number.isInteger("56"));  // false
console.log(Number.isInteger(56));  // true

// 9. Number.parseInt(arg) = converts the arg into an integer 
console.log(Number.parseInt("Hey"));  // NaN
console.log(Number.parseInt(undefined));  // NaN
console.log(Number.parseInt("56"));  // 56
console.log(Number.parseInt("56 a"));  // 56
console.log(Number.parseInt(56));  // 56

// 10. Number.parseFloat(arg) = parses an argument and returns a floating point number. If a number can not be parsed from the argument, it returns NaN.
console.log(Number.parseFloat("3.142"));  // 3.142
console.log(Number.parseFloat("3.1424352agcv"));  // 3.1424352

// 11. toFixed(arg) = formats a number according to how many decimal points you provide as argument
console.log(Number.parseFloat("3.1424352").toFixed(3)); // 3.142 in string because of the toFixed()

// 12. Number.isNaN(arg) = determines whether the passed value is a NaN AND if its type is Number, returns true or false. 
console.log(Number.isNaN("Dave")); // false [bcos of the Number method (its type is Number)]

// 13. isNaN(arg) = determines whether the passed value is a NaN, returns true or false (Only the value is considered and not the datatype)
console.log(isNaN("Dave")); // true (bcos its value is NaN)