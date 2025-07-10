import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';

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
      'bi-people',    // Couples Therapy
    ];
    return serviceIcons[index] || 'bi-people';
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
            <span>{item.name}</span>
            <i className="bi bi-chevron-down ms-2"></i>
          </a>
          {renderDropdown(item.dropdown, item.name === "Our Uniqueness")}
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
          <i className={`bi ${item.icon || 'bi-link'} me-1`}></i>
          {item.name}
        </NavHashLink>
      )}
    </li>
  );
};

export default NavItem;