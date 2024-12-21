import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/music', label: 'Music' },
    { path: '/designs', label: 'Designs' },
    { path: '/contents', label: 'Contents' },
    { path: '/projects', label: 'Projects' }
  ];

  const handleLogoClick = (e) => {
    if (location.pathname === '/home' || location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrollDirection === 'down' ? 'hide' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="/" 
          className="logo"
          onClick={handleLogoClick}
          aria-label="Go to homepage"
        >
          <h1>Arvid RI</h1>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
              style={{"--i": index}}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
