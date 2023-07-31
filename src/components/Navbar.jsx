import React from "react";

function Navbar() {
  const renderNavbarDesktop = () => {
    return (
      <>
        <div className="flex h-full w-full justify-between items-center text-yellow-400">
          <div className="flex items-center  cursor-pointer">
            <i className="material-icons text-4xl mr-4">menu</i>
            <span className="tracking-widest0.25 font-semibold">MOVIEBOT</span>
          </div>

          <div
            id="searchBox"
            className="md:flex hidden  h-full items-center w-96 pl-4"
          >
            <div className="relative  h-full w-full flex items-center justify-center    ">
              <div className="absolute flex items-center justify-center bg-yellow-400 rounded-full h-12 w-12 left-3 cursor-pointer ">
                <span className="material-icons -scale-x-90 text-black text-3xl">
                  search
                </span>
              </div>
              <input
                placeholder="Search movie"
                className="outline-none  sm:w-72 w-56  py-1 text-xl px-1 pl-5 rounded-r-lg border-2 border-yellow-400"
                type="text"
              />
            </div>
          </div>

          <ul className="flex  h-full  items-center justify-end space-x-2 text-black">
            <li className="md:hidden flex  h-12 w-12 bg-yellow-400  rounded-full  items-center justify-center  cursor-pointer ">
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

  const renderNavbarMobile = () => {
    return (
      <>
        <div className="text-yellow-400 flex items-center">
          <span className="material-icons text-4xl mr-4">menu</span>
          <div className="w-auto text-yellow-400 sm:block hidden">
            <h1 className="font-bold ">M O V I E B O T</h1>
          </div>
        </div>

        <div className="w-auto text-yellow-400 sm:hidden block  ">
          <h1 className="font-bold ">M O V I E B O T</h1>
        </div>

        <div className="sm:block hidden h-full  w-96   ">
          <div className="flex items-center  h-full relative ml-7 ">
            <div className="absolute -left-7 flex items-center justify-center w-11 rounded-full p-1 bg-yellow-400">
              <span className="material-icons -scale-x-90 text-black text-3xl">
                search
              </span>
            </div>
            <div className="  ">
              <input
                placeholder="Search movie"
                className="outline-none   w-72  py-1 text-xl px-1 pl-5 rounded-r-lg border-2 border-yellow-400"
                type="text"
              />
            </div>
          </div>
        </div>

        <ul className="flex  h-full  items-center justify-end space-x-2">
          <li className="sm:flex hidden h-12 w-12 bg-yellow-400  rounded-full  items-center justify-center">
            <span class="material-icons text-3xl">translate</span>
          </li>
          <li className="sm:flex hidden  h-12 w-12 bg-yellow-400  rounded-full  items-center justify-center">
            <span class="material-icons text-3xl">shopping_cart</span>
          </li>
          <li className="h-12 w-12 bg-yellow-400  rounded-full flex items-center justify-center">
            <img
              className="h-12 w-12 rounded-full"
              alt=""
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            />
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="    mx-auto h-20 bg-black   p-4">
        {/* {renderNavbarMobile()} */}
        {renderNavbarDesktop()}
      </div>
    </>
  );
}

export default Navbar;
