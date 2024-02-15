import React from "react";
import { Link } from "react-router-dom";
function Tools() {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="arrow" src="/anterior.png" alt="flecha" />
        </Link>
      </div>
      <p>ESTO APARECE SOLO CUANDO ALGUIEN ENTRA EN HERRAMIENTAS</p>
    </div>
  );
}

export default Tools;
