/* Navbar.js */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; // Import the CSS file

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add event listener to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo and Home button */}
      <div className="logo-container">
        <NavLink to="/" className="logo">
          Gs <span className="photography">Photography</span>
        </NavLink>
      </div>

      {/* Menu items */}
      <div className="menu-container">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/gallery" className="nav-link" activeClassName="active">
          Gallery
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact Us
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About Us
        </NavLink>
        {/* <NavLink to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
