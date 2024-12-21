import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './intro.css';

const DynamicLine = memo(({ text, animationKey }) => (
  <span key={animationKey} className="dynamic-line">{text}</span>
));

DynamicLine.propTypes = {
  text: PropTypes.string.isRequired,
  animationKey: PropTypes.number.isRequired,
};

const Intro = () => {
  const [dynamicLine, setDynamicLine] = useState('');
  const [animationKey, setAnimationKey] = useState(0);

  const dynamicLines = [
    "I Transform Ideas To Reality",
    "If My Works Don't Please You Then You Can Find Someone Else",
    "I Create Designs Worth Mentioning",
    "I Work To Bring You To The Top",
    "I'll Look For Passion To Work With But Take Money To Deal With",
    "We Can Either Be The Best Or Be Nothing"
  ];

  useEffect(() => {
    let mounted = true;
    
    const intervalId = setInterval(() => {
      if (mounted) {
        const randomIndex = Math.floor(Math.random() * dynamicLines.length);
        setDynamicLine(dynamicLines[randomIndex]);
        setAnimationKey(prev => prev + 1);
      }
    }, 5000);

    return () => {
      mounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Arvid RI - Young & Ambitious Developer</title>
        <meta name="description" content="Professional portfolio of Arvid RI - Coder, Social Media Handler, Crypto & Stock Analyzer, Copy and Script Writer." />
        <meta name="keywords" content="Arvid RI, web development, coding, crypto analysis, stock analysis, copywriting" />
        <meta property="og:title" content="Arvid RI - Professional Portfolio" />
        <meta property="og:description" content="Professional portfolio of Arvid RI - Showcasing expertise in coding, analysis, and content creation." />
        <meta property="og:image" content="/Main Image-1.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section className="intro" aria-label="Introduction">
        <div className="intro-image">
          <img 
            src="/Main-Image-1.jpg" 
            alt="Arvid RI - Professional Portrait" 
            loading="eager"
            width="800"
            height="600"
          />
          <div className="image-overlay" aria-hidden="true"></div>
        </div>
        <div className="intro-content">
          <div className="content-wrapper">
            <h1>Arvid RI</h1>
            <p className="title">
              Young & Ambitious Coder, SM Handler, Crypto & Stock Analyzer, Copy and Script Writer.
            </p>
            <div className="dynamic-line-container" aria-live="polite">
              <DynamicLine text={dynamicLine} animationKey={animationKey} />
            </div>
            <nav className="main-cta-container">
              <a 
                href="#portfolio" 
                className="cta-button"
                role="button"
                aria-label="Explore My Work"
              >
                Explore My Work
              </a>
              <a 
                href="#contact" 
                className="cta-link"
                aria-label="Get in Touch"
              >
                Get in Touch
              </a>
            </nav>
          </div>
          <div className="scroll-line" aria-hidden="true"></div>
        </div>
      </section>
    </>
  );
};

export default memo(Intro);