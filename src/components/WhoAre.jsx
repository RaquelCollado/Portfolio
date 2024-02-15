import React from "react";
import { Link } from "react-router-dom";

function WhoAre() {
  return (
    <div>
      <Link to="/">
        <img className="arrow" src="/anterior.png" alt="flecha" />
      </Link>
      <p>ESTO APARECE SOLO CUANDO ALGUIEN ENTRA EN QUIEN SOY</p>
    </div>
  );
}

export default WhoAre;
