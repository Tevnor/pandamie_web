import React from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/App.scss';

function NavTop() {
  return (
    <nav className="navTop">
      <div className="navTopContainer">
        <NavLink className="navLinkItemHome" to="/">Panda Plage</NavLink>
        <ul className="navLinks">
          <NavLink className="navLinkItem" to="/about">About</NavLink>
          <NavLink className="navLinkItem" to="/feed">Feed</NavLink>
          <NavLink className="navLinkItem" to="/apply">Apply</NavLink>
          <NavLink className="navLinkItem" to="/shop">Shop</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavTop;
