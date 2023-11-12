const people = [
  {name: 'bob', location:{street: '123 main street', timezone: {offset: '+7:00'}}},
  {name: 'peter', location:{street: '123 pine street'}},
  {name: 'susan', location:{street: '123 apple street', timezone: {offset: '+9:00'}}},
];

// if you want to access the property of an undefined, you will get a bug
// you can use the optional chaining to avoid this, by adding a question mark '?'
people.forEach((person) => console.log(person?.location?.timezone?.offset));
console.log('');

// if you dont want to go with the default 'undefined', you can customize the message
people.forEach((person) => console.log(person?.location?.timezone?.offset || 'does not exist'));