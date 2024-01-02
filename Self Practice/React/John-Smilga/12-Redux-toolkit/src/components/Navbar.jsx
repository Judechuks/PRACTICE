import React from "react";
import { CartIcon } from "./icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className="">
      <div className="nav-center">
        <a href="#">
          <h3 className="logo">redux toolkit</h3>
        </a>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
