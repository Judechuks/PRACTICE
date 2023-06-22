// Async / Await
// to use the keyword 'await', it must be in an async function
// async keyword makes a function return a promise (asynchronous - no waiting) 
// await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.
const myUsers = {
  userList: []
}

// const myCoolFunction = async () => {}
async function myCoolFunction() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // wait to get the result from the fetch operation
  const jsonUserData = await response.json(); 
  console.log(jsonUserData);
  return jsonUserData;
}

const anotherFunc = async () => {
  const data = await myCoolFunction();
  // console.log(data);
  myUsers.userList = data;
  console.log(myUsers.userList); // (reference 1)
}
anotherFunc(); // gets called second, because it is awaiting
console.log(myUsers.userList); // gets called first [instead it should be placed in the function definition as in (reference 1)]