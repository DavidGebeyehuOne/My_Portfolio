import React, { useState } from 'react';
import PropTypes from 'prop-types';
import project1Image from '../assets/qr_code_mockup.png';
import project2Image from '../assets/expense_tracker_mockup.png';
import project3Image from '../assets/todo_list_mockup.png';
import project4Image from '../assets/tic_tac_toe_mockup.png';
import habitTrackerGraphic from '../assets/habit-tracker.svg';
import handGestureGraphic from '../assets/hand-gesture.svg';
import './Project-card-styles.css';

const ProjectItem = ({ project, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-item ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.name}
          className="project-img"
        />
      </div>

      <div className="project-details">
        <h3 className="project-title">{project.name}</h3>

        {project.tags && (
          <div className="project-tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tag">{tag}</span>
            ))}
          </div>
        )}

        <p className={`project-description ${isExpanded ? 'expanded' : ''}`}>
          {project.description}
        </p>

        <button
          className="view-more-btn"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show Less' : 'View More'}
        </button>

        <div className="btn-container">
          <button
            className="btn project-btn"
            onClick={() => window.open(project.github, '_blank')}
          >
            <span className="btn-icon">⚡</span>
            View on Github
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
};

const Projects = ({ theme }) => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      name: "Habit Tracker",
      description: "Habit_Tracker is a modern full-stack habit-building application designed to help users create, track, and maintain positive routines through an intuitive interface, visual progress insights, and personalized motivation features. Built with Next.js, TypeScript, Prisma, and Tailwind CSS, the app allows users to manage habits, monitor streaks with heatmaps and charts, and unlock achievements as they reach milestones. With user authentication, responsive design, reminders, and clear analytics, Habit_Tracker provides a clean and engaging experience for anyone looking to improve consistency and build long-term habits.",
      image: habitTrackerGraphic,
      github: "https://github.com/DavidGebeyehuOne/Habit_Tracker",
      tags: ["React.js", "TypeScript", "CSS"]
    },
    {
      name: "Hand Gesture Recognition",
      description: "The Hand Gesture Tracker is a modern application built using customtkinter, OpenCV, and Mediapipe that enables real-time hand gesture recognition. Users can upload video files or utilize a webcam to detect and track hand movements and gestures efficiently. The application provides a user-friendly interface and is a robust tool for exploring hand tracking capabilities.",
      image: handGestureGraphic,
      github: "https://github.com/DavidGebeyehuOne/Hand-Gesture-Tracker",
      tags: ["Python", "customtkinter", "OpenCV", "Media pipe"]
    },
    {
      name: "QR Code Generator",
      description: "A feature-rich QR Code Generator built with React.js. Users can input text and generate customized QR codes with adjustable colors, background options, and even upload custom background images for a personalized touch.",
      image: project1Image,
      github: "https://github.com/DavidGebeyehuOne/QR-code-generator",
      tags: ["React.js", "JavaScript", "CSS"]
    },
    {
      name: "Expense Tracker",
      description: "A comprehensive React.js Expense Tracker for managing personal finances. Track income and expenses, view balance summaries, add new transactions, and maintain a clear overview of your financial health.",
      image: project2Image,
      github: "https://github.com/DavidGebeyehuOne/Expense_Tracker",
      tags: ["React.js", "State Management", "UI/UX"]
    },
    {
      name: "Todo List Application",
      description: "A feature-rich Todo List app built with React.js. Add tasks with specific due dates and times, manage task statuses (active, completed, overdue), and filter tasks by their state for better organization.",
      image: project3Image,
      github: "https://github.com/DavidGebeyehuOne/Todo-list",
      tags: ["React.js", "LocalStorage", "Date Handling"]
    },
    {
      name: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game implementation using React. Features two-player mode, interactive 3x3 grid, winner detection, and clean, intuitive interface for an enjoyable gaming experience.",
      image: project4Image,
      github: "https://github.com/DavidGebeyehuOne/Tic-Tac-Toe",
      tags: ["React.js", "Game Logic", "Interactive UI"]
    }
  ];

  // Show only first 3 projects if showAll is false
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <section id="projects">
      <div className="section-header">
        <p className="section-subtitle">Browse My Recent</p>
        <h1 className="section-title">Projects</h1>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div key={project.name} className={`project-card-wrapper ${theme === 'dark' ? 'dark' : ''}`}>
              <ProjectItem project={project} theme={theme} />
            </div>
          ))}
        </div>
      </div>

      {hasMoreProjects && (
        <div className="see-more-container">
          <button
            className="btn btn-see-more"
            onClick={() => {
              const newShowAll = !showAll;
              setShowAll(newShowAll);
              if (!newShowAll) {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="btn-icon">{showAll ? '▲' : '▼'}</span>
            {showAll ? 'See Less' : 'See More Projects'}
          </button>
        </div>
      )}
    </section>
  );
};

Projects.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Projects;