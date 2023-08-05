import React from "react";
import SearchSection from "../features/SearchSection";

function MobileSearchBox({ isMobileSearchOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black ${
        isMobileSearchOpen ? "z-50" : "-z-10"
      }`}
    >
      <div className="h-full flex items-center justify-center">
        <div className="w-64">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => onClose(false)}
              className="text-white text-2xl px-3 py-1 rounded-full focus:outline-none"
            >
              Close
            </button>
          </div>
          <SearchSection />
        </div>
      </div>
    </div>
  );
}

export default MobileSearchBox;
