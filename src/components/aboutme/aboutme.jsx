import React, { useState, useEffect } from 'react';
import './aboutme.css';

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [cycleIndex, setCycleIndex] = useState(0);

  const sections = [
    {
      title: "The Begining of Journey",
      mainContext: "Introduction to my journey",
      tags: ["Journey Starts", "Ambition", "Growth"],
      content: `From a young age, I have been driven by uncontainable curiosity and a passion for self-improvement. My journey began four years ago, and since then, I have been dedicated to reaching new heights in both my personal and professional life. This period has been marked by relentless learning, experimentation, and a commitment to excellence. Each step has been a testament to my determination and ambition, setting the foundation for a future filled with promise and potential.`
    },
    {
      title: "Passion for Learning",
      mainContext: "My favorite things to learn about and from whom.",
      tags: ["Curiosity", "Knowledge", "Exiploring"],
      content: `Learning is the melody that orchestrates my life. I am constantly seeking to expand my horizons by delving into various subjects. Whether it's immersing myself in a new book, mastering the strategic depths of chess, or staying abreast of the latest trends in business and finance, my thirst for knowledge knows no bounds. This passion for learning fuels my creativity and drives me to innovate, ensuring that I am always at the forefront of my fields of interest.`
    },
    {
      title: "Creativeness and Hobbies",
      mainContext: "My hobbies and personal interests.",
      tags: ["Creativity", "Music", "Photography", "Writing", "Art", "Innovation"],
      content: `My hobbies are a vibrant tapestry of my creative spirit. I find joy in music, gaming, drawing, fashion design, and video and music production. These activities not only provide a creative outlet but also inspire me to think outside the box and innovate. Each hobby is a canvas where I can express my ideas and bring my visions to life, blending artistry with technical prowess to create something truly unique.`
    },
    {
      title: "Professional Expertise",
      mainContext: "Improving myself in various proffesional fields",
      tags: ["Web Design", "Finance", "Various Writings"],
      content: `In my professional life, I offer a diverse range of services including website design, web hosting, color grading images, writing scripts, and copywriting. Additionally, I provide business and finance suggestions, as well as crypto and stock analysis. My work is a harmonious blend of technical skills and creative flair, ensuring that I deliver high-quality results that exceed expectations. Each project is an opportunity to showcase my expertise and commitment to excellence.`
    },
    {
      title: "Current Aspirations",
      mainContext: "My Current proggres towards my future",
      tags: ["learning", "Developing", "Skills"],
      content: `At present, I am focused on studying and honing my skills. I believe that continuous improvement is key to success, and I am committed to becoming the best version of myself. This phase of my life is dedicated to personal and professional growth, ensuring that I am well-prepared for the challenges and opportunities that lie ahead. Each day is a step towards realizing my full potential and achieving my dreams.`
    },
    {
      title: "Pursuing New Horizons",
      mainContext: "Things I want to pursue in the future.",
      tags: ["Future Plans", "New Horizons", "Goals"],
      content: `My vision for the future is to leverage my skills and knowledge to create innovative solutions that can make a difference. I aspire to be a leader in my field and to inspire others to pursue their passions and dreams. By balancing my professional and personal interests, I aim to achieve holistic growth and contribute to the betterment of society. The future is a canvas, and I am ready to paint it with bold and impactful strokes.`
    }    
  ];

  useEffect(() => {
    let interval;
    if (activeSection === null) {
      interval = setInterval(() => {
        setCycleIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [activeSection, sections.length]);

  const handleSectionClick = (index) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="sections">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`section-btn ${activeSection === index ? 'active' : ''} ${activeSection === null && cycleIndex === index ? 'cycle-active' : ''}`}
              onClick={() => handleSectionClick(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="section-details">
          {(activeSection !== null ? sections[activeSection] : sections[cycleIndex]).title && (
            <div className={`section-content ${activeSection !== null ? 'active' : 'cycle'}`}>
              <h3>{(activeSection !== null ? sections[activeSection] : sections[cycleIndex]).mainContext}</h3>
              <div className="tags">
                {(activeSection !== null ? sections[activeSection] : sections[cycleIndex]).tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <p className="content">{(activeSection !== null ? sections[activeSection] : sections[cycleIndex]).content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
