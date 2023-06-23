// Async / Await

// Work flow function

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json(); 
  
  const userEmailArray = jsonUserData.map(user => {
    return user.email;
  });

  console.log(userEmailArray);
  postToWebPage(userEmailArray); // (reference 1);
  return userEmailArray; // using console.log()
}

getAllUserEmails();  // will execute the function when it is ready
console.log(getAllUserEmails()); // will only show the pending state because it is executing immediately

const postToWebPage = (data) => {
  // doesn't need to be await, because it will be called when the await is ready (see reference 1 above)
  console.log(data);
}
getAllUserEmails();