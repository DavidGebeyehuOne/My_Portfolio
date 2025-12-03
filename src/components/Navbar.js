import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="nav-inner">
          <div className="logo">Dawit Gebeyehu</div>
          <ul className="nav-links">
            <li><a href="#profile">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="nav-inner">
          <div className="logo">Dawit Gebeyehu</div>
          <div className="hamburger-menu">
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#profile" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
              <li>
                <button onClick={toggleTheme} className="theme-toggle">
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default Navbar;