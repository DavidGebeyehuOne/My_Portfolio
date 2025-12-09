import React from 'react';
import PropTypes from 'prop-types';
import checkmarkIcon from '../assets/checkmark.png';

const Experience = ({ theme }) => {
  const skillsData = [
    {
      category: "Frontend Engineering",
      summary: "Product-grade interfaces, design systems, and accessible UX",
      skills: [
        { name: "React / Next.js", level: "Expert", proficiency: 92 },
        { name: "TypeScript", level: "Advanced", proficiency: 88 },
        { name: "CSS / Tailwind", level: "Expert", proficiency: 90 },
        { name: "JavaScript", level: "Advanced", proficiency: 86 },
      ]
    },
    {
      category: "Backend & Cloud",
      summary: "Reliable APIs, automation pipelines, and observability",
      skills: [
        { name: "Node.js ", level: "Advanced", proficiency: 84 },
        { name: "Python ", level: "Advanced", proficiency: 82 },
        { name: "PostgreSQL / Prisma", level: "Advanced", proficiency: 80 },
      
      ]
    }
  ];

  

  return (
    <section id="experience" className={`experience-section ${theme}`}>
      <div className="section-header">
        <p className="section-subtitle">Explore My</p>
        <h1 className="section-title">Skills & Experience</h1>
      </div>

      <div className="skills-experience-grid">
        <div className="skills-container">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-card">
              <div className="category-header">
                <h2 className="category-title">{category.category}</h2>
                <p className="category-summary">{category.summary}</p>
                <div className="category-accent"></div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <img
                          src={checkmarkIcon}
                          alt="Checkmark"
                          className="skill-check-icon"
                        />
                        <div>
                          <h3 className="skill-name">{skill.name}</h3>
                          <p className="skill-level">{skill.level}</p>
                        </div>
                      </div>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

Experience.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Experience;