import { useState } from "react";
import sublinks from "./data";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          <ul className="links">
            {sublinks.map((item, index) => {
              const { links, page } = item;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((link, index) => {
                      const { label, icon, url } = link;
                      return (
                        <a key={index} href={url}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
