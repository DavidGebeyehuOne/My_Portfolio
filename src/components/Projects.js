import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Import project images
import project1Image from '../assets/project-1.png';
import project2Image from '../assets/project-2.png';
import project3Image from '../assets/project-3.png';
import project4Image from '../assets/project-4.png';

const Projects = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading projects...</div>;
  }

  const projects = [
    {
      name: "QR Code Generator",
      description: "This project is a QR Code Generator built using React.js. Users can input text, and the app will generate a customized QR code. Additionally, users can change the QR code color, set a background color, and even upload a custom background image for the QR code.",
      image: project1Image,
      github: "https://github.com/DavidGebeyehuOne/QR-code-generator"
    },
    {
      name: "Expense Tracker",
      description: "This project is a React.js based Expense Tracker that helps users manage their personal finances by tracking their income and expenses. Users can add new transactions, view a summary of their balance, income, and expenses, and delete transactions.",
      image: project2Image,
      github: "https://github.com/DavidGebeyehuOne/Expense_Tracker"
    },
    {
      name: "Todolist",
      description: "This project is a simple yet feature-rich Todo List application built using React.js. The app allows users to add tasks with specific due dates and times, manage task statuses (active, completed, overdue), and filter tasks by their state.",
      image: project3Image,
      github: "https://github.com/DavidGebeyehuOne/Todo-list"
    },
    {
      name: "Tic Tac Toe",
      description: "This is a simple implementation of the classic Tic Tac Toe game built using React. The game allows two players to take turns marking the cells in a 3x3 grid with 'X' and 'O'.",
      image: project4Image,
      github: "https://github.com/DavidGebeyehuOne/Tic-Tac-Toe"
    }
  ];

  return (
    <section id="projects" className="w-full">
      <div className="text-center mb-8">
        <h1 className="title">Projects</h1>
      </div>
      <div className="experience-details-container">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${theme === 'dark' ? 'dark' : ''}`}
            >
              <div className="project-content">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={`Project ${index + 1}`} 
                    className="project-img"
                  />
                </div>
                <div className="project-info">
                  <h2 className="project-title">
                    {project.name}
                  </h2>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="btn-container">
                    <button 
                      className="btn btn-color-2 project-btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Projects;