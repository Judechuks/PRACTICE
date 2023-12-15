import React, { useEffect, useState } from "react";
import Values from "values.js"; //npm install values.js --save
import SingleColor from "./components/SingleColor";

export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#0f5132").all(10));
  //.all(num) is a method that returns 100%/num, the value will determine how many colors (for each tint and shade) will be generated (+ 1 for the base color)

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h4 className="text-3xl font-bold">color generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="color" className="mr-2">
              Hex Code:
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={color}
              onChange={() => setColor(event.target.value)}
              placeholder="#f15025"
              className={`${error && "error"}`}
            />
            <button className="btn">submit</button>
            {error && (
              <p className="alert-danger">
                provided hex color code is incorrect
              </p>
            )}
          </div>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}
