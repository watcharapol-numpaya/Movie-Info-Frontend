import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getMovieByID } from "../storage/slides/movieSlice";

const MovieInfoPage = ({}) => {
  const location = useLocation();
  // const movie = location.state?.movie;
  const { movieInfo } = useSelector((state) => state.movies);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieByID(id));
   

    // if (!movie) {
    //   console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOO");
    // } else {
    //   dispatch(getMovieByID(id));
    // }
  }, [id]);

  return (
    <>{  console.log(movieInfo)}
      <div>MovieInformationPage : {id}</div>
    </>
  );
};

export default MovieInfoPage;
