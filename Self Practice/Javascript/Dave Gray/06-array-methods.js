//====== SELF LEARNING =======
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 17. includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 17a. includes(searchElement)
// 17b. includes(searchElement, fromIndex)
console.log([1, 2, 3].includes(2)); // Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // Expected output: true
console.log(pets.includes('cat', 2)); // Expected output: false
console.log(pets.includes('at')); // Expected output: false
