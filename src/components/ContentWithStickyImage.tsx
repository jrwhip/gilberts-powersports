'use client';

import React from "react";
import Image from "next/image";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

// Type definitions
interface Feature {
  icon?: typeof CloudArrowUpIcon;
  title: string;
  description: string;
}

interface FeatureItemProps {
  icon: typeof CloudArrowUpIcon;
  title: string;
  description: string;
  highlightColor: string;
}

interface ContentWithStickyImageProps {
  imageSrc: string;
  imageAlt: string;
  eyebrowText?: string;
  title?: string;
  subtitle?: string;
  introParagraph?: string;
  features?: Feature[];
  mainContent?: string;
  secondaryTitle?: string;
  secondaryContent?: string;
  highlightColor?: string;
}

// Feature item component to make the list items reusable
const FeatureItem: React.FC<FeatureItemProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  highlightColor 
}) => (
  <li className="flex gap-x-3">
    <Icon
      aria-hidden={true}
      className="mt-1 size-5 flex-none"
      style={{ color: highlightColor }} // Use inline style for dynamic color
    />
    <span>
      <strong className="font-semibold text-gray-900">{title}</strong>{" "}
      {description}
    </span>
  </li>
);

const ContentWithStickyImage: React.FC<ContentWithStickyImageProps> = ({
  imageSrc,
  imageAlt,
  eyebrowText = "Deploy faster",
  title = "A better workflow",
  subtitle,
  introParagraph,
  features = [],
  mainContent,
  secondaryTitle,
  secondaryContent,
  highlightColor = "#DA291C", // Default to your requested color
}) => {
  // Default feature icons if not provided
  const defaultIcons = [CloudArrowUpIcon, LockClosedIcon, ServerIcon];

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Header section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p
                className="text-base/7 font-semibold"
                style={{ color: highlightColor }} // Use inline style for dynamic color
              >
                {eyebrowText}
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 text-xl/8 text-gray-700">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
        {/* Sticky Image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt={imageAlt}
            src={imageSrc}
            width={912} // 57rem * 16px = 912px
            height={608} // Adjust based on your image aspect ratio
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
            priority // Add priority for above-the-fold images
          />
        </div>
        {/* Main content */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              {introParagraph && <p>{introParagraph}</p>}
              {features.length > 0 && (
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      icon={
                        feature.icon ||
                        defaultIcons[index % defaultIcons.length]
                      }
                      title={feature.title}
                      description={feature.description}
                      highlightColor={highlightColor}
                    />
                  ))}
                </ul>
              )}
              {mainContent && <p className="mt-8">{mainContent}</p>}
              {secondaryTitle && (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  {secondaryTitle}
                </h2>
              )}
              {secondaryContent && <p className="mt-6">{secondaryContent}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWithStickyImage;