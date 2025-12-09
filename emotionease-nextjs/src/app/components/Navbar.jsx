'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
          navbar.style.backdropFilter = 'blur(10px)';
        } else {
          navbar.classList.remove('scrolled');
          navbar.style.backdropFilter = 'none';
        }
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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blog" },
    { 
      name: "Services", 
      dropdown: [
        { 
          name: "Depression & Anxiety", 
          href: "/stress-depression-anxiety-management-online",
          description: "Learn to manage stress effectively",
          icon: "bi-heart-pulse"
        },
        { 
          name: "Work Stress", 
          href: "/work-stress-management-therapy",
          description: "Deal with workplace stress and anxiety",
          icon: "bi-briefcase"
        },
        { 
          name: "Parent Coaching", 
          href: "/parent-coaching",
          description: "Guidance for modern parenting challenges",
          icon: "bi-people"
        },
        { 
          name: "Premarital Counseling", 
          href: "/premarital-counseling",
          description: "Prepare for a strong marriage foundation",
          icon: "bi-people-fill"
        },
        { 
          name: "Burnout Therapy", 
          href: "/burnout-therapy",
          description: "Recover from professional burnout",
          icon: "bi-fire"
        },
        { 
          name: "Couples Therapy", 
          href: "/couple-therapy",
          description: "Rebuild connection and resolve conflicts",
          icon: "bi-people"
        },
        { 
          name: "Corporate Wellness", 
          href: "/corporate-wellness",
          description: "Thriving business with prime performance",
          icon: "bi-building"
        },
      ] 
    },
    { 
      name: "Uniqueness", 
      dropdown: [
        { 
          name: "Benefits", 
          description: "Why choose EmotionEase?",
          href: "/#uniqueness-section",
          icon: "bi-award"
        },
        { 
          name: "Reviews", 
          description: "What our clients say",
          href: "/#review-section",
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
        { 
          name: "LinkedIn", 
          href: "https://www.linkedin.com/company/emotionease/", 
          external: true,
          icon: "bi-linkedin",
          description: "Professional network and articles"
        },
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
        <Link 
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          id="logo-brand"
          style={{ textDecoration: 'none' }}
          onClick={scrollToTop}
        >
          <Image 
            src="/logo.webp"
            alt="EmotionEase" 
            width={60}
            height={60}
            priority
            className="me-2"
          />
          <div className="d-flex flex-column">
            <span className="fw-bold fs-4 text-success">EmotionEase</span>
            <small className="text-dark" style={{ fontSize: '0.9rem', marginTop: '-4px', fontWeight: 'bold' }}>
              Empowering Mental Health
            </small>
          </div>
        </Link>
        
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
        
        {/* FIXED: Added justify-content-end for right alignment */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {/* FIXED: Added align-items-center for vertical centering */}
          <ul className="navbar-nav align-items-center">
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














