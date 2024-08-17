import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create a corresponding CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Eddy Wu</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
