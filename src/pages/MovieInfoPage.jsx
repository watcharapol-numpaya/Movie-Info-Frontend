import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getMovieByID } from "../storage/slides/movieSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";

const MovieInfoPage = ({}) => {
  const location = useLocation();
  // const movie = location.state?.movie;
  const { movieInfo } = useSelector((state) => state.movies);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );
  useEffect(() => {
    dispatch(getMovieByID(id)).then(() => {
      setIsLoading(false);
    });

    // if (!movie) {
    //   console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOO");
    // } else {
    //   dispatch(getMovieByID(id));
    // }
  }, [id]);

  const renderMovieInfo = () => {
    return (
      <>
        <div className="lg:container mx-auto bg-blue-400">
          {" "}
          <div>MovieInformationPage : {id}</div>
          <div>MovieInformationPage : {id}</div>
          <div>MovieInformationPage : {id}</div>
          <div className="w-96">
            <img src={`${imageUrl}/${movieInfo.poster_path}`} />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {console.log(movieInfo)}
      <div className="bg-blue-200 w-full h-full ">
        {isLoading ? <OnLoadingScreen /> : renderMovieInfo()}
      </div>
    </>
  );
};

export default MovieInfoPage;
