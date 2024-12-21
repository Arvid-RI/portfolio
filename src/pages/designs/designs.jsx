import React, { useEffect, useState } from 'react';
import { 
  FaSpinner
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './designs.css';

const LoadingSpinner = () => (
  <div className="loading-container">
    <FaSpinner className="loading-spinner" />
    <p>Loading creative space...</p>
  </div>
);

const DesignElement = ({ Icon, text, delay }) => (
  <motion.div 
    className="design-element"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
  >
    <Icon className="element-icon" />
    <span>{text}</span>
  </motion.div>
);

const Designs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeColor, setActiveColor] = useState('#6c5ce7');
  const [canvasRotation, setCanvasRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const colors = ['#6c5ce7', '#00cec9', '#fd79a8', '#00b894'];
    const interval = setInterval(() => {
      setActiveColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCanvasHover = () => {
    setCanvasRotation(prev => prev + 5);
  };

  return (
    <div className="designs-page">
      <Navbar />
      
      <AnimatePresence>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <motion.main 
            className="designs-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="designs-header">
              <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Creative Design Studio
              </motion.h1>
              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Where imagination meets innovation
              </motion.p>
            </div>

            <div className="canvas-section">
              <motion.div 
                className="canvas-3d"
                style={{ 
                  '--active-color': activeColor,
                  transform: `perspective(1000px) rotateY(${canvasRotation}deg)`
                }}
                onHover={handleCanvasHover}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="canvas-frame">
                  <div className="canvas-surface">
                    <div className="paint-layer">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className={`paint-stroke-${i + 1}`}
                          animate={{ 
                            scale: [1, 1.3, 1.5],
                            rotate: [0, 5, 10]
                          }}
                          transition={{ 
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="canvas-stand">
                  <div className="stand-leg left"></div>
                  <div className="stand-leg right"></div>
                  <div className="stand-base"></div>
                </div>
              </motion.div>

              
            </div>

            <motion.div 
              className="progress-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3>Designs are being Crafted</h3>
              <div className="progress-indicator">
                <span className="dot"></span>
                <span>Coming Soon • 2024</span>
                <span className="dot"></span>
              </div>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Designs;
