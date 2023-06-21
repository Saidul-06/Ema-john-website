import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />

      <div className="Back_colour">
        <a href="/Order/">Order</a>
        <a href="/Order Review">Order Review</a>
        <a href="/Manage Inveestor">Manage Inveestor</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
