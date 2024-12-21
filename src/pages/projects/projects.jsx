import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './projects.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const projectsData = [
  {
    id: 1,
    title: "React Portfolio",
    description: "A responsive portfolio website built with React and styled-components. Featuring modern design principles, smooth animations, and optimal performance.",
    image: "/Projects-Image-1.png",
    github: "#",
    liveDemo: "#",
    technologies: ["React", "Styled Components", "React Router", "Framer Motion"],
    status: "in-progress"
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        {project.status === "in-progress" && (
          <div className="status-badge">
            <FaClock /> In Development
          </div>
        )}
      </div>

      <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              <FaCode className="tech-icon" /> {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a 
            href={project.github} 
            className="project-link github"
            target="_blank"
            rel="noopener noreferrer"
            {...(project.status === "in-progress" && { 
              onClick: (e) => e.preventDefault(),
              'aria-disabled': true 
            })}
          >
            <FaGithub /> Source Code
          </a>
          <a 
            href={project.liveDemo} 
            className="project-link demo"
            target="_blank"
            rel="noopener noreferrer"
            {...(project.status === "in-progress" && { 
              onClick: (e) => e.preventDefault(),
              'aria-disabled': true 
            })}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    const filtered = projectsData.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
  }, [searchTerm]);

  return (
    <div className="projects-page">
      <Navbar />
      <main className="projects-section">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My Projects</h1>
          <p className="projects-subtitle">Exploring innovation and Creativity thorough Great Coding and Intergation of AI</p>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search projects, descriptions, or technologies..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>No projects found</h3>
            <p>Try adjusting your search terms</p>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
