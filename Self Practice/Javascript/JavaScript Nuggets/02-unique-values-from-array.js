// Unique Values [ES6]
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];
// map gets all the value
// Set gets the unique key, without repeating them
// spread operator [...] splits the objects into an array

// const categories = menu.map((item) => item.category) // gets all the categories
const myCategories = new Set(menu.map((item) => item.category)) // streamlines it to a unique value
console.log(myCategories); // results into an object
const result = [...myCategories] // convert it into an array
console.log(...myCategories); // string
console.log(result); // array

// shortened
const categories = ['all', ...new Set(menu.map((item) => item.category))] // added a new array 'all'
console.log(categories); // convert it into an array

/*
  // to be connected to the html
  const display = document.querySelector('#root');
  display.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`
    }).join('');
*/