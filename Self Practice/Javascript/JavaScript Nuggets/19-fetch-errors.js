// Fetch Error - only throws error if can not resolve
// error response - still a response (400-500)
const url = 'https://www.course-api.com/react-tours-project';

/*
const getTours = async () => {
  try{
    const res = await fetch(url);
    const tours = await res.json()
    console.log(tours);
  } catch(error) {
    console.log(error);
  }
}
// fetch is not able to handle traditional error, it only handles network errors
// if there is an error resulting from a failed response you won't be getting it
// instead you can catch the error yourself
*/

const getTours = async () => {
  try{
    const res = await fetch(url);
    if (!res.ok) {
      const msg = `There was an error "${res.status}: ${res.statusText}"`;
      throw new Error(msg);
    }
    const tours = await res.json();
    console.log(tours);
  } catch(error) {
    console.log(error);
  }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getTours);