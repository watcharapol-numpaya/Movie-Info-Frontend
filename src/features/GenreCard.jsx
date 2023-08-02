import React, { useEffect, useState } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { getAllGenre } from "../storage/slides/movieSlice";
import { getAllMovies } from "../storage/slides/movieSlice";
import GenreButton from "../components/GenreButton";


function GenreCard({onSelectGenre}) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.movies);


  useEffect(() => {
    dispatch(getAllGenre());
  }, []);

  useEffect(() => {
    if (genres) {
      setSelectedGenres(genres.map((genre) => genre.id));
    }
  }, [genres]);

  const handleFind = () => {
    onSelectGenre(selectedGenres)
    // alert("Find: " + selectedGenres);
  };

  const handleSelectAll = () => {
    setSelectedGenres(genres.map((genre) => genre.id));
  };

  const handleReset = () => {
    setSelectedGenres([]);
  };

  const handleGenreSelect = (genreId, isSelected) => {
    if (isSelected) {
      setSelectedGenres((prevSelected) => [...prevSelected, genreId]);
    } else {
      setSelectedGenres((prevSelected) => prevSelected.filter((id) => id !== genreId));
    }
  };

  return (
    <div>
      <span className="font-bold text-xl">Genres</span>
      <div className="flex flex-wrap m-1 mt-4 gap-2">
        {genres &&
          genres.map((genre) => (
            <GenreButton
              key={genre.id}
              genre={genre}
              isSelected={selectedGenres.includes(genre.id)}
              onSelect={handleGenreSelect}
            />
          ))}
      </div>

      <div className="border my-2"></div>
      <div className="m-1 w-full flex justify-start items-center gap-2">
        <button className="rounded-full bg-white px-3 p-1" onClick={handleFind}>
          Find
        </button>
        <button className="rounded-full bg-white px-3 p-1" onClick={handleSelectAll}>
          Select All
        </button>
        <button className="rounded-full bg-white px-3 p-1" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default GenreCard;
