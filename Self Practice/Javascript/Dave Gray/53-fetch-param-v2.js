// Fetch parameters
// 1st parameter is the data to be fetched (in previous examples, it was a url)
// 2nd parameter is an object (optional)
// with a POST method

const jokeObject = {
  id: "0oO71TSv4Ed",
  joke: "Why was it called the dark ages? Because of all the knights."
}

const postData = async (jokeObj) => {
  const reponse = await fetch("https://httpbin.org/post", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jokeObj)
    }
  );

  const jsonResponse = await reponse.json();
  // console.log(jsonResponse); 
  console.log(jsonResponse.headers); 
}
postData(jokeObject);