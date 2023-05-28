let result;
const toProperCase = (name) => {
  name = name.trim(); // to remove any trailing white space
  if (name.includes(" ")) {
    result = name.charAt(0).toUpperCase() + name.slice(1, name.indexOf(" ")).toLowerCase() + " " + name[name.indexOf(" ") + 1].toUpperCase() + name.slice(name.indexOf(" ") + 2).toLowerCase();
  } else {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  return result;
};

console.log(toProperCase("jUDe mONYE"));