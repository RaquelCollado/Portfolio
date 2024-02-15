function Header() {
  return (
    <div className='header'>
      <img className="header_img" src="/logo.png" alt="menu"/>
      <button className="header_menu" id="open">≡</button>
      <nav className="header_nav" id="nav">
        <button className="header_menu" id="closed">Close</button>
          <ul className="header_nav_bubble">
            <li  className="header_nav_bubble_li">
              <a href="#">Inicio</a>
            </li>
            <li className="header_nav_bubble_li">
              <a href="#">Quién soy</a>
            </li>
            <li className="header_nav_bubble_li">
              <a href="#">Herramientas</a>
            </li>
            <li className="header_nav_bubble_li">
              <a href="#">Proyectos</a>
            </li>
            <li className="header_nav_bubble_li">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
    </div>
  );
}
export default Header;
