let myString = "Mathematics";
//1. charAt(arg) = to check a character at at particular position starting from 0 index
console.log(myString.charAt(0));  // M
//2. indexOf(arg) = to check the index of a character or group of characters
console.log(myString.indexOf("mat"));  // 5
//3. LatstIndexOf(arg) = to check the last index of appearance of a character or group of characters
console.log(myString.lastIndexOf("a"));  // 6
//4a. slice(5) = gets the characters starting from the index 5 to the end of the string
console.log(myString.slice(5));  // matics
//4b. slice(0, 2) = gets the letter starting from starting index 0 to the ending position 3 without including the ending position
console.log(myString.slice(0, 3));  // Mat
//4c. slice(-4) = gets the characters starting from the back (first item from the back is -1)
console.log(myString.slice(-4));  // tics
//4c. slice(-1) = gets the characters starting from the back
console.log(myString.slice(-7, -3));  // ema
//5. include(arg) = returns true or false if the argument passed is contained in the string
console.log(myString.includes("t"));  // true
//6a. split(arg) = splits the string into different strings saved in an array wherever the arg is found in the string
console.log(myString.split("e"));  // "Math", "matics"
//6b. split("") = splits the all the characters into an array.
console.log(myString.split(""));  // "M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"
// 6c. split(" ") = splits using space
console.log("Coding is fun".split(" "));  // "Coding", "is", "fun"
// 6d. split(",") = splits using comma
console.log("John, James, Prince and Kenedy are friends".split(","));  // "John", "James", "Prince and Kenedy are friends"