import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActors } from "../storage/slides/actorSlice";

function ActorSlide({ actors }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w1280"
  );
  //   const { actors } = useSelector((state) => state.actors);
  //   useEffect(() => {
  //     dispatch(getActors(movieId)).then(() => {
  //       setIsLoading(false);
  //     });
  //   },[movieId]);

  return (
    <div className="w-full h-full ">
      {console.log(actors)}
      <div className="w-full grid grid-cols-6">
        {actors &&
          actors.map((actor) => (
            <div className="w-40">
              <img src={`${imageUrl}/${actor.profile_path}`} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ActorSlide;
