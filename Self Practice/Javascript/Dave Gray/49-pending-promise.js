//Pending state is as a result of waiting while fetching from an API.

//JSON placeholder for getting API data
//const users = fetch("https://jsonplaceholder.typicode.com/users");
// pending: because it is taking time to fetch the data
//console.log(users); //output: Promise{<pending>}


// executed second instead of first, because of delay in fetching 
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // console.log(response);
    return response.json(); // turn to json format 
  })
  .then(data => {
    // console.log(data);
    data.forEach(user => {
      console.log(user);
    })
  });

// this gets called first even though it appeared last, because it's a promise (asynchronous) it doesn't need to wait for the promise above
console.log(users);