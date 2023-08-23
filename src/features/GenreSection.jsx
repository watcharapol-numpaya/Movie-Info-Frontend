import React, { useEffect, useState } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { addAllGenre, addSelectGenre, clearSelectedGenre, getAllGenre, removeSelectGenre } from "../storage/slices/movieSlice";
import GenreButton from "../components/GenreButton";


function GenreSection({onSelectGenre}) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const dispatch = useDispatch();
  const { genres,mySelectedGenres } = useSelector((state) => state.movies);


  useEffect(() => {
    dispatch(getAllGenre());
  }, []);

  useEffect(() => {
    if (genres) {
      // setSelectedGenres(genres.map((genre) => genre.id));
      dispatch(addAllGenre(genres.map((genre) => genre.id)))
    }
  }, [genres]);

  const handleFind = () => {
    onSelectGenre(mySelectedGenres)
    // alert("Find: " + selectedGenres);
  };

  const handleSelectAll = () => {
    // setSelectedGenres(genres.map((genre) => genre.id));
    dispatch(addAllGenre(genres.map((genre) => genre.id)))

  };

  const handleReset = () => {
    // setSelectedGenres([]);
    dispatch(clearSelectedGenre())
  };

  const handleGenreSelect = (genreId, isSelected) => {
    if (isSelected) {
      // setSelectedGenres((prevSelected) => [...prevSelected, genreId]);
      dispatch(addSelectGenre(genreId));
    } else {
      // setSelectedGenres((prevSelected) =>
      //   prevSelected.filter((id) => id !== genreId)
      // );
      dispatch(removeSelectGenre(genreId));
    }
  };

  return (
    <div className="text-black">
      <span className="font-bold text-xl">Genres</span>
      <div className="flex flex-wrap m-1 mt-4 gap-2">
        {genres &&
          genres.map((genre) => (
            <GenreButton
              key={genre.id}
              genre={genre}
              isSelected={mySelectedGenres.includes(genre.id)}
              onSelect={handleGenreSelect}
            />
          ))}
      </div>
{console.log(mySelectedGenres)}
      <hr className="border my-2"/> 
      <div className="m-1 w-full flex justify-start items-center gap-2">
        <button className="hover:bg-blue-600 hover:text-white rounded-full bg-white px-3 p-1 shadow-md" onClick={handleFind}>
          Find
        </button>
        <button className="hover:bg-blue-600 hover:text-white rounded-full bg-white px-3 p-1 shadow-md " onClick={handleSelectAll}>
          Select All
        </button>
        <button className=" hover:bg-blue-600 hover:text-white rounded-full bg-white px-3 p-1 shadow-md" onClick={handleReset}>
          Reset
        </button>
      </div> 
    </div>
  );
}

export default GenreSection;
