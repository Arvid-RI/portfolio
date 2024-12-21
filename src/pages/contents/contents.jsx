import React from 'react';
import { 
  FaPencilAlt, 
  FaBook, 
  FaParagraph, 
  FaNewspaper, 
  FaFeatherAlt 
} from 'react-icons/fa';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './contents.css';

const AnimatedText = ({ text }) => (
  <div className="animated-text">
    <div className="lines">
      <div className="text">{text}</div>
      <div className="cursor"></div>
    </div>
  </div>
);

const FloatingIcon = ({ Icon, className, delay }) => (
  <Icon className={`floating-icon ${className}`} style={{ animationDelay: `${delay}s` }} />
);

const Contents = () => {
  return (
    <div className="contents-page">
      <Navbar />
      
      <main className="contents-container">
        <div className="content-wrapper">
          <div className="typewriter-container">
            <div className="paper">
              <AnimatedText text="Building amazing content..." />
            </div>

            <div className="floating-elements">
              <FloatingIcon Icon={FaPencilAlt} className="pencil" delay={0} />
              <FloatingIcon Icon={FaBook} className="book" delay={0.5} />
              <FloatingIcon Icon={FaParagraph} className="paragraph" delay={1} />
              <FloatingIcon Icon={FaNewspaper} className="newspaper" delay={1.5} />
              <FloatingIcon Icon={FaFeatherAlt} className="feather" delay={2} />
            </div>
          </div>

          <div className="status-message">
            <h1>Content Creation in Progress</h1>
            <p>Crafting compelling stories, articles, and creative pieces</p>
            <div className="divider"></div>
            <div className="coming-soon">
              <span className="dot"></span>
              Coming Soon • 2024
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contents;
