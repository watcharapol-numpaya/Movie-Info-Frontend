import React, { useState } from "react";
import SearchSection from "../features/SearchSection";
import MobileSearchBox from "../components/MobileSearchBox";

function Navbar() {
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

  const renderNavbar = () => {
    return (
      <>
        <div className="flex h-full w-full justify-between items-center text-yellow-400  ">
          <div className="flex items-center  cursor-pointer">
            {/* <i className="material-icons text-4xl mr-4">menu</i> */}
            <span className="tracking-widest0.25 font-bold text-lg">
              MOVIEINFO
            </span>
          </div>

          <div id="searchBox" className="md:block hidden h-full w-96  ">
            <SearchSection />
          </div>

          <ul className="flex  h-full  items-center justify-end space-x-2 text-black">
          <li
              className="md:hidden flex h-12 w-12 bg-yellow-400 rounded-full items-center justify-center cursor-pointer"
              onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
            >
              <i className="material-icons -scale-x-90 text-black text-3xl">
                search
              </i>
            </li>
            <li className="mobile:flex hidden  h-12 w-12 bg-yellow-400  rounded-full  items-center justify-center  cursor-pointer">
              <i className="material-icons text-3xl">translate</i>
            </li>
            <li className="mobile:flex hidden  h-12 w-12 bg-yellow-400  rounded-full  items-center justify-center  cursor-pointer">
              <i className="material-icons text-3xl">shopping_cart</i>
            </li>
            <li className="h-12 w-12 bg-yellow-400  rounded-full flex items-center justify-center  cursor-pointer">
              <img
                className="h-12 w-12 rounded-full"
                alt=""
                src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
              />
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mx-auto h-20 bg-black p-4">{renderNavbar()}</div>
      {isMobileSearchOpen && <SearchSection />}
    </>
  );
}

export default Navbar;
