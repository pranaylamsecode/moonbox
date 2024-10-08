import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MOONBOXES</div>
      <div className="navbar-icons">
        <span className="icon">⬅</span>
        <span className="icon">⬆</span>
        <span className="icon">⬇</span>
        <span className="icon">⬈</span>
      </div>
    </nav>
  );
}

export default Navbar;
