import { createContext, useState } from "react";
import data from "../tour";
// data ought to be fetched using fetch API or axios and then useEffect to fetch data once

export const context = createContext();

export const ContextProvider = (props) => {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    // All the state, props and functions to be passed are declared here
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };
  return (
    <context.Provider value={{ data, tours, setTours, removeTour }}>
      {props.children}
    </context.Provider>
  );
};
