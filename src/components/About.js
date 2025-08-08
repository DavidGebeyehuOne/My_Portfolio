import React from 'react';
import EDU from '../assets/education.png';
import AB from '../assets/about-pic.jpg';

const About = () => {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={AB} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={EDU} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. Bachelor's Degree in Software Engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a software engineer who combines creativity with technical expertise. 
              I build engaging web experiences using HTML, CSS, and JavaScript. I specialize in
              creating websites with React.js and enhancing performance through Next.js and python.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
