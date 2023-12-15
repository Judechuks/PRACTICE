import React, { useContext, useState } from "react";
import { context } from "../context/context";

function Tour({ tour }) {
  const { removeTour } = useContext(context);
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <article key={tour.id} className="tour relative">
      <img src={tour.fields.image[0].url} alt={tour.fields.name} />
      <div className="tour-info p-2">
        <h4 className="font-bold text-xl">{tour.fields.name}</h4>
        <div className="price">${tour.fields.price}</div>
        <p>
          {isReadMore
            ? tour.fields.info
            : `${tour.fields.info.substring(0, 200)}...`}
          <span onClick={() => setIsReadMore(!isReadMore)}>
            {isReadMore ? " Show less" : " Read more"}
          </span>
        </p>
        <button className="remove" onClick={() => removeTour(tour.id)}>
          Not interested
        </button>
      </div>
    </article>
  );
}
export default Tour;
