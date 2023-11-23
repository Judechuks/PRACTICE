// String includes() - checks if a string contains another string.
// returns true or false, and is case sensitive.
// String includes('search string', positionOfStr)

const firstName = "john";
console.log(firstName.includes("j")); // true
const result = firstName.includes("j", 1);
console.log(result); // false

const products = [
  { title: "Modern Poster" },
  { title: "Bar Stool" },
  { title: "Armchair" },
  { title: "Leather Chair" },
];

const searchTerm = "chair";

const filteredProducts = products.filter((product) => {
  return product.title.includes(searchTerm);
});
console.log(filteredProducts); // [ { title: 'Armchair' } ]

// to handle case sensitivity
const filteredProductSensitivity = products.filter((product) => {
  return product.title.toLowerCase().includes(searchTerm.toLowerCase());
});
console.log(filteredProductSensitivity); // [ { title: 'Armchair' }, { title: 'Leather Chair' } ]
