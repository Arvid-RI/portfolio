import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  FaGamepad, FaCode, FaChartLine, FaCamera, FaMusic, FaMicrosoft
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const categoryColors = {
    'Web Development': {
      bg: '#E0F7FA',
      accent: '#00ACC1'
    },
    'Game Development': {
      bg: '#FFEBEE',
      accent: '#FF5252'
    },
    'Creative & Arts': {
      bg: '#E8F5E9',
      accent: '#66BB6A'
    },
    'Finance Analysis': {
      bg: '#F3E5F5',
      accent: '#AB47BC'
    },
    'Music & Video': {
      bg: '#FFF3E0',
      accent: '#FFB74D'
    },
    'Office Works': {
      bg: '#ECEFF1',
      accent: '#607D8B'
    }
  };

  const skills = [
    {
      id: 'web-dev',
      name: 'Web Development',
      icon: <FaCode />,
      level: 'Expert',
      description: 'Crafting responsive, accessible, and performant web applications with modern technologies',
      category: 'Web Development',
      progress: 95,
      highlights: [
        'HTML, CSS, JavaScript',
        'React Framework',
        'Responsive Design Systems',
        'Web Performance Optimization',
      ],
      tools: ['HTML', 'CSS', 'JS', 'React', 'Python']
    },
    {
      id: 'game-dev',
      name: 'Game Development',
      icon: <FaGamepad />,
      level: 'Intermediate',
      description: 'Creating immersive gaming experiences with optimization and performance in mind',
      category: 'Game Development',
      progress: 45,
      highlights: [
        'Unity & Unreal Engine',
        'Game Physics & Mechanics',
        '3D Modeling & Animation',
        'Performance Optimization'
      ],
      tools: ['Unity', 'C#', 'Blender']
    },
    {
      id: 'photo-video',
      name: 'Photography and Videography',
      icon: <FaCamera />,
      level: 'Intermediate',
      description: 'Capturing and editing visual stories with a keen eye for detail',
      category: 'Creative & Arts',
      progress: 20,
      highlights: [
        'Visual Storytelling',
        'Photo & Video Editing',
        'Camera Operation',
        'Color Grading'
      ],
      tools: ['Photoshop', 'Davinchi Resolve', 'Lightroom']
    },
    {
      id: 'finance-analysis',
      name: 'Financial Analysis',
      icon: <FaChartLine />,
      level: 'Intermediate',
      description: 'Analyzing market trends and making informed investment decisions',
      category: 'Finance Analysis',
      progress: 35,
      highlights: [
        'Market Research',
        'Technical Analysis',
        'Risk Management',
        'Investment Strategies'
      ],
      tools: ['Excel', 'TradingView', 'Bloomberg Terminal']
    },
    {
      id: 'music-video',
      name: 'Music and Video Creation',
      icon: <FaMusic />,
      level: 'Intermediate',
      description: 'Producing and editing music and videos with creative flair',
      category: 'Music & Video',
      progress: 70,
      highlights: [
        'Audio Editing',
        'Video Editing',
        'Music and Beat Production',
        'Beat and Sound Design',
      ],
      tools: ['Waveform', 'Davinci Resolve', 'FL Studio']
    },
    {
      id: 'office-works',
      name: 'Office Work Management',
      icon: <FaMicrosoft />,
      level: 'Expert',
      description: 'Proficient in using Microsoft Office tools for various professional tasks',
      category: 'Office Works',
      progress: 100,
      highlights: [
        'Document and CV Creation',
        'Data Analysis and Data Management',
        'Presentation Design and Creation',
        'Project Management and Creative Solutions'
      ],
      tools: ['Excel', 'Word', 'PowerPoint']
    }    
  ];

  return (
    <>
      <Helmet>
        <title>Professional Skills & Expertise | Arvid RI - Full Stack Developer</title>
        <meta 
          name="description" 
          content="Discover my comprehensive skill set in game development, web development, and digital solutions. Specialized in creating efficient, scalable, and user-friendly applications."
        />
        <meta 
          name="keywords" 
          content="frontend development, game development, React developer, Unity developer, web optimization, UI/UX design, mobile apps, desktop applications"
        />
        <meta property="og:title" content="Skills & Expertise | Arvid RI" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Professional skills and expertise in software development and digital solutions." />
        <link rel="canonical" href="https://yourwebsite.com/skills" />
      </Helmet>

      <section className="skills-section" id="skills">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h2 className="skills-title">Professional Expertise</h2>
          <p className="skills-subtitle">Comprehensive overview of my technical capabilities and specializations</p>
        </motion.div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{
                backgroundColor: categoryColors[skill.category].bg,
                '--accent-color': categoryColors[skill.category].accent
              }}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <div className="skill-category">{skill.category}</div>
              </div>

              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level" data-level={skill.level}>
                  {skill.level}
                </span>
                <p className="skill-description">{skill.description}</p>
              </div>

              <div className="skill-progress-section">
                <div className="skill-progress-wrapper">
                  <motion.div 
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <span className="skill-progress-label">{skill.progress}%</span>
                </div>
              </div>

              <div className="skill-details">
                <div className="skill-highlights">
                  <h4>Key Capabilities</h4>
                  {skill.highlights.map((highlight, idx) => (
                    <div key={idx} className="skill-highlight-item">
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="skill-tools">
                  <h4>Tools & Technologies</h4>
                  <div className="tool-tags">
                    {skill.tools.map((tool, idx) => (
                      <span key={idx} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
