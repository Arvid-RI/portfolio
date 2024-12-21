import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './errorpage.css';

const FloatingElement = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }}
  >
    {children}
  </motion.div>
);

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <FloatingElement delay={0.2}>
          <div className="error-header">
            <h1>404</h1>
            <p>Oops! Looks like you've ventured into uncharted territory</p>
          </div>
        </FloatingElement>

        <div className="navigation-links">
          <FloatingElement delay={0.4}>
            <Link to="/" className="nav-link home">
              <FaHome /> Return Home
            </Link>
          </FloatingElement>
          <FloatingElement delay={0.5}>
            <Link to="/projects" className="nav-link explore">
              <FaCompass /> Explore Projects
            </Link>
          </FloatingElement>
        </div>
      </div>

      <div className="abstract-background">
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="floating-shape"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="glitch-effect">
        <motion.div 
          className="glitch-line"
          animate={{
            x: [-1000, window.innerWidth],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </div>

      <motion.div 
        className="compass-decoration"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="compass-inner" />
      </motion.div>
    </div>
  );
};

export default ErrorPage;
