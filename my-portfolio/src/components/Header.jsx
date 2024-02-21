import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "../styles/layouts/Header.scss";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="header">
      <img className="header_img" src={logo} alt="menu" />

      <button className="header_menu" onClick={toggleMenu}>≡</button>
      <nav className={`header_nav ${menuVisible ? 'visible' : ''}`}>
        <button className="header_menu" onClick={toggleMenu}>x</button>
        <ul className="header_nav_bubble">
          <li className="header_nav_bubble_li">
            <Link to="/curriculum">CV</Link>
          </li>
          <li className="header_nav_bubble_li">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

