import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slides/movieSlice";
import SearchCard from "../components/SearchCard";

function SearchSection() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.movies);
  const limitedData = searchList.slice(0, 5);

  const handleSearch = (e) => {
    setKeyword(e.target.value.trim());
    dispatch(getMovieByKeyword(e.target.value.trim()));
  };

  const handleIsShowSearchMovieCard = () => {
    return limitedData.length !== 0;
  };

  const renderSearchMovieCard = () => {
    return (
      <div className="bg-white text-black  w-80 rounded-lg overflow-hidden  shadow-2xl">
        {limitedData &&
          limitedData.map((movie) => (
            <SearchCard key={movie.id} movie={movie} />
          ))}
        <div className="text-center py-1 cursor-pointer">
          <p>View all results</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {console.log(limitedData)}
      <div className="   h-full items-center  w-full pl-4 relative  ">
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
          {/* -----Show-Movie-card------ */}
          {handleIsShowSearchMovieCard() ? renderSearchMovieCard() : ""}
          {/* ------------ */}
        </div>
      </div>
    </>
  );
}

export default SearchSection;
