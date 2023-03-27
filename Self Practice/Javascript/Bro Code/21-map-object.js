// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

// get() method retrieves the value of the key
let shoppingCart = 0;
shoppingCart += store.get("t-shirt"); // gets the value (20) of the key ("t-shirt")
shoppingCart += store.get("underwear"); // gets the value (50) of the key ("underwear") and add them
console.log(shoppingCart);

// set() method creates a new value and/or key (or changes the value of a key)
store.set("hat", 40);

// delete() method removes the specified element (array or object)
store.delete("hat");

// has() method is used to check if an element(key) has a value (returns a boolean value) 
console.log(store.has("hat"));

store.forEach((value, key) => console.log(`${key} $${value}`)); // displays the element of the array in pairs