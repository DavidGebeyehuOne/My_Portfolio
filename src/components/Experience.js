import React from 'react';
import PropTypes from 'prop-types';
import checkmarkIcon from '../assets/checkmark.png';

const Experience = ({ theme }) => {
  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React js", level: "Experienced" },
  ];

  const otherSkills = [
    { name: "Python", level: "Experienced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "GitHub", level: "Intermediate" },
  ];

  return (
    <section id="experience">
      <p className="sectiontextp1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill, index) => (
                <article key={index}>
                  <img 
                    src={checkmarkIcon} 
                    alt="Experience icon" 
                    className="icon" 
                  />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Other Skills</h2>
            <div className="article-container">
              {otherSkills.map((skill, index) => (
                <article key={index}>
                  <img 
                    src={checkmarkIcon} 
                    alt="Experience icon" 
                    className="icon" 
                  />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Experience;