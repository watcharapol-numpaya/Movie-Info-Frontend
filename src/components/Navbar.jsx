import React, { useEffect, useState } from "react";
import SearchMovieCard from "../features/SearchMovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slides/movieSlice";

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.movies);

  const handleSearch = (e) => {
    setKeyword(e.target.value.trim());
    dispatch(getMovieByKeyword(e.target.value.trim()));
  };

  const renderNavbar = () => {
    return (
      <>
        {console.log(searchList)}
        <div className="flex h-full w-full justify-between items-center text-yellow-400">
          <div className="flex items-center  cursor-pointer">
            {/* <i className="material-icons text-4xl mr-4">menu</i> */}
            <span className="tracking-widest0.25 font-bold text-lg">
              MOVIEINFO
            </span>
          </div>

          <div
            id="searchBox"
            className="md:flex hidden  h-full items-center w-96 pl-4 relative"
          >
            <div className="relative  h-full w-full flex items-center justify-center    ">
              <div className="absolute flex items-center justify-center bg-yellow-400 rounded-full h-12 w-12 left-3 cursor-pointer ">
                <span className="material-icons -scale-x-90 text-black text-3xl">
                  search
                </span>
              </div>
              <input
                onChange={handleSearch}
                placeholder="Search movie"
                className="outline-none text-black  sm:w-72 w-56  py-1 text-xl px-1 pl-5 rounded-r-lg border-2 border-yellow-400"
                type="text"
              />
            </div>
            <div id="search-card" className="absolute z-10 top-14 left-8  ">
              <SearchMovieCard movies={searchList} keyword={keyword} />
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

  return (
    <>
      <div className="mx-auto h-20 bg-black   p-4">{renderNavbar()}</div>
    </>
  );
}

export default Navbar;
