import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">
            ZAK <span className="logo-accent">BARBER</span>
          </span>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallerie</a>
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="menu-btn">
            <FaBars />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
