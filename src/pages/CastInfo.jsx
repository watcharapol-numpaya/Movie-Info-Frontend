import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieRelateToCast } from "../storage/slices/castSlice";
 

const CastInfo = () => {
  const { name } = useParams();
  const dispatch = useDispatch()
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );
  

// useEffect(()=>{
// //  Promise
// },[])

  const renderCastSection = () => {
    return (
      <>
        <div className="xl:container mx-auto   ">
          <div className="flex sm:flex-row flex-col">
            <div id="cast-image" className="bg-blue-400 sm:w-2/6 w-full h-screen">
               </div>
            <div className="bg-yellow-600 sm:w-4/6 w-full h-screen"> </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full h-full bg-white">{renderCastSection()}</div>
    </>
  );
};

export default CastInfo;
