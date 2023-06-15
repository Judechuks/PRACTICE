// JavaScript Event Listener

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
  }
  initApp();
});

const initApp = () => {

  const myForm = document.querySelector("#myForm");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // prevent the default behavior of the page reloading when form is submitted.
    console.log("submit event");
  });
};
// 5:20:00