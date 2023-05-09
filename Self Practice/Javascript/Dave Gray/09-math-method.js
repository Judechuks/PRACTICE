// Math Methods and Properties

// 1. Math.PI = generates the pie const in mathematics (22/7)
console.log(Math.PI); // 3.141592653589793

// 2. Math.trunc() = returns the integer part of the decimal number
console.log(Math.trunc(Math.PI)); // 3

// 3. Math.round() = returns a supplied numeric expression rounded to the nearest integer. Approximation principle applies here.
console.log(Math.round(Math.PI)); // 3
console.log(Math.round(3.56)); // 4

// 4. Math.ceil() = Returns the smallest integer greater than or equal to its numeric argument. (rounds number up (ceiling) no matter the decimal point)
console.log(Math.ceil(3.132326)); // 4

// 5. Math.floor() = Returns the greatest integer less than or equal to its numeric argument. (rounds number down (floor) no matter the decimal point)
console.log(Math.floor(3.132326)); // 3

// 6. Math.pow(base, expeonent) = raised to the power
console.log(Math.pow(3, 2)); // 9

// 7. Math.min(arg1, arg2, ..., argN) = returns the smallest number
console.log(Math.min(3, 4, 6, 2, 8, 9)); // 2

// 8. Math.max(arg1, arg2, ..., argN) = returns the largest number
console.log(Math.min(3, 4, 6, 2, 8, 9)); // 9

// 9. Math.random(arg1, arg2, ..., argN) = produces random numbers  between 0 and 1 without including 1.
console.log(Math.random()); // series of random decimal numbers

// 10. To generate random number from 1 to 10: get random numbers, multipled by 10, round down and add 1 to the generated number so as to get 10 as a value.
console.log(Math.floor(Math.random() * 10) + 1); // series of random numbers from 1 to 10