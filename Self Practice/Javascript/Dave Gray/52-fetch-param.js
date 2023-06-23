// Fetch parameters
// 1st parameter is the data to be fetched (in previous examples, it was a url)
// 2nd parameter is an object (optional)
// with a GET method


const getDadJoke = async () => {
  const reponse = await fetch("https://icanhazdadjoke.com/", 
    {
      method: "GET",
      headers: {
        Accept: "application/json"
        // Accept: "text/plain" // just text (reference 1)
    } // 2nd parameter
  });

  const jsonJokeData = await reponse.json();
  //const jsonJokeData = await reponse.text(); // because of reference 1 above
  console.log(jsonJokeData); // full json data with details (object)
  console.log(jsonJokeData.joke); // the joke alone with no details
}
getDadJoke();