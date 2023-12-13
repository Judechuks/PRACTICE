import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../friends.json";

export const People = () => {
  return (
    <section className="item-container">
      <h1 className="text-4xl text-center mb-4">People</h1>
      {data.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.fullName}</h4>
            <Link className="btn" to={`/person/${person.id}`}>
              Learn more
            </Link>
          </div>
        );
      })}
    </section>
  );
};
