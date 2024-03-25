import { useState } from "react";
import "./Header.scss";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-header">
        <a href="/" className="brand">
          <h1>
            Obaji<span>Festival</span>
          </h1>
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <nav>
          <a href="">Signin</a>
          <a href="">SignUp</a>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <a href="/" className="brand">
          <h1>
            Obaji<span>Festival</span>
          </h1>
        </a>
        <nav>
          <ul className={`${active && "active"}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="">Signin</a>
            </li>
            <li>
              <a href="">SignUp</a>
            </li>
          </ul>
          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${active && "active"}`}></div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
