// Debounce - is a technique to improve the performance of a function that is repeatedly called
// the main reason is to delay the threshold upon which the function will be called instead of calling it repeatedly
// e.g: when searching for a result, to prevent the result from popping up as the user is typing

const btn = document.querySelector(".btn");

const debounce = (callbackFunction) => {
  let timeoutID;
  return () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      callbackFunction();
    }, 2000);
  };
};

btn.addEventListener(
  "click",
  debounce(() => {
    console.log("You clicked me!");
  })
);
// delay logic - so it runs 2 seconds after the last click
// setTimeout returns an id, which is passed to clearTimeout
// the clearTimeout will try to prevent the function from running until the user stops clicking for 2s
