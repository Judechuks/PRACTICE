import React, { useState, lazy, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));
// The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img src="/vite.svg" alt="vite logo" />
      {/* picks the image in the public folder because '/' was used */}
    </div>
  );
});

function App() {
  const [items, setItems] = useState(newItems);

  return (
    <section className="container">
      <h2 className="section-title">Suspense API</h2>
      <div className="underline"></div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SlowComponent />
      </Suspense>
    </section>
  );
}
export default App;
