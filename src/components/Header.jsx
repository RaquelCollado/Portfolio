//import  { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/layouts/Header.scss";
function Header() {
  return (
    <div className="header">
      <img className="header_img" src="/logo.png" alt="menu" />

      <button className="header_menu">≡</button>
      <nav className="header_nav">
        <button className="header_menu">Close</button>
        <ul className="header_nav_bubble">
          <li className="header_nav_bubble_li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="header_nav_bubble_li">
            <Link to="/quienSoy">Quién soy</Link>
          </li>
          <li className="header_nav_bubble_li">
            <Link to="/herramientas">Herramientas</Link>
          </li>
          <li className="header_nav_bubble_li">
            <Link to="/proyectos">Proyectos</Link>
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
