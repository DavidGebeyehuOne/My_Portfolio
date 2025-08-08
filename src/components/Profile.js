import React from 'react';
import PropTypes from 'prop-types';
// Import images from assets
import profilePic from '../assets/profile-pic.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
// Import resume from assets
import myResume from '../assets/My Resume.pdf';

const Profile = ({ theme }) => {
  return (
    <section id="profile">
      <div className="sectionpic-container">
        <img 
          className="profile-pic" 
          src={profilePic}
          alt="Dawit Gebeyehu"
          onError={(e) => {
            e.target.onerror = null;
            // Instead of using a default image, we'll just hide the broken image
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="profile-section">
        <p className="sectiontextp1">Hello, I'm</p>
        <h1 className="title">Dawit Gebeyehu</h1>
        <p className="sectiontextp2">Software Engineer</p>
        <div className="btn-container">
          <button 
            className="btn btn-color-2" 
            onClick={() => window.open(myResume)}
          >
            Download CV
          </button>
          <button 
            className="btn btn-color-1" 
            onClick={() => document.getElementById('contact').scrollIntoView()}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258', '_blank')}
          />
          <img
            src={githubIcon}
            alt="GitHub"
            className="icon"
            onClick={() => window.open('https://github.com/DawitGebeyehu12', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Profile;