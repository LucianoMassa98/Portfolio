// Header.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
       {/* <h1></h1> */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            
            <li>
              <Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>
                Experiencia
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} onClick={toggleMenu}>
                Educación
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
                Habilidades
              </Link>
            </li>
            <li>
              <Link to="carousel" smooth={true} duration={500} onClick={toggleMenu}>
                Galería
              </Link>
            </li>
            <li>
              <Link to="qrcode" smooth={true} duration={500} onClick={toggleMenu}>
                QR Code
              </Link>
            </li>
            <li>
              <Link to="cta" smooth={true} duration={500} onClick={toggleMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
