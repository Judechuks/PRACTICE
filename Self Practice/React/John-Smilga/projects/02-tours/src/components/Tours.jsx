import React, { useContext } from "react";
import Tour from "./Tour";
import { context } from "../context/context";

function Tours() {
  const { data, tours, setTours } = useContext(context);
  return (
    <section className="">
      {tours.length ? (
        <h1>Our Tours</h1>
      ) : (
        <>
          <h1>No Tours Available</h1>
          <button className="refresh" onClick={() => setTours(data)}>
            Refresh
          </button>
        </>
      )}
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </div>
      ;
    </section>
  );
}
export default Tours;
