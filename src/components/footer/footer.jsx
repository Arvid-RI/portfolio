import React from 'react';
import { 
  FaInstagram, 
  FaGithub, 
  FaLinkedin, 
  FaTiktok, 
  FaFacebook,
  FaYoutube,
  FaHeart,
  FaCode,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>

      <div className="footer-content">
        <div className="footer-main">
          <div className="brand">
            <h3>Arvid RI</h3>
            <p className="tagline">Transforming Ideas Into Digital Reality</p>
          </div>
          
          <div className="footer-center">
            <div className="social-links">
              <a href="mailto:arvidriworkz@gmail.com" className="social-link footer-email-link">
                <FaEnvelope />
                <span>arvidriworkz@gmail.com</span>
              </a>
              <div className="social-icons">
                <a href="https://www.instagram.com/arvidriworkz/#" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://github.com/Arvid-RI" className="social-icon" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/arvid-ri-944551330/" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://www.tiktok.com/@arvid_ri_workz" className="social-icon" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61563435403689" className="social-icon" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.youtube.com/channel/UCkzqohosg_0Fzk31kCEAD_g" className="social-icon" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <div className="tech-items">
              <span className="tech-item">React & Vite</span>
              <span className="tech-item">Cloudfare</span>
              <span className="tech-item">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="made-with">
            <span>Crafted with</span>
            <FaHeart className="heart-icon" />
            <span>and</span>
            <FaCode className="code-icon" />
          </div>
          <div className="quick-links">
            <a href="/privacy">Privacy</a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Arvid RI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
