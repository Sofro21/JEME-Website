// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../../pages";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-pages">
          {pages.map((page) => (
            <div className="navbar-link" key={page.path}>
              <Link to={page.path}>{page.component}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
