// destructuring object

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};

const { guitar: myValue } = band; // locating the key 'guitar' and getting its value 'Jimmy Page'
const { bass: myBass, drums: myDrum,  } = band; // more than one key and value
const { vocals, guitar, bass, drums } = band; // naming the variables after the name of the key
// the order or arrangement isn't compulsory
// console.log(myDrum);
console.log(vocals);
console.log(guitar);

function sings( { vocals } ){  
  // the parameter 'vocals' must be the name of a key, not just any name
  return `${vocals} sings!`;
}
// calling the function, you have to pass the object 'band' as an argument
console.log(sings(band));  // Robert Plant sings!
// the object is destructured and the parameter from the function 'sing' is pulled from the 'band' object