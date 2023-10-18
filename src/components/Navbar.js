import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/modules">Modules</Link>
          <ul>
            <li>
              <Link to="/modules/ontwerp">Ontwerp</Link>
            </li>
            <li>
              <Link to="/modules/aanleg">Aanleg</Link>
            </li>
            <li>
              <Link to="/modules/onderhoud">Onderhoud</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
