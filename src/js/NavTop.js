import React from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/App.scss';
import logoWhite from '../media/img/logo_white.png'

function NavTop() {
  return (
    <nav className="navTop">
      <div className="navTopContainer">
        <NavLink className="navLinkItemHome" to="/">
          Pand
          <img id="logoWhite" src={logoWhite} alt="logo_white" />
          mie</NavLink>
        <ul className="navLinks">
          <NavLink className="navLinkItem" to="/about">Intro</NavLink>
          <NavLink className="navLinkItem" to="/feed">Feed</NavLink>
          <NavLink className="navLinkItem" to="/apply">Kontakt</NavLink>
          <NavLink className="navLinkItem" to="/shop">Shop</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavTop;
