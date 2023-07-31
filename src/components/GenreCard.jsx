import React, { useState } from "react";
import GenreButton from "./GenreButton";

function GenreCard() {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <>
      <span className="  font-bold text-xl">Genres</span>

      <div className="flex flex-wrap m-1 mt-4 gap-2 ">
        {genres &&
          genres.map((genre) => <GenreButton key={genre.id} genre={genre} />)}
      </div>

      <div className="border my-2"></div>
      <div className="m-1   w-full   flex justify-start items-center gap-2">
        <button
          className="rounded-full bg-white px-3 p-1"
          onClick={() => {
            alert("clicked");
          }}
        >
          Find
        </button>
        <button
          className="rounded-full bg-white px-3 p-1"
          onClick={() => {
            alert("clicked");
          }}
        >
          Select All
        </button>
        <button
          className="rounded-full bg-white px-3 p-1"
          onClick={() => {
            alert("clicked");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default GenreCard;
