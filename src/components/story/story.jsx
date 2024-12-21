import React, { useEffect, useRef } from 'react';
import '../story/story.css'

const StoryPart = ({ imageUrl, elementIcon, title, description, reverse }) => {
  const partRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (partRef.current) {
      observer.observe(partRef.current);
    }

    return () => {
      if (partRef.current) {
        observer.unobserve(partRef.current);
      }
    };
  }, []);

  return (
    <div ref={partRef} className={`story-part ${reverse ? 'reverse' : ''}`}>
      <div className="image-paint">
        <img src={imageUrl} alt={title} className="story-image" />
        <span className="element-icon">{elementIcon}</span>
      </div>
      <div className="text-box">
        <h3 className="story-title">{title}</h3>
        <p className="story-description">{description}</p>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <section className="brand-story">
      <div className="brand-container">
        <h2 className="brand-header">The Essence of Aethereal Elegance</h2>
        <p className="brand-intro">
          "We believe in the harmony between nature and craftsmanship. Our collections reflect a symbiosis between elements, creating a luxurious experience that goes beyond fashion."
        </p>

        <StoryPart
          imageUrl="/Haerin1.png"
          title="💨 Air - Freedom in Motion"
          description="Inspired by the breeze, our garments capture movement, lightness, and the infinite beauty of freedom."
        />

        <StoryPart
          imageUrl="/Haerin1.png"
          title="🌿 Earth - Grounded Elegance"
          description="Our designs embrace the raw beauty of nature, bringing stability and refined sophistication to every piece."
          reverse
        />

        <StoryPart
          imageUrl="/Haerin1.png"
          title="✨ Light - Radiance in Luxury"
          description="Shimmering fabrics and timeless designs reflect the beauty of light, making each moment feel eternal."
        />
      </div>
    </section>
  );
};

export default Story;