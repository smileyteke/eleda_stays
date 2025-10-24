import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Eleda Stays</h1>
        </div>
        
        <nav className="nav">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about')}>
            About
          </Link>
          <Link to="/services" className={isActive('/services')}>
            Services
          </Link>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
        </nav>
        
        
      </div>
    </header>
  );
}

export default Header;