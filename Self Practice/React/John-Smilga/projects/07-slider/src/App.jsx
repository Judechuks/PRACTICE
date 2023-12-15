import React, { useEffect, useState } from "react";
import data from "./components/friends";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Categories from "./components/Categories";

export default function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // setInterval for slides
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    // cleanup function
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main>
      <section className="section">
        <div className="title mt-2 flex justify-center">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, job, image, name, text } = person;
            // classes in css to make the slides work
            /* if (index === -1) {
              setIndex(people.length - 1);
            }
            if (index === people.length) {
              setIndex(0);
            } 
            you can use the useEffect to also solve this problem
            check the code above
            */
            let positon = "nextSlide";
            if (personIndex === index) {
              positon = "activeSlide";
            }
            // if the first person later have an
            // last person on the array automatically have the lastSlide
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              positon = "lastSlide";
            }
            return (
              <article className={positon} key={id}>
                <img src={image} alt={name} className="person-img mx-auto" />
                <h4 className="name">{name}</h4>
                <p className="title">{job}</p>
                <p className="text">{text}</p>
                <FaQuoteRight className="icon mx-auto" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
