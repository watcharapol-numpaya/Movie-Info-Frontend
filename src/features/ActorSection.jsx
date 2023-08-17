import React, { useState } from "react";
import { useSelector } from "react-redux";
import HideImageOutlinedIcon from "@mui/icons-material/HideImageOutlined";
import ActorCard from "../components/ActorCard";

function ActorSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedActors, setDisplayedActors] = useState(8); // Number of initially displayed actors
  const imageUrl = "https://www.themoviedb.org/t/p/w1280";
  const { actors } = useSelector((state) => state.actors);
  const limitActor = actors.slice(0, displayedActors);

  const showMoreActors = () => {
    setDisplayedActors(actors.length); // Show all actors when "See More" is clicked
  };

  const showLessActors = () => {
    setDisplayedActors(8);
  };

  return (
    <div className="w-full h-full p-2  ">
      <p id="title" className="p-2 text-xl font-bold text-white">Actors</p>
      <hr />
      <div className="w-full flex justify-center flex-wrap pt-4 gap-2">
        {actors &&
          limitActor.map((actor) => (
            <ActorCard   key={actor.id} actor={actor}/>
          
          ))}
      </div>
      {displayedActors < actors.length && (
        <div className="flex justify-center p-2 mb-4 ">
          <button
            onClick={showMoreActors}
            className="text-yellow-500 cursor-pointer font-semibold text-lg p-2  "
          >
            See More
          </button>
        </div>
      )}
     
      {actors.length === limitActor.length && (
     
        <div className="flex justify-center p-2 mb-4">
          {console.log()}
          <button
            onClick={showLessActors}
            className="text-yellow-500  cursor-pointer font-semibold text-lg p-2 "
          >
           <a href="#title"> See Less</a>
          </button>
        </div>
      )}
    </div>
  );
}

export default ActorSection;
