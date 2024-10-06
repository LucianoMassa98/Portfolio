import React from 'react';
import './Footer.css';
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinFill 
  
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Luciano Massa. Todos los derechos reservados.</p>
      <nav className="flex items-center gap-4">

        <a href="https://www.instagram.com/lucianomassa98/" className="block text-white p-4 bg-primary rounded-full">
          {" "}
          <RiInstagramLine />{" "}
        </a>
        <a href="https://www.facebook.com/lucianomassa23/" className="block text-white p-4 bg-primary rounded-full">
          {" "}
          <RiFacebookLine />{" "}
        </a>
        <a href="https://www.linkedin.com/in/luciano-massa-075410238/" className="block text-white p-4 bg-primary rounded-full">
          {" "}
          <RiLinkedinFill />{" "}
        </a>
        <a href="https://github.com/LucianoMassa98" className="block text-white p-4 bg-primary rounded-full">
          {" "}
          <RiGithubLine />{" "}
        </a>

      </nav>
    </footer>
  );
};

export default Footer;
