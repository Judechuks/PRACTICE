// Reduce - Object
// the initial value needs to be an Object, that will be returned after the reduce callback function is executed

// Cart example
const cart = [
  {title: 'Samsung Galaxy S7', price: 599.99, amount: 1},
  {title: 'Google Pixel', price: 499.99, amount: 2},
  {title: 'Xiaomi Redmi Note 2', price: 699.99, amount: 4},
  {title: 'Xiaomi Redmi Note 5', price: 399.99, amount: 3},
];

// let total = cart.reduce((total, cartItem)=>{
let {totalItems, cartTotal }= cart.reduce((total, cartItem)=>{ // destructured
  const {amount, price} = cartItem; // destructuring the props from cart object (cartItem)
  // count items
  total.totalItems += amount
  // count sum
  total.cartTotal += amount * price
  return total
}, {
  totalItems: 0,
  cartTotal: 0
})
// console.log(total); 
cartTotal = parseFloat(cartTotal.toFixed(2)) // to 2 decimal places
console.log('totalItems =', totalItems);
console.log('cartTotal =', cartTotal);


// github repo example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'
const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
  /*
  if(language){ // check if it contains a value
    if (total[language]) { // language is already there, then add 1 to it
      total[language] = total[language] + 1
    } else { // if not, then it is the first (1)
        total[language] = 1
    }
  } */
  // can be refactored as:
  if(language){
    total[language] = total[language] + 1 || 1
  }
    return total
  }, {})
  console.log(newData);
}
fetchRepos();