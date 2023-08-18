import React from "react";
import { useState } from "react";
import HideImageOutlinedIcon from "@mui/icons-material/HideImageOutlined";
function CastCard({ cast }) {
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );

  return (
    <>
      <div className="w-44 h-80 bg-white px-2.5 pt-3 rounded-xl">
        <div className="w-full  flex justify-center   ">
          {cast.profile_path ? (
            <img
              className=" w-40 h-52 rounded-lg "
              src={`${imageUrl}/${cast.profile_path}`}
              alt={cast.name}
              loading="lazy"
            />
          ) : (
            <div className=" w-36 h-52 bg-gray-300 flex justify-center items-center ">
              <HideImageOutlinedIcon fontSize="large" />
            </div>
          )}
        </div>
        <div className="    ">
          <p className="font-semibold text-base">{cast.name}</p>
          <p className="font-thin text-xs  ">{cast.character}</p>
        </div>
      </div>
    </>
  );
}

export default CastCard;
