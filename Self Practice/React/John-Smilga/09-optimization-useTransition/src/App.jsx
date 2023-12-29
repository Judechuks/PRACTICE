import React, { useState, useTransition } from "react";
// useTransition is a React Hook that lets you update the state without blocking the UI.
// we use it to treat some functionalities as less urgent.

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // slows than the UI here (Array.from; which is moved into startTransition)
    // useTransition return two values; isPending and startTransition
    // use startTransition which will only slow down a bit once, subsequent actions will be faster
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="vite logo" />
            {/* picks the image in the public folder because '/' was used */}
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <section className="container">
      <h2 className="section-title">UseTransition</h2>
      <div className="underline"></div>
      <form className="form">
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          value={text}
        />
      </form>
      <h2 className="sub-title">Result Items</h2>

      {isPending ? <h2>Loading...</h2> : <div className="items">{items}</div>}
    </section>
  );
}
export default App;
