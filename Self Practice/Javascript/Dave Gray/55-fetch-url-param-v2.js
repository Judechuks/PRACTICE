// Fetch parameters

// abstract into functions

// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastnamer: "Lee",
    categories: ["nerdy"]
  };
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
  const reponse = await fetch(url);
  const jsonResponse = await reponse.json();
  const joke = jsonResponse.value.joke;
  // console.log(joke);
  postJokeToPage(joke);
}
const postJokeToPage = (joke) =>{
  console.log(joke);
};

// Procedural 'workflow' function

const processJokeRequest = async () =>{
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("Finished!");
};

processJokeRequest();