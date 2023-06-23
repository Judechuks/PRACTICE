// Fetch parameters

const requestJoke = async (firstName, lastName) => {
  const reponse = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
  // const reponse = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`); // for nerdy jokes
  // in the url, ? desnotes the parameters, & denotes chain of parameters, i.e more than one parameters
  const jsonResponse = await reponse.json();
  // console.log(jsonResponse); 
  console.log(jsonResponse.value); 
  console.log(jsonResponse.value.joke); 
}
requestJoke("Henry", "Cavil");