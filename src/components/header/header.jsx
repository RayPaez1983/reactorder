import React from "react";
import { Link } from "react-router-dom";

import { BsCartCheck } from "react-icons/bs";
import "./header.scss";

const Header = () => {
  console.log("este es mi Header");
  return (
    <header>
      <div
        className="head"
        style={{
          backgroundImage: `linear-gradient(to top,
      rgba(223, 137, 181, 0.349) 0%,
      rgba(191, 217, 254, 0.212) 100%`,
        }}
      >
        <nav className="uno">
          <Link to="/">Inicio</Link>
          <Link to="/sing-in">Ingresar!</Link>
          <a href="#">
            My Car <BsCartCheck />
          </a>
        </nav>
        <div>
          <h1>PIJAMAS</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
