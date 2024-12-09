import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/haltere.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" width="150" height="120" />
          <span className="go-training">GO TRAINING</span>
        </Link>
      </div>
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
    </header>
  );
}

export default Header;
