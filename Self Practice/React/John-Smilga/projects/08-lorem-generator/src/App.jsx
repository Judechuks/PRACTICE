import React, { useEffect, useState } from "react";
import data from "./components/lorem";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const loremLength = data.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > loremLength) {
      amount = loremLength;
    }
    setText(data.slice(0, amount));
  };

  return (
    <main>
      <section className="section-center">
        <div className="title">
          <h2>tired of boring lorem ipsum?</h2>
          <div className="underline"></div>
          <form className="lorem-form" onSubmit={handleSubmit}>
            <label htmlFor="amount">paragraphs:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min={0}
              max={loremLength}
              value={count}
              onChange={() => setCount(event.target.value)}
            />
            <button className="btn">generate</button>
          </form>
          <article className="lorem-text">
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </article>
        </div>
      </section>
    </main>
  );
}
