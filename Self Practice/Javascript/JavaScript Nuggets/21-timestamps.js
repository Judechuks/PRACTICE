// Timestamps
// UNIX Time
// January 1, 1970
// 1s = 1000ms

// Date.now() // give you the time in milliseconds from 1/1/1970 till date
console.log(Date.now());

// new Date().getTime() // give you the time in milliseconds from 1/1/1970 till date
console.log(new Date().getTime());

// new Date().valueOf() // give you the time in milliseconds from 1/1/1970 till date
console.log(new Date().valueOf());

// create id's in app
let people = [];
people = [...people, { id: Date.now(), name: "john" }];

const generateID = (person) => {
  setTimeout(() => {
    people = [...people, { id: Date.now(), name: person }];
    console.log(people);
  }, 50);
};
generateID("jude");

// create/get date
const currentDate = Date.now();
const futureDate = new Date(currentDate + 1000 * 3600 * 48);
console.log("Future Date:", new Date(futureDate).toUTCString());

// difference between dates
const secondDate = new Date(2033, 10, 17);
countDown = secondDate - currentDate;
console.log("Count Down:", countDown / 3600000, "hours.");
