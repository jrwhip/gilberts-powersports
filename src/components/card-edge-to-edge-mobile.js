import React from "react";

export default function CardEdgeToEdgeCardMobile() {
  return (
    <div className="w-full lg:mx-auto lg:max-w-7xl lg:px-8">
      {/* Container with max-width and auto margins for centering on larger screens */}
      <div className="overflow-hidden bg-white">
        <div className="px-0 py-0 sm:p-6">
          <picture>
            {/* Mobile image (default) */}
            <source
              media="(max-width: 639px)"
              srcSet="//jaredwhipplellc-765105907.imgix.net/segway/april-villain-1920x640.png?q=80&w=640&auto=format&fit=clip"
            />
            {/* Tablet image */}
            <source
              media="(min-width: 640px) and (max-width: 1023px)"
              srcSet="//jaredwhipplellc-765105907.imgix.net/segway/april-villain-1920x1080.png?q=80&w=1024&auto=format&fit=clip"
            />
            {/* Desktop image */}
            <source
              media="(min-width: 1024px)"
              srcSet="//jaredwhipplellc-765105907.imgix.net/segway/april-villain-2000x900.png?q=80&w=2000&auto=format&fit=clip"
            />
            {/* Fallback image */}
            <img
              src="//jaredwhipplellc-765105907.imgix.net/segway/april-villain-1920x552.png?q=80&w=1920&auto=format&fit=clip"
              alt="Villain promotional image"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
