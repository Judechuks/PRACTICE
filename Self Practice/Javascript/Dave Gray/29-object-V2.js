// Getting object keys and values

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drum: "John Bonham"
};

console.log(Object.keys(band)); // keys to get the properties/methods of the object
console.log(Object.values(band)); // value to get the values of properties/methods of the object

// for in loop
for (let job in band) {
  // console.log(job); // lists all the keys
  // console.log(band[job]); // lists all the values
  console.log(`On ${job}, it's ${band[job]}!`); // lists all the keys and values
}
// NOTE: band[job] the bracket notation is used and not dot notation because the browser will look for the key that has the name "job"

band.keyboards = "James Bart Allen"; // creating a property
console.log(band.keyboards);  

delete band.keyboards; // to delete a property
console.log(band.hasOwnProperty("drums")); // output: false
// checks if a property exists or belongs to the particular object (returns true or false)