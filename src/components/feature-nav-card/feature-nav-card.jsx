import React, { useState } from 'react';
import './feature-nav-card.css';

const FeatureNavCard = ({
  product, // Single object with all data
}) => {
  // Destructure product data
  const { title, productLink, titleFont, titleColor, subitems } = product;

  // Use first subitem as initial state
  const [currentImage, setCurrentImage] = useState(subitems[0].image);
  const [currentDescription, setCurrentDescription] = useState(subitems[0].description);

  // Handler for subitem button clicks
  const handleSubitemClick = (subitem) => {
    setCurrentImage(subitem.image);
    setCurrentDescription(subitem.description);
  };

  return (
    <div className="feature-nav-card">
      {/* Image (clickable) */}
      <a href={productLink} className="feature-nav-image-link">
        <img
          src={currentImage}
          alt={`${title} image`}
          className="feature-nav-image"
        />
      </a>

      {/* Title (clickable) */}
      <a href={productLink} className="feature-nav-title-link">
        <h2
          className="feature-nav-title"
          style={{ fontFamily: titleFont, color: titleColor }}
        >
          {title}
        </h2>
      </a>

      {/* Subitem Buttons */}
      <div className="feature-nav-buttons">
        {subitems.map((subitem, index) => (
          <button
            key={index}
            className="feature-nav-button"
            onClick={() => handleSubitemClick(subitem)}
          >
            {subitem.name}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="feature-nav-description">{currentDescription}</p>
    </div>
  );
};

export default FeatureNavCard;