import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "../context/context";
// you now have to use either (useContext & AppContext together) or (useGlobalContext)

export const Home = () => {
  const { openSidebar, openModal } = useContext(AppContext);
  // const { openSidebar, openModal } = useGlobalContext();
  return (
    <main className="">
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
