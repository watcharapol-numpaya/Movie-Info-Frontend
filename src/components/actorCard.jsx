import React from "react";
import { useState } from "react";
import HideImageOutlinedIcon from "@mui/icons-material/HideImageOutlined";
function ActorCard({ actor }) {
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );

  return (
    <>
      <div className="w-44 h-80 bg-white px-2.5 pt-3 rounded-xl">
        <div className="w-full  flex justify-center   ">
          {actor.profile_path ? (
            <img
              className=" w-40 h-52 rounded-lg "
              src={`${imageUrl}/${actor.profile_path}`}
              alt={actor.name}
              loading="lazy"
            />
          ) : (
            <div className=" w-36 h-52 bg-gray-300 flex justify-center items-center ">
              <HideImageOutlinedIcon fontSize="large" />
            </div>
          )}
        </div>
        <div className="    ">
          <p className="font-semibold text-base">{actor.name}</p>
          <p className="font-thin text-xs  ">{actor.character}</p>
        </div>
      </div>
    </>
  );
}

export default ActorCard;
