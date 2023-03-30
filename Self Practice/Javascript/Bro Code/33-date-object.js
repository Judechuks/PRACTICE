// date object is used to work with date and time

let date = new Date();  // current date "Tue Mar 28 2023 19:26:34 GMT+0100 (West Africa Standard Time)"

date = date.toDateString();    // Tue Mar 28 2023
// date = date.toLocaleString();  // 3/28/2023, 7:27:31 PM
// date = date.toLocaleDateString(); // 3/28/2023
// date = date.toTimeString(); // 19:31:37 GMT+0100 (West Africa Standard Time)
// date = date.toLocaleTimeString(); // 7:30:36 PM
// date = date.toUTCString(); // Tue, 28 Mar 2023 18:32:42 GMT
// date = date.toISOString(); // 2023-03-28T18:33:36.286Z
// date = date.toJSON(); // 2023-03-28T18:35:04.221Z
// date = date.toString(); // Tue Mar 28 2023 19:35:53 GMT+0100 (West Africa Standard Time)

let date1 = new Date(2023, 0, 30, 9, 30, 20, 12); // yr month, day, hr, min, sec, ms
let date2 = new Date("February 27, 2023 9:30:40:12"); // month day, yr hr, min, sec, ms

// Date getter
let year = date2.getFullYear();
let month = date2.getMonth(); // 0=Jan, 1=Feb, 2=Mar, 3=Apr, 4=May and so on
let dayOfMonth = date2.getDate();  // 1, 2, 3, 4 etc
let dayOfWeek = date2.getDay();  // numbers; 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
let hours = date2.getHours();  // 24 hours
let minutes = date2.getMinutes();
let seconds = date2.getSeconds();
let ms = date2.getMilliseconds();

// Date Setter
// date.setFullYear(2024);  // is not working, bcos we used date.toString (string not object)
date1.setFullYear(2024);
date2.setFullYear(2024);
// etc, same as getter

console.log("Year:", year);
console.log("Month:", month);
console.log("Day Of Month:", dayOfMonth);
console.log("Day Of Week:", dayOfWeek);
console.log("Hourr:", minutes);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", ms);

document.getElementById("p").innerText = date; 
document.getElementById("p1").innerText = date1; 
document.getElementById("p2").innerText = date2; 