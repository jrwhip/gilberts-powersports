import React, { useState } from 'react';

const FeatureNavCard = ({ product }) => {
  // Destructure product data
  const { title, productLink, titleFont, titleColor, subitems } = product;

  // Use first subitem as initial state
  const [activeSubitem, setActiveSubitem] = useState(subitems[0]);

  // Handler for subitem button clicks
  const handleSubitemClick = (subitem) => {
    setActiveSubitem(subitem);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image container with fixed aspect ratio */}
      <div className="relative h-0 pb-[66.67%] overflow-hidden">
        <a href={productLink} className="block absolute inset-0">
          <img
            src={activeSubitem.image}
            alt={`${title} ${activeSubitem.name}`}
            className="absolute w-full transition-transform duration-500 hover:scale-105"
          />
        </a>
      </div>

      {/* Title */}
      <a 
        href={productLink} 
        className="block mt-4 px-4 no-underline hover:underline"
      >
        <h2
          className="text-xl font-bold text-center"
          style={{ 
            fontFamily: titleFont || 'inherit', 
            color: titleColor || '#DA291C' 
          }}
        >
          {title}
        </h2>
      </a>

      {/* Subitem Buttons */}
      <div className="flex flex-wrap justify-center gap-2 px-4 py-3">
        {subitems.map((subitem, index) => (
          <button
            key={index}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeSubitem.name === subitem.name
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => handleSubitemClick(subitem)}
          >
            {subitem.name}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="px-4 pb-4">
        <p className="h-20 text-gray-600 text-sm leading-relaxed overflow-hidden">
          {activeSubitem.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureNavCard;