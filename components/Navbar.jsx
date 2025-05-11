import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo.png';
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
    { name: "Contact Us", href: "/contact" }
  ];

  const NavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderDropdown = (items, isUniqueness = false) => (
      <ul 
        className={`dropdown-menu dropdown-menu-${isUniqueness ? 'uniqueness' : 'resources'} p-3`}
        style={{ display: isOpen ? 'block' : undefined }}
      >
        {items.map((subItem, idx) => (
          <li key={idx}>
            {subItem.href.startsWith('http') ? (
              <a 
                href={subItem.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="dropdown-item d-flex align-items-center py-2 px-3 rounded-3"
              >
                <div className={`icon-wrapper me-3 bg-${isUniqueness ? 'success' : 'success'} bg-opacity-10 p-2 rounded-circle`}>
                  {isUniqueness ? (
                    idx === 0 ? (
                      <i className="bi bi-stars text-success"></i>
                    ) : (
                      <i className="bi bi-chat-square-quote text-success"></i>
                    )
                  ) : (
                    idx === 0 ? (
                      <i className="bi bi-file-earmark-post text-success"></i>
                    ) : (
                      <i className="bi bi-journal-text text-success"></i>
                    )
                  )}
                </div>
                <div>
                  <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                  <small className="text-muted">
                    {isUniqueness ? (
                      idx === 0 ? "Discover what sets us apart" : "See what others say about us"
                    ) : (
                      idx === 0 ? "Latest articles and updates" : "In-depth stories and guides"
                    )}
                  </small>
                </div>
              </a>
            ) : (
              <HashLink 
                className="dropdown-item d-flex align-items-center py-2 px-3 rounded-3"
                to={subItem.href}
                smooth
                onClick={() => setIsOpen(false)}
              >
                <div className={`icon-wrapper me-3 bg-${isUniqueness ? 'success' : 'success'} bg-opacity-10 p-2 rounded-circle`}>
                  {isUniqueness ? (
                    idx === 0 ? (
                      <i className="bi bi-stars text-success"></i>
                    ) : (
                      <i className="bi bi-chat-square-quote text-success"></i>
                    )
                  ) : (
                    idx === 0 ? (
                      <i className="bi bi-file-earmark-post text-success"></i>
                    ) : (
                      <i className="bi bi-journal-text text-success"></i>
                    )
                  )}
                </div>
                <div>
                  <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                  <small className="text-muted">
                    {isUniqueness ? (
                      idx === 0 ? "Discover what sets us apart" : "See what others say about us"
                    ) : (
                      idx === 0 ? "Latest articles and updates" : "In-depth stories and guides"
                    )}
                  </small>
                </div>
              </HashLink>
            )}
          </li>
        ))}
      </ul>
    );

    return (
      <li 
        className={`nav-item dropdown mx-1 dropdown-hover ${isOpen ? 'show' : ''}`}
        onMouseEnter={() => window.innerWidth > 992 && setIsOpen(true)}
        onMouseLeave={() => window.innerWidth > 992 && setIsOpen(false)}
      >
        {item.dropdown ? (
          <>
            <a 
              className="nav-link dropdown-toggle d-flex align-items-center" 
              href="#" 
              id={`${item.name.replace(/\s+/g, '-')}-dropdown`}
              role="button" 
              aria-expanded={isOpen}
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }
              }}
            >
              <span>{item.name}</span>
              <i className="bi bi-chevron-down ms-2"></i>
            </a>
            {renderDropdown(item.dropdown, item.name === "Our Uniqueness")}
          </>
        ) : (
          <HashLink 
            className="nav-link" 
            to={item.href} 
            smooth
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </HashLink>
        )}
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
      <div className="container" style={{width: '100%'}}>
        <HashLink 
          className="navbar-brand fw-bold d-flex align-items-center" 
          to="/home#top"
          id="logo-brand"
        >
          <span className="logo-text"> 
            <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
          </span>
          <span className="logo-text text-success">Emotionease</span>
        </HashLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
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
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;