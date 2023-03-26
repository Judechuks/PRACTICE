// Error Exception can be used in a situation where you suspect there will be a bug in your code but you don't want it to stop the whole of your code, but you create a way to mitigate or handle such error
function beforeTryCatch(){
  let obj = undefined;
  console.log(obj.b);
  console.log('If Exception occurs, you won\'t see this message');
}
// beforerTryCatch();

function afterTryCatch(){
  try{
    let obj = undefined;
    console.log(obj.b);
    console.log('If Exception occurs, you won\'t see this message');
  }
  catch (error){
    console.log('Exception thrown:', error.message);
  }
  console.log('My Application is still running!');
}

afterTryCatch();