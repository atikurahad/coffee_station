import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <>
      <div className="navbar">
        <Link
          className="nav-link"
          to="/contact"
        >
          Contact
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/home">
          Home
        </Link>
      </div>
    </>
  );
};

export default Navigation;
