let languages = ['HTML', 'CSS', 'JS', 'REACT', 'NODE-JS'];
let prices = [5, 10, 15, 20, 25];
let durations = ['3 Weeks', '6 Weeks', '9 Weeks', '10 Weeks', '12 Weeks'];
let names = ['John', 'Victor', 'Adam', 'Jude', 'Prince'];

// sort() = used to arrange arrays in ascending or alphabetical order
// reverse() = used to reverse the order of arrangement of arrays (without sorting)
languages.sort();
prices.reverse();
names.sort().reverse();  // descending order
for (let i = 0; i < languages.length; i++ ){
  console.log(languages[i], '-', names[i], '-', prices[i]);
}
