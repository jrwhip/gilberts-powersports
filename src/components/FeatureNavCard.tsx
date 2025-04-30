'use client'

import Image from 'next/image'
import { useState } from 'react'

// Define interfaces for type safety
interface Subitem {
  name: string
  image: string
  description: string
}

interface Product {
  title: string
  productLink: string
  titleFont?: string
  titleColor?: string
  subitems: Subitem[]
}

interface FeatureNavCardProps {
  product: Product
}

const FeatureNavCard: React.FC<FeatureNavCardProps> = ({ product }) => {
  // Destructure product data with type safety
  const { title, productLink, titleFont, titleColor, subitems } = product

  // Use first subitem as initial state
  const [activeSubitem, setActiveSubitem] = useState<Subitem>(subitems[0])

  // Handler for subitem button clicks
  const handleSubitemClick = (subitem: Subitem) => {
    setActiveSubitem(subitem)
  }

  return (
    <>
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image container with fixed aspect ratio */}
        <div className="relative h-0 overflow-hidden pb-[66.67%]">
          <a href={productLink} className="absolute inset-0 block">
            <Image
              src={activeSubitem.image}
              alt={`${title} ${activeSubitem.name}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </a>
        </div>

        {/* Title */}
        <a
          href={productLink}
          className="mt-4 block px-4 no-underline hover:underline"
        >
          <h2
            className="text-center text-xl font-bold"
            style={{
              fontFamily: titleFont || 'inherit',
              color: titleColor || '#DA291C',
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
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
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
          <p className="h-20 overflow-hidden text-sm leading-relaxed text-gray-600">
            {activeSubitem.description}
          </p>
        </div>
      </div>

      <style jsx global>{`
        .feature-nav-card {
          width: 300px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .feature-nav-card:hover {
          transform: translateY(-4px);
        }

        .feature-nav-image-link {
          display: block;
          width: 300px; /* Explicitly set to match image */
          height: 200px; /* Explicitly set to match image */
        }

        .feature-nav-image {
          width: 100%; /* Use full width of parent (300px) */
          height: 100%; /* Use full height of parent (200px) */
          object-fit: contain; /* Show full image, no cropping */
          transition: opacity 0.3s ease;
        }

        .feature-nav-title-link {
          text-decoration: none;
        }

        .feature-nav-title {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
          margin: 16px 0;
        }

        .feature-nav-buttons {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 0 16px;
        }

        .feature-nav-button {
          padding: 6px 12px;
          font-size: 1rem;
          background-color: #f3f4f6;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .feature-nav-button:hover {
          background-color: #d1d5db;
        }

        .feature-nav-description {
          height: 100px;
          margin: 16px;
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  )
}

export default FeatureNavCard
