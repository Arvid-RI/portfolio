import React from 'react';
import './websites.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Websites = () => {
  const websites = [
    {
      id: 1,
      title: "A Blogs/News Platform",
      description: "A Blog/News Platform where u can read vlogs and news",
      image: "/blog-image-1.png", 
      link: "#",
      status: "development",
      tags: ["Blogs", "News", "Exploration"]
    },
    {
      id: 2,
      title: "Study Website",
      description: "A website that will help you study or work with ambience noise and time tracking so u will stay in your 100% giving zone the whole time.",
      image: "/blog-image-1.png",
      link: "#",
      status: "development",
      tags: ["React", "Coming Soon", "Business Solution"]
    }
  ];

  return (
    <section className="websites-section">
      <h2 className="websites-title">My Other Websites</h2>
      <p className="websites-subtitle">Still hesitated to work with me? Take a Look at Websites below then make ur choice</p>
      
      <div className="websites-container">
        {websites.map((website, index) => (
          <div key={website.id} className={`website-showcase ${index % 2 === 0 ? 'right-image' : 'left-image'}`}>
            <div className="website-content">
              <div className="website-info">
                <h3 className="website-title">{website.title}</h3>
                <div className="website-tags">
                  {website.tags.map((tag, index) => (
                    <span key={index} className="website-tag">{tag}</span>
                  ))}
                </div>
                <p className="website-description">{website.description}</p>
                <a 
                  href={website.link} 
                  className={`website-link ${website.status === 'development' ? 'disabled' : ''}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {website.status === 'live' ? (
                    <>Visit Website <FaExternalLinkAlt /></>
                  ) : (
                    'Coming Soon'
                  )}
                </a>
              </div>
            </div>
            <div className="website-image-container">
              <div className="website-image-wrapper">
                <img 
                  src={website.image} 
                  alt={website.title} 
                  className="website-image"
                />
                {website.status === 'development' && (
                  <div className="development-overlay">
                    <span>Under Development</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Websites;
