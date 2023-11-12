// Spread Operator (...)
// Allows and iterable to spread/expand ondividually inside receiver
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy] // splits the letters into an array
console.log(letters);

const boys = ['john', 'peter', 'bob']; 
const girls = ['susan', 'anna']; 
const bestFriend = 'arnold'; 

//const friends = [boys, girls, bestFriend] // you will get a nested array
const friends = [...boys, ...girls, bestFriend] // will split the boys and girls array
console.log(friends); // ['john', 'peter', 'bob', 'susan', 'anna']

// reference
// when assigning an array to another, when a change is made to the second, it also affects the first, because, the second is a reference to the first, to solve this, you have to use the spread operator.
/*
const newFriends = friends;
newFriends[0] = 'nancy';
console.log(newFriends);// ['nancy', 'peter', 'bob', 'susan', 'anna', 'arnold'] same for friends array
console.log(friends);// ['nancy', 'peter', 'bob', 'susan', 'anna', 'arnold']
*/

// copy
// using the spread operator forms a copy of the first array
const newFriends = [...friends]
newFriends[0] = 'nancy';
console.log(newFriends);// ['nancy', 'peter', 'bob', 'susan', 'anna', 'arnold'] same for friends array
console.log(friends);// ['john', 'peter', 'bob', 'susan', 'anna', 'arnold']

// ES2018 - ES8 Objects
const person = {name: 'john', job: 'developer'};
const newPerson = {...person, name: 'peter', city: 'chicago'};
/* we were able to overide the name property and also add new property 'city'
the spread operator should come first, before what you want to overide it with */
console.log(newPerson);
console.log(person);