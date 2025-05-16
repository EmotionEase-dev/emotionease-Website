import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';

const NavItem = ({ item }) => {
  const handleNavClick = (e, href) => {
    // Only scroll to top for non-hash links
    if (!href.includes('#')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const renderDropdown = (items, isUniqueness = false) => (
    <ul className={`dropdown-menu dropdown-menu-${isUniqueness ? 'uniqueness' : 'resources'} p-3`}>
      {items.map((subItem, idx) => (
        <li key={idx}>
          {subItem.href.startsWith('http') ? (
            <a 
              href={subItem.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="dropdown-item bg-light text-dark d-flex align-items-center py-2 px-3 rounded-3"
            >
              <div className={`icon-wrapper me-3 bg-${isUniqueness ? 'success' : 'success'} bg-opacity-10 p-2 rounded-circle`}>
                {isUniqueness ? (
                  idx === 0 ? (
                    <i className="bi bi-stars text-success"></i>
                  ) : (
                    <i className="bi bi-chat-square-quote text-success"></i>
                  )
                ) : item.name === "Follow Us" ? (
                  // Special styling for Follow Us icons
                  <i className={`bi bi-${subItem.icon} text-success`}></i>
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
                  ) : item.name === "Follow Us" ? (
                    `Connect with us on ${subItem.name}`
                  ) : (
                    idx === 0 ? "Latest articles and updates" : "In-depth stories and guides"
                  )}
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
                    <i className="bi bi-stars text-success"></i>
                  ) : (
                    <i className="bi bi-chat-square-quote text-success"></i>
                  )
                ) : item.name === "Follow Us" ? (
                  // Special styling for Follow Us icons
                  <i className={`bi bi-${subItem.icon} text-success`}></i>
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
                  ) : item.name === "Follow Us" ? (
                    `Connect with us on ${subItem.name}`
                  ) : (
                    idx === 0 ? "Latest articles and updates" : "In-depth stories and guides"
                  )}
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
          {item.name}
        </NavHashLink>
      )}
    </li>
  );
};

export default NavItem;