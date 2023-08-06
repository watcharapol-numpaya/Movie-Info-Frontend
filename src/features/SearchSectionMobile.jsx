import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slides/movieSlice";
import SearchCard from "../components/SearchCard";

function SearchSectionMobile() {
  const [keyword, setKeyword] = useState("");
  const [showSearchCard, setShowSearchCard] = useState(false);
  const onType = useRef(null);

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
    // console.log("1 : ----------------- "); console.log(onType.current)
    // console.log("1 --------------------")
    // console.log("2 : "+onType.current.contains(e.target))
    // console.log("3 : -----------------");console.log(e.target)
    // console.log("3 --------------------")

    //onType.current เก็บค่าของ ref ใช้ tag input
    //e.target เก็บค่า element ที่ได้กดจากตรงก็ตามผ่าน handleClickOutsideInput
    //onType.current.contains(e.target) เช็คว่า ค่าใน input.current กับ onType.current.contains(e.target) ตรงกันไหม

    if (onType.current && !onType.current.contains(e.target)) {
      setShowSearchCard(false);
    }
  };

  const handleScroll = () => {
    if (onType.current) {
        onType.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideInput);
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      document.removeEventListener("click", handleClickOutsideInput);
      window.removeEventListener("scroll", handleScroll);
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
      <div className="absolute top-0 z-20 w-full h-full p-2 backdrop-blur-sm  bg-gray-500 flex justify-center ">
        <div className="bg-blue-200 w-full h-full flex justify-center">
          <div className="  w-full h-full   bg-red-200  flex flex-col items-center  ">
            <div className="relative flex justify-center bg-green-400">
              <div className="  flex items-center justify-center bg-yellow-400 rounded-l-full h-12 w-12   cursor-pointer">
                <span className="material-icons -scale-x-90 text-black text-3xl">
                  search
                </span>
              </div>
              <input
                ref={onType}
                onClick={handleInputClick}
                onChange={handleSearch}
                placeholder="Search movie"
                className="outline-none text-black  w-full py-1 text-xl px-1   border-2 border-yellow-400"
                type="text"
              />
            </div>

            {showSearchCard && (
              <div id="search-card" className="bg-yellow-200   ">
                {handleIsShowSearchMovieCard() ? renderSearchMovieCard() : ""}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchSectionMobile;
