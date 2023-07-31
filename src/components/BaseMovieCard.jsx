import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import {FavoriteIcon,FavoriteBorderIcon} from '@mui/icons-material'
function BaseMovieCard({ movie }) {
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w220_and_h330_face"
  );

  return (
    <>
      <div className="flex flex-col bg-blue-400  xsm:w-52 w-44 xsm:h-96 h-80 sm:hover:scale-105 p-2 relative border-sky-100 border-b ">
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

export default BaseMovieCard;
