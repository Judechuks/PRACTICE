import React, { useState, useTransition } from "react";

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img src="/vite.svg" alt="vite logo" />
      {/* picks the image in the public folder because '/' was used */}
    </div>
  );
});

function SlowComponent() {
  const [items, setItems] = useState(newItems);

  return (
    <section className="container">
      <h2 className="sub-title">Result Items</h2>

      <div className="items">{items}</div>
    </section>
  );
}
export default SlowComponent;
