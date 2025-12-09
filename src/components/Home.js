import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Import images from assets
import profilePic from '../assets/profile-pic.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
// Import resume from assets
import myResume from '../assets/My CV.pdf';

const Home = ({ theme }) => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Software Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="profile">
      <div className="profile-hero-container">
        {/* Animated Background Elements */}
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="profile-content">
          {/* Profile Text Section - Top Part */}
          <div className="profile-text-section profile-text-top">
            <p className="profile-greeting">Hello, I'm</p>
            <h1 className="profile-name">Dawit Gebeyehu</h1>
            <div className="profile-role-wrapper">
              <h2 className="profile-role">
                {typedText}
                {!isTypingComplete && <span className="typing-cursor">|</span>}
              </h2>
            </div>
          </div>

          {/* Visual Column - Image */}
          <div className="profile-visual-column">
            <div className="profile-image-wrapper">
              <div className="profile-glow"></div>
              <img
                className="profile-pic"
                src={profilePic}
                alt="Dawit Gebeyehu"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Profile Text Section - Bottom Part */}
          <div className="profile-text-section profile-text-bottom">
            <p className="profile-description">
              A software engineer who builds modern, reliable, and thoughtfully crafted applications
              using JavaScript, TypeScript, Python, and clean, scalable architecture.
              I focus on creating fast, intuitive user experiences powered by solid engineering
              principles and a commitment to continuous improvement.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="profile-cta-container">
              <button
                className="btn btn-primary"
                onClick={() => window.open(myResume)}
              >
                <span className="btn-icon">📄</span>
                My CV
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="btn-icon">💬</span>
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="profile-socials">
              <a
                href="https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
              <a
                href="https://github.com/dawitgebeyehuOne"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={githubIcon} alt="GitHub" className="social-icon" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <div className="mouse-icon">
                <div className="mouse-wheel"></div>
              </div>
              <p>Scroll Down</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Home;