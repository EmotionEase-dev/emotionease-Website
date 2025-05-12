import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
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

  const navItems = [
    { name: "Home", href: "/home" }, 
    { name: "About Us", href: "/about" },
    { 
      name: "Our Uniqueness", 
      dropdown: [
        { name: "Benefits", href: "/home#uniqueness-section" },
        { name: "Reviews", href: "/home#review-section" },
      ] 
    },
    { name: "Curated Programs", href: "/programs" },
    { 
      name: "Follow us",
      dropdown: [
        { name: "Instagram", href: "https://www.instagram.com/emotionease/" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/emotionease/" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <HashLink 
          className="navbar-brand fw-bold fs-3 d-flex align-items-center" 
          to="/home#top"
          id="logo-brand"
        >
          <span className="logo-text me-2">
            <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
          </span>
          <span className="text-success">Emotionease</span>
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