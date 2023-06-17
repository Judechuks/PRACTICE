// Module

const playGuitar = () => {
  return "Playing guitar!";
};

const shredding = () => {
  return "Shredding some licks!";
};

const plucking = () => {
  return "Plucking the strings...";
};

const showHi = () => {
  return "Hi!";
};

export default playGuitar; // exporting only one function which is the default
export { shredding, plucking }; // exporting more than one function
// you can also do the inline export as in the example below.
/*
export default function playGuitar1 = () => {
  return "Playing guitar!";
};

or 

export const shredding = () => {
  return "Shredding some licks!";
};
*/

// you can rename a function as you are exporting.
export { showHi as sayHi};