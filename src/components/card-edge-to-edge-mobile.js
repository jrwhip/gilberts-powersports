import React from "react";
export default function CardEdgeToEdgeCardMobile() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <picture>
            <img src="//jaredwhipplellc-765105907.imgix.net/segway/april-villain-1920x640.png?q=80&w=1920&h=479&auto=format&fit=clip" />
          </picture>
        </div>
      </div>
    </>
  );
}
