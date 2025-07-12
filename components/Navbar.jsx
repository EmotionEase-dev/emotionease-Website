import React, { useEffect } from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import logo from '../public/logo.png';
import './Navbar.css';

const NavItem = ({ item }) => {
  const handleNavClick = (e, href) => {
    if (!href.includes('#')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const getServiceIcon = (index, name) => {
    const serviceIcons = [
      'bi-heart-pulse',         // Stress Management
      'bi-briefcase',           // Work Stress
      'bi-people',              // Parent Coaching
      'bi-heart-fill',          // Premarital Counselling
      'bi-fire',                // Burnout Therapy
    ];
    return serviceIcons[index] || 'bi-file-earmark-text';
  };

  const getSocialIcon = (name) => {
    const socialIcons = {
      'instagram': 'bi-instagram',
      'facebook': 'bi-facebook',
      'linkedin': 'bi-linkedin',
      'twitter': 'bi-twitter',
      'youtube': 'bi-youtube',
      'whatsapp': 'bi-whatsapp'
    };
    return socialIcons[name.toLowerCase()] || 'bi-share';
  };

  const renderDropdown = (items, isUniqueness = false) => (
    <ul className={`dropdown-menu dropdown-menu-${isUniqueness ? 'uniqueness' : 'resources'} p-3`}>
      {items.map((subItem, idx) => (
        <li key={idx}>
          {subItem.href.startsWith('http') || subItem.external ? (
            <a 
              href={subItem.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="dropdown-item bg-light text-dark d-flex align-items-center py-2 px-3 rounded-3"
            >
              <div className={`icon-wrapper me-3 bg-${isUniqueness ? 'success' : 'success'} bg-opacity-10 p-2 rounded-circle`}>
                {item.name === "Follow Us" ? (
                  <i className={`bi ${getSocialIcon(subItem.name)} text-success`}></i>
                ) : (
                  <i className={`bi ${getServiceIcon(idx, subItem.name)} text-success`}></i>
                )}
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                <small className="text-muted">
                  {subItem.description || ""}
                </small>
              </div>
            </a>
          ) : (
            <NavHashLink 
              className="dropdown-item bg-light text-dark d-flex align-items-center py-2 px-3 rounded-3"
              to={subItem.href}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              onClick={(e) => handleNavClick(e, subItem.href)}
            >
              <div className={`icon-wrapper me-3 bg-${isUniqueness ? 'success' : 'success'} bg-opacity-10 p-2 rounded-circle`}>
                {isUniqueness ? (
                  idx === 0 ? (
                    <i className="bi bi-award text-success"></i>  // Benefits
                  ) : (
                    <i className="bi bi-chat-square-quote text-success"></i>  // Reviews
                  )
                ) : item.name === "Services" ? (
                  <i className={`bi ${getServiceIcon(idx, subItem.name)} text-success`}></i>
                ) : item.name === "Follow Us" ? (
                  <i className={`bi ${getSocialIcon(subItem.name)} text-success`}></i>
                ) : (
                  <i className="bi bi-file-earmark-text text-success"></i>
                )}
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                <small className="text-muted">
                  {subItem.description || ""}
                </small>
              </div>
            </NavHashLink>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <li className="nav-item dropdown mx-1">
      {item.dropdown ? (
        <>
          <a 
            className="nav-link dropdown-toggle d-flex align-items-center" 
            href="#" 
            id={`${item.name.replace(/\s+/g, '-')}-dropdown`}
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            {item.icon && <i className={`bi ${item.icon} me-1`}></i>}
            <span>{item.name}</span>
            <i className="bi bi-chevron-down ms-2"></i>
          </a>
          {renderDropdown(item.dropdown, item.name === "Uniqueness")}
        </>
      ) : (
        <NavHashLink 
          className="nav-link" 
          to={item.href}
          scroll={el => {
            if (item.href.includes('#')) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          onClick={(e) => handleNavClick(e, item.href)}
        >
          {item.icon && <i className={`bi ${item.icon} me-1`}></i>}
          {item.name}
        </NavHashLink>
      )}
    </li>
  );
};

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
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blog" },

    { 
      name: "Services", 
      dropdown: [
        { 
          name: "Depression & Anxiety", 
          href: "/StressManagement",
          description: "Learn to manage stress effectively",
          icon: "bi-heart-pulse"
        },
        { 
          name: "Work Stress", 
          href: "/WorkStress",
          description: "Deal with workplace stress and anxiety",
          icon: "bi-briefcase"
        },
        { 
          name: "Parent Coaching", 
          href: "/ParentCoaching",
          description: "Guidance for modern parenting challenges",
          icon: "bi-people"
        },
        { 
          name: "Premarital Counselling", 
          href: "/PremaritalCounselling",
          description: "Prepare for a strong marriage foundation",
          icon: "bi-people-fill"
        },
        { 
          name: "Burnout Therapy", 
          href: "/BurnoutTherapy",
          description: "Recover from professional burnout",
          icon: "bi-fire"
        },
        { 
          name: " Couple Therapy", 
          href: "/CoupleTherapy",
          description: "Rebuild connection and resolve conflicts",
          icon: "bi-people"
        },
      ] 
    },
    { 
      name: "Uniqueness", 
      dropdown: [
        { 
          name: "Benefits", 
          description: "Why choose EmotionEase?",
          href: "/home#uniqueness-section",
          icon: "bi-award"
        },
        { 
          name: "Reviews", 
          description: "What our clients say",
          href: "/home#review-section",
          icon: "bi-chat-square-quote"
        },
      ] 
    },
    { 
      name: "Programs", 
      href: "/programs",
    },
    { 
      name: "Follow Us",
      dropdown: [
        { 
          name: "Instagram", 
          href: "https://www.instagram.com/emotionease/", 
          external: true,
          icon: "bi-instagram",
          description: "See our daily updates and tips"
        },
        // { 
        //   name: "Facebook", 
        //   href: "https://facebook.com/emotionease", 
        //   external: true,
        //   icon: "bi-facebook",
        //   description: "Connect with our community"
        // },
        { 
          name: "LinkedIn", 
          href: "https://www.linkedin.com/company/emotionease/", 
          external: true,
          icon: "bi-linkedin",
          description: "Professional network and articles"
        },
        // { 
        //   name: "Twitter", 
        //   href: "https://twitter.com/emotionease", 
        //   external: true,
        //   icon: "bi-twitter",
        //   description: "Quick mental health insights"
        // },
        // { 
        //   name: "YouTube", 
        //   href: "https://youtube.com/emotionease", 
        //   external: true,
        //   icon: "bi-youtube",
        //   description: "Watch our therapy sessions"
        // },
        // { 
        //   name: "WhatsApp", 
        //   href: "https://wa.me/yournumber", 
        //   external: true,
        //   icon: "bi-whatsapp",
        //   description: "Chat with us directly"
        // }
      ],
    },
    { 
      name: "Contact", 
      href: "/contact",
    },
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