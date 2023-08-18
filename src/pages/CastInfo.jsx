import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CastInfo = () => {
  const { name } = useParams();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );

  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className="flex">
          <div className="bg-red-200 w-1/6 h-screen"> </div>
          <div className="bg-red-500 w-5/6 h-screen"> </div>
        </div>
        <div>ds</div>
      </div>
    </>
  );
};

export default CastInfo;
