// NavBar.jsx
import React from "react";
import "./img-navbar.css"; // We'll add some basic styling

const ImgNavbar = ({ imgNavItems }) => {
  return (
    <nav className="img-navbar">
      <ul className="img-nav-list">
        {imgNavItems &&
          imgNavItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.link} className="nav-link">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="nav-image"
                />
                <span className="img-nav-title">{item.title}</span>
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default ImgNavbar;
