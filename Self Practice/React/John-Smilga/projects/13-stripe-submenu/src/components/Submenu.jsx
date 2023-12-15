import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/context";

function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links }, // destructure
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setCoumns] = useState("col-2");

  useEffect(() => {
    setCoumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setCoumns("col-3");
    }
    if (links.length > 3) {
      setCoumns("col-4");
    }
  }, [location, links]);

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
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
    </aside>
  );
}
export default Submenu;
