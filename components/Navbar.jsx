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
    { name: "Blogs", href: "/blogs" },
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
  className="navbar-brand d-flex align-items-center gap-2" 
  to="/home#top"
  id="logo-brand"
  style={{ textDecoration: 'none' }}
>
  <img 
    src={logo} 
    alt="Logo" 
    style={{ height: '60px', width: 'auto' }} 
    className="me-2"
  />
  <div className="d-flex flex-column">
    <span className="fw-bold fs-4 text-success">Emotionease</span>
    <small className="text-muted" style={{ fontSize: '0.9rem', marginTop: '-4px' }}>
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