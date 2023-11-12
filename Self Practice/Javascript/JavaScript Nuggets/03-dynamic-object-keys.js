// dot notation
const person = {
  name: "john",
};
console.log(person.name);
person.age = 25
console.log(person);

// square bracket notation
// string/hyphen keys(property) can't be used, to do that you have to use square bracket notation
const items = {
  'featured-items': ['item1', 'item2'],
};
// the property and value can be accessed as thus
console.log(items['featured-items']);  // but you can't use the dot notation to access this property

// Assigning a dynamic key
let appState = 'loading';
// appState = 'loaded';
let keyName = 'computer'

const app = {
  [appState]: true,
}
  app[keyName] = 'Windows'
console.log(person['name']); // john
console.log(app['loading']); // true
console.log(app[keyName]); // Windows
console.log(app['computer']); // Windows

// Updating key and value dynamically with a function
const state = {
  loading: true,
  name: '',
  job: ''
}

function updateState(key, value){
  state[key] = value
}
updateState('name', 'john')
updateState('job', 'senior developer')
updateState('city', 'New York')
console.log(state);