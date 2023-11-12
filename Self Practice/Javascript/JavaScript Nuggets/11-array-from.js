// Array.from - NOT ON PROTOTYPE
// from - returns Array object from object with a length property or an iterable object
// from - turns array-like/ish into an array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy)); // ['u', 'd', 'e', 'm', 'y']

const text = document.querySelectorAll('.text');
//console.log(text); // NodeList [h2.text, h2.text, h2.text]

// turns array-like/ish into an array 
const newText = Array.from(text);
console.log(newText); // [h2.text, h2.text, h2.text] converted to an array
const person = newText.find(item => item.textContent === 'Person');
console.log(person);

// array must have a length property (pagination)
const items = Array.from({length: 120}, (_, index)=> {
  return index
});

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({length: pages}, (_,index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems
});

console.log(items);
console.log(pages);
console.log(newItems);