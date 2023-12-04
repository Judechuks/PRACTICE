import React, { useEffect, useRef } from "react";
// useRef: is similar to useState, it preserves the value inbetween re-renders
// for uncontrolled inputs; used for targetting the DOM nodes/elements
// it does not trigger re-render

export default function App() {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const errorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer); // {current: null}
    console.log(refContainer.current.value); //
    console.log(divContainer.current); //
    if (!refContainer.current.value) {
      errorRef.current.style.display = "block";
    } else {
      errorRef.current.style.display = "none";
      refContainer.current.value = "";
    }
  };

  // to make the input have a focus state when rendered
  useEffect(() => {
    refContainer.current.focus();
    errorRef.current.style.display = "none";
  });

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="text-center">useRef</h1>
        <div className="form-control">
          <input type="text" name="name" id="name" ref={refContainer} />
          <button className="btn">Add</button>
        </div>
        <p className="error" ref={errorRef}>
          You have to enter a value
        </p>
        <div ref={divContainer} className="text-center">
          Check the console
        </div>
      </form>
    </main>
  );
}
