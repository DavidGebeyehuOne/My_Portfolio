import React from 'react';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Dawit Gebeyehu</div>
            <p className="brand-tag">Software Engineer</p>
          </div>

          <div className="footer-quick">
            <h4>Quick Access</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-row">
              <img src={emailIcon} alt="email" className="footer-icon" />
              <a href="mailto:dawitgebeyehu08@gmail.com">dawitgebeyehu08@gmail.com</a>
            </div>
            <div className="contact-row">
              <img src={linkedinIcon} alt="linkedin" className="footer-icon" />
              <a href="https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <p className="footer-copy">Copyright &#169; {currentYear} Dawit Gebeyehu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;