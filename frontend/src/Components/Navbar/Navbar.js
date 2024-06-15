// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../../pages";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <Link to={page.path}>{page.component}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
