let result;
const toProperCase = (name) => {
  name = name.trim(); // to remove any trailing white space
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("jUDe"));