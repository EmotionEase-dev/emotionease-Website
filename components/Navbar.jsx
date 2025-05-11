import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavItem from './NavItem';
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
    // { 
    //   name: "Resources", 
    //   dropdown: [
    //     { name: "Posts", href: "/resources/posts" },
    //     { name: "Blogs", href: "/resources/blogs" }
    //   ] 
    // },
    { name: "Contact Us", href: "/contact" },
    { name: "Follow us",
        dropdown: [
            { name: "Instagram", href: "https://www.instagram.com/emotionease/" },
            // { name: "Facebook", href: "https://www.facebook.com/emotionease/" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/emotionease/" },
            // { name: "Twitter", href: "https://twitter.com/emotionease" }
        ],
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
      <div className="container" style={{width: '100%'}}>
        <HashLink 
          className="navbar-brand fw-bold d-flex align-items-center" 
          to="/home#top"
          id="logo-brand"
        >
                      <span className="logo-text"> 
  <img src="../images/logo.png" alt="Logo" style={{ height: '80px', width: 'auto' }} />
</span>
          <span className="logo-text text-success">Emotionease</span>
        </HashLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          {/* <div className="d-flex ms-lg-3">
            <button className="btn btn-success btn-glow rounded-pill px-4">
              Get Started
            </button>
          </div> */}
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;