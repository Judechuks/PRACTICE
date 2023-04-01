// async = a keyword that makes a function return a Promise

async function loadFile(){
  let fileLoaded = true;
  if(fileLoaded){
    // there is no need using resolve, if the async is successful, then return a value 
    return "File loaded";
  } else {
    // if the async is not successful, then throw an error 
    throw "File NOT loaded";
    // which will raise an error and we can catch it 
  }
}

loadFile().then(() => console.log(loadFile()))
       .catch(error => console.log(error));