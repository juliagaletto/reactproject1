import React from "react";
import "./../../styles/globals.css";

function Navbar() {
    return (
        <nav className="Nav">
        <ul className="Navbar__list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
};

export default Navbar;