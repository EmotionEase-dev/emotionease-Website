import React, { useEffect } from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import NavItem from './NavItem';
import logo from '../public/logo.png';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.classList.remove('scrolled');
        navbar.style.backdropFilter = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: "Home", href: "/home", onClick: scrollToTop }, 
    { name: "About Us", href: "/about", onClick: scrollToTop },
    // { name: "Blogs", href: "/blogs", onClick: scrollToTop },
    { 
      name: "Our Uniqueness", 
      dropdown: [
        { name: "Benefits", href: "/home#uniqueness-section" },
        { name: "Reviews", href: "/home#review-section" },
      ] 
    },
    { name: "Curated Programs", href: "/programs", onClick: scrollToTop },
    { 
      name: "Follow us",
      dropdown: [
        { name: "Instagram", href: "https://www.instagram.com/emotionease/", external: true },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/emotionease/", external: true },
      ],
    },
    { name: "Contact Us", href: "/contact", onClick: scrollToTop },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <HashLink 
          className="navbar-brand d-flex align-items-center gap-2" 
          to="/home#top"
          id="logo-brand"
          style={{ textDecoration: 'none' }}
          onClick={scrollToTop}
        >
          <img 
            src={logo} 
            alt="EmotionEase" 
            style={{ height: '60px', width: 'auto' }} 
            className="me-2"
          />
          <div className="d-flex flex-column">
            <span className="fw-bold fs-4 text-success">EmotionEase</span>
            <small className="text-dark" style={{ fontSize: '0.9rem', marginTop: '-4px', fontWeight: 'bold' }}>
              Empowering Mental Health
            </small>
          </div>
        </HashLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;