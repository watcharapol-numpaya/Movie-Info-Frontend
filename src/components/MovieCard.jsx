import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import {FavoriteIcon,FavoriteBorderIcon} from '@mui/icons-material'
function MovieCard({ movie }) {
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w220_and_h330_face"
  );

  return (
    <>
      <div className="flex flex-col xsm:bg-green-400 sm:bg-red-400  bg-orange-400  h-72 w-40 xsm:h-80 xsm:w-44 sm:h-96 sm:w-52   sm:hover:scale-105 p-2 relative border-sky-100 border-b ">
 
        <img className=" " alt="poster" src={imageUrl + movie.poster_path} />
        <FavoriteIcon className="absolute top-2 right-3 m-1 text-yellow-300" />
        <FavoriteBorderIcon className="absolute top-2 right-3 m-1 text-yellow-300" />
        <span className="font-medium pt-1 px-1 text-ellipsis overflow-hidden text-white">{movie.title} </span>
        <div className="absolute bg-amber-400 h-8 w-12 left-0 bottom-24 flex items-center justify-center">
          <span id="vote-point" >{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
