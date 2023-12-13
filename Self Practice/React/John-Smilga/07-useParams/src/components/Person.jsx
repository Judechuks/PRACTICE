import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../friends.json";

// useParams - returns an object,
// it is  used to get a sub link from the main link, when used the value it
// returns is usually in strings, you can convert it to numbers when needed.

export const Person = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setPerson(newPerson);
  }, []);

  return (
    <section id="person" className="font-bold text-center">
      <img src={person.profilePic} alt={person.profilePic} />
      <h1 className="text-2xl">Name: {person.fullName}</h1>
      <h3>Occupation: {person.job}</h3>
      <p className="font-normal mt-4 text-left">{person.details}</p>
    </section>
  );
};
