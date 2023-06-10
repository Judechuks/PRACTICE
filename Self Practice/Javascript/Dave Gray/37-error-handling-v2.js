// JavaScript Errors and Error Handling

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try{
      if (i % 2 !== 0) {
        throw new Error("Odd number!")
        //Error is a keyword
      }
      console.log("Even number!");
    } catch(err){
      console.error(err.stack);
    } finally {
      console.log("...finally, End", i);
      i++;
    }
  }
};
makeError();
// 'finally' always execute
// if the 'if condition' executes, then 'console.log' doesn't, vice-versa
// 'catch' executes if there is an error. (try)