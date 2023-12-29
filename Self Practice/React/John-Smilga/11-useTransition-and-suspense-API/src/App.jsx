import React, { useState, useTransition, lazy, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));
// The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.

function App() {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);

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
      <button onClick={() => setShow(!show)} className="btn">
        Toggle
      </button>
      {show && (
        <Suspense fallback={<h2>Loading...</h2>}>
          {/* rest of the logic */}
          <section>{show && <SlowComponent />}</section>
        </Suspense>
      )}
    </section>
  );
}
export default App;
