// JavaScript Event Listener

// Add Event Listener
// Syntax: addEventListener("event", function, useCapture);
// event: can be click, scroll, mousedown, keydown etc
// function: can be anonymous function, function call, function expression
// useCapture: check the note below on event bubbling

// Remove Event Listener
// Syntax: removeEventListener("event", function, useCapture);

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
  }
  initApp();
});

const initApp = () => {
  const view = document.querySelector(".container");
  const div = document.querySelector("div");
  const h2 = document.querySelector("h2");

  view.addEventListener("click", (event) => {
    // event.stopPropagation();
    view.style.backgroundColor = "purple";
  // }, true);
  }, false);
  div.addEventListener("click", (event) => {
    // event.stopPropagation();
    div.style.backgroundColor = "blue";
  }, false);
  h2.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.textContent = "Clicked";
  }, false);

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", ()=> {
    nav.classList.add("height100");
  });

  nav.addEventListener("mouseout", ()=> {
    nav.classList.remove("height100");
  });

  const outer = document.querySelector(".outer");
  outer.addEventListener("click", ()=> {
    outer.classList.toggle("darkgray");
  });
};

// When the h2 is clicked other containers are assumed to be clicked because of the h2 is inside those containers (event bubbling: where click effect starts from the outer element(view) to the inner element(h2))
// useCapture: default value is false, when set to true then the event bubbling starts from the inner element(h2) down to the outer element(view)
// we use the stopPropagation() method to visualize the effect (if it is starting inward or not)