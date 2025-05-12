import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavItem = ({ item }) => {
  const renderDropdown = (items, isUniqueness = false) => (
    <ul className={`dropdown-menu dropdown-menu-${isUniqueness ? 'uniqueness' : 'resources'} p-3`}>
      {items.map((subItem, idx) => (
        <li key={idx}>
          {subItem.href.startsWith('http') ? (
            <a 
              href={subItem.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="dropdown-item d-flex align-items-center py-2 px-3 rounded-3 b-10"
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
    <li className="nav-item dropdown mx-1 dropdown-hover">
      {item.dropdown ? (
        <>
          <a 
            className="nav-link dropdown-toggle d-flex align-items-center" 
            href="#" 
            id={`${item.name.replace(/\s+/g, '-')}-dropdown`}
            role="button" 
            aria-expanded="false"
          >
            <span>{item.name}</span>
            <i className="bi bi-chevron-down ms-2"></i>
          </a>
          {renderDropdown(item.dropdown, item.name === "Our Uniqueness")}
        </>
      ) : (
        <HashLink className="nav-link" to={item.href} smooth>
          {item.name}
        </HashLink>
      )}

      
    </li>
  );
};

export default NavItem;