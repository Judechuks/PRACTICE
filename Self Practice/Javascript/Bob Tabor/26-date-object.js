let today = new Date();

// Birth Day
let birthDay = new Date('February 25, 1996 21:30:16:136'); //month date, year hr:min:secs:ms
// let birthDay = new Date('1996-1-25T21:30:16:136');
// let birthDay = new Date(1996, 1, 25);
// let birthDay = new Date(1996, 1, 25, 21, 30, 16, 136);

var elapsedTime = today - birthDay;
console.log('Remaining Time:', elapsedTime,'milliseconds');  // number in milliseconds
console.log(birthDay.getTime());  // Time in milliseconds
console.log(birthDay.getMilliseconds());  // Time in milliseconds
console.log(birthDay.getSeconds());  // Time in seconds
console.log(birthDay.getMinutes());  // Time in minutes
console.log(birthDay.getHours());  // Time in hours (24 hours clock)
console.log(birthDay.getDay());  // Day of the week
// Sun = 0, Mon = 1, Tues = 2, Wed = 3, Thurs = 4, Fri = 5, Sat = 6
console.log(birthDay.getDate());  // Date = 25
console.log(birthDay.getMonth());  // Month February = 1
console.log(birthDay.getFullYear());  // Year = 1996