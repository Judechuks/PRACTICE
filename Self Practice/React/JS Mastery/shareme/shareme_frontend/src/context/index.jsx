import { useEffect, useState, createContext, useContext } from "react";
import { client } from "../client";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setsearchTerm] = useState("");

  // useEffect(() => {
  //   const query = '*[_type == "projects"]';
  //   client.fetch(query).then((data) => );
  // }, []);

  return (
    <AppContext.Provider value={{ searchTerm, setsearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
