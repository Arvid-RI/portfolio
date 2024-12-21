import React from 'react';
import { FaMusic } from 'react-icons/fa';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './music.css';

const Music = () => {
  return (
    <div className="music-page">
      <Navbar />
      
      <section className="music-hero">
        <div className="vinyl-container">
          <div className="vinyl-animation">
            <div className="vinyl-disc">
              <div className="vinyl-grooves"></div>
              <div className="vinyl-center">
                <FaMusic className="center-icon" />
              </div>
            </div>
          </div>
          <div className="status-text">
            <h1>Music In Progress</h1>
            <p>Coming Soon • 2024</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Music;
