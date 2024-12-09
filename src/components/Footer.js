import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="nav-menu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/equipment">Matériel</Link>
          </li>
          <li>
            <Link to="/coaches">Coachs</Link>
          </li>
          <li>
            <Link to="/contact">Nous contacter</Link>
          </li>
        </ul>
      </nav>
      <small>Copyrights 2024 - fakri</small>
    </footer>
  );
}

export default Footer;
