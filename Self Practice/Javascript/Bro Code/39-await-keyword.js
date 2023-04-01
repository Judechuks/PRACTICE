// await = makes an async function to wait for a Promise 
//         inorder for await to call the async function, it has to be placed in another async function

async function loadFile(){
  // let fileLoaded = true;
  let fileLoaded = false;
  if(fileLoaded){
    // there is no need using resolve, if the async is successful, then return a value 
    return "File loaded";
  } else {
    // if the async is not successful, then throw an error 
    throw "File NOT loaded";
    // which will raise an error and we can catch it 
  }
}
async function startProcess(){
  try{
    let message = await loadFile();
    // the '.then' and '.catch' method used for calling loadFile() is eliminated
    console.log(message);
  }
  catch(error){
    console.log(error);
  }
}
startProcess();
/*
 let message = await loadFile();  //supposed to be placed in an async function (already there)
   console.log(message);
*/