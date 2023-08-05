import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slides/movieSlice";
import SearchCard from "../components/SearchCard";

function SearchSection() {
  const [keyword, setKeyword] = useState("");
  const [showSearchCard, setShowSearchCard] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.movies);
  const limitedData = searchList.slice(0, 5);

  const handleSearch = (e) => {
    dispatch(getMovieByKeyword(e.target.value.trim()));
    setShowSearchCard(true); // Show the search card when typing in the input box
  };

  const handleIsShowSearchMovieCard = () => {
    return limitedData.length !== 0;
  };

  const handleInputClick = () => {
    setShowSearchCard(true);
  };

  const handleClickOutsideInput = (e) => {
    // console.log("1 : ----------------- "); console.log(inputRef.current)
    // console.log("1 --------------------")
    // console.log("2 : "+inputRef.current.contains(e.target))
    // console.log("3 : -----------------");console.log(e.target)
    // console.log("3 --------------------")

    //input.current เก็บค่าของ ref ใช้ tag input
    //e.target เก็บค่า element ที่ได้กดจากตรงก็ตามผ่าน handleClickOutsideInput
    //inputRef.current.contains(e.target) เช็คว่า ค่าใน input.current กับ inputRef.current.contains(e.target) ตรงกันไหม
     
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowSearchCard(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideInput);

    return () => {
      document.removeEventListener("click", handleClickOutsideInput);
    };
  }, []);

  const renderSearchMovieCard = () => {
    return (
      <div className="bg-white text-black w-80 rounded-lg overflow-hidden shadow-2xl">
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
      <div className="h-full items-center w-full pl-4 relative">
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="absolute flex items-center justify-center bg-yellow-400 rounded-full h-12 w-12 left-3 cursor-pointer">
            <span className="material-icons -scale-x-90 text-black text-3xl">
              search
            </span>
          </div>
          <input
            ref={inputRef}
            onClick={handleInputClick}
            onChange={handleSearch}
 
            placeholder="Search movie"
            className="outline-none text-black sm:w-72 w-56 py-1 text-xl px-1 pl-5 rounded-r-lg border-2 border-yellow-400"
            type="text"
          />
        </div>

        {showSearchCard && (
          <div id="search-card" className="absolute z-10 top-14 left-8">
            {/* -----Show-Movie-card------ */}
            {handleIsShowSearchMovieCard() ? renderSearchMovieCard() : ""}
            {/* ------------ */}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchSection;
