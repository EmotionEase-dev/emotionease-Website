'use client'

import React from 'react';
import Link from 'next/link';

const NavItem = ({ item }) => {
  const handleNavClick = (e, href) => {
    if (!href.includes('#')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHashClick = (e, href) => {
    e.preventDefault();
    const hash = href.split('#')[1];
    if (hash) {
      scrollToSection(hash);
    }
  };

  const renderDropdown = (items, isUniqueness = false) => (
    <ul className={`dropdown-menu dropdown-menu-${isUniqueness ? 'uniqueness' : 'services'} p-3`}>
      {items.map((subItem, idx) => (
        <li key={idx}>
          {subItem.href?.startsWith('http') || subItem.external ? (
            <a
              href={subItem.href}
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item bg-light text-dark d-flex align-items-center py-2 px-3 rounded-3"
            >
              <div className="icon-wrapper me-3 bg-success bg-opacity-10 p-2 rounded-circle">
                <i className={`bi ${subItem.icon || 'bi-link'} text-success`}></i>
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                {subItem.description && (
                  <small className="text-muted">{subItem.description}</small>
                )}
              </div>
            </a>
          ) : subItem.href?.includes('#') ? (
            <a
              href={subItem.href}
              className="dropdown-item bg-light text-dark d-flex align-items-center py-2 px-3 rounded-3"
              onClick={(e) => handleHashClick(e, subItem.href)}
            >
              <div className="icon-wrapper me-3 bg-success bg-opacity-10 p-2 rounded-circle">
                <i className={`bi ${subItem.icon || 'bi-link'} text-success`}></i>
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                {subItem.description && (
                  <small className="text-muted">{subItem.description}</small>
                )}
              </div>
            </a>
          ) : (
            <Link
              href={subItem.href}
              className="dropdown-item bg-light text-dark d-flex align-items-center py-2 px-3 rounded-3"
              onClick={(e) => handleNavClick(e, subItem.href)}
            >
              <div className="icon-wrapper me-3 bg-success bg-opacity-10 p-2 rounded-circle">
                <i className={`bi ${subItem.icon || 'bi-link'} text-success`}></i>
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">{subItem.name}</h6>
                {subItem.description && (
                  <small className="text-muted">{subItem.description}</small>
                )}
              </div>
            </Link>
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
            <span>{item.name}</span>
            <i className="bi bi-chevron-down ms-2"></i>
          </a>
          {renderDropdown(item.dropdown, item.name === "Uniqueness")}
        </>
      ) : item.href?.includes('#') ? (
        <a
          href={item.href}
          className="nav-link"
          onClick={(e) => handleHashClick(e, item.href)}
        >
          {item.name}
        </a>
      ) : (
        <Link
          href={item.href}
          className="nav-link"
          onClick={(e) => handleNavClick(e, item.href)}
        >
          {item.name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;