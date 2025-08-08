import React from 'react';
import PropTypes from 'prop-types';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

const Contact = ({ theme }) => {
  return (
    <section id="contact">
      <p className="sectiontextp1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img 
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:dawitgebeyehu12@gmail.com">dawitgebeyehu08@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img 
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Contact;