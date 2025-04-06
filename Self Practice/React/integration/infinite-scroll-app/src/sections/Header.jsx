import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <a href="/" className={location.pathname == "/" ? "active" : ""}>
        Home
      </a>
      <a
        href="/paginate"
        className={location.pathname == "/paginate" ? "active" : ""}
      >
        Paginate
      </a>
      <a
        href="/click"
        className={location.pathname == "/click" ? "active" : ""}
      >
        Click for More
      </a>
      <a
        href="/scroll"
        className={location.pathname == "/scroll" ? "active" : ""}
      >
        Scroll for More
      </a>
      <a
        href="/mutate"
        className={location.pathname == "/mutate" ? "active" : ""}
      >
        Mutate
      </a>
    </header>
  );
};

export default Header;
