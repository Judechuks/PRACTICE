// Fetch API - Brwoser API for HTTP (AJAX) Requests
// Default - GET Requests, support other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project';

// when invoking jSON, it returns a promise

// using fetch then
fetch(url)
  .then(res => res.json()).then(data => console.log(data))
  .catch(err => console.log(err))

// using fetch and async await
const getTours = async () => {
  try{
    const res = await fetch(url);
    const data = await res.json()
    console.log(data);
    // you can work with the data here
    // but if you are returning the data (by using return keyword), you will be
    // returning a Promise which you can access by using the 'then catch' method
  } catch(error) {
    console.log(error);
  }
}
getTours()