let languages = ['HTML', 'CSS', 'JS', 'REACT', 'NODE-JS'];
let prices = [5, 10, 15, 20, 25];
let durations = ['3 Weeks', '6 Weeks', '9 Weeks', '10 Weeks', '12 Weeks'];

// using for 
for (let i = 0; i < prices.length; i++ ){
  console.log(languages[i], '=', '$'+prices[i], 'for', durations[i]);
}
