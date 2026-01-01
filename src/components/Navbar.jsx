import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'about', 'experience', 'projects', 'contact'];
      // Offset to account for the sticky navbar height
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (sectionName) => {
    return activeSection === sectionName ? 'active' : '';
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="nav-inner">
          <div className="logo">My Portfolio</div>
          <ul className="nav-links">
            <li><a href="#profile" className={getLinkClass('profile')}>Home</a></li>
            <li><a href="#about" className={getLinkClass('about')}>About</a></li>
            <li><a href="#experience" className={getLinkClass('experience')}>Experience</a></li>
            <li><a href="#projects" className={getLinkClass('projects')}>Projects</a></li>
            <li><a href="#contact" className={getLinkClass('contact')}>Contact</a></li>
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
          <div className="logo">My portfolio</div>
          <div className="hamburger-menu">
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#profile" onClick={toggleMenu} className={getLinkClass('profile')}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu} className={getLinkClass('about')}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu} className={getLinkClass('experience')}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu} className={getLinkClass('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu} className={getLinkClass('contact')}>Contact</a></li>
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