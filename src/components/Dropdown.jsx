import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div className="relative">
      <div className="absolute z-10 bg-white h-8 w-8 right-2 top-2 transform rotate-45"></div>
      <div className="absolute z-20 bg-white h-auto w-52 right-0 top-4 rounded-lg shadow-2xl">
        <div className="w-full rounded-lg overflow-hidden">
          <div className="text-center  font-medium flex flex-col">
            <Link className="hover:bg-gray-100 py-2 border-b" to="/sign-up">
              Sign Up
            </Link>
            <Link className="hover:bg-gray-100 py-2 border-b" to="/sign-up">
              Sign In
            </Link>
            <Link
              className="hover:bg-gray-100 py-2 border-b"
              to="/favorite-movie"
            >
              Favorite Movie
            </Link>
            <Link className="hover:bg-gray-100 py-2 border-b" to="/sign-out">
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
