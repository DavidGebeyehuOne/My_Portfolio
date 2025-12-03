import React from 'react';
import EDU from '../assets/education.png';
import AB from '../assets/about-pic.jpg';

const About = () => {


  return (
    <section id="about">
      <div className="section-header">
        <p className="section-subtitle">Get To Know More</p>
        <h1 className="section-title">About Me</h1>
      </div>

      <div className="about-layout">
        {/* Left Side - Image */}
        <div className="about-image-container">
          <div className="about-image-overlay"></div>
          <img src={AB} alt="Dawit Gebeyehu - Full Stack Developer" className="about-image" />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          {/* Stats Cards */}
          <div className="about-cards-grid">
            <div className="about-card">
              <div className="card-icon-wrapper">
                <img src={EDU} alt="Education icon" className="card-icon" />
              </div>
              <h3 className="card-title">Education</h3>
              <p className="card-text">B.Sc. Bachelor's Degree</p>
              <p className="card-subtext">Software Engineering</p>
            </div>

            <div className="about-card">
              <div className="card-icon-wrapper">
                <span className="card-icon-emoji">💼</span>
              </div>
              <h3 className="card-title">Experience</h3>
              <p className="card-text">2+ Years</p>
              <p className="card-subtext">Web Development</p>
            </div>

            <div className="about-card">
              <div className="card-icon-wrapper">
                <span className="card-icon-emoji">🚀</span>
              </div>
              <h3 className="card-title">Projects</h3>
              <p className="card-text">10+ Completed</p>
              <p className="card-subtext">React & Python</p>
            </div>
          </div>

          {/* Description */}
          <div className="about-description about-description-pro">
            <p>
              I translate ambitious product ideas into thoughtful, production-ready solutions.
              From the first strategy workshop to the final performance audit, I stay hands-on and
              collaborative with founders, PMs, and cross-functional teams.
            </p>
            <p>
              My sweet spot is crafting immersive web experiences with&nbsp;
              <strong>React</strong>, <strong>Next.js</strong>, <strong>Python</strong>, and modern
              cloud tooling. I emphasize accessibility, system thinking, and measurable business
              outcomes.
            </p>

          
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
