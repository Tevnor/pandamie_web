import React from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/App.scss';
import logoWhite from '../media/img/logo_white.png'

function NavTop() {
  return (
    <nav className="navHome">
      <div className="navHomeContainer">
        <NavLink className="navHomeLinkItemHome" to="/">
          Pand
          <img id="logoWhite" src={logoWhite} alt="logo_white" />
          mie</NavLink>
        <ul className="navHomeLinks">
          <NavLink className="navHomeLinkItem" to="/about">Enter</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavTop;
