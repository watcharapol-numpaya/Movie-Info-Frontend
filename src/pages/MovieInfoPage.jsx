import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
function MovieInfoPage({}) {
  const location = useLocation();
  const movie = location.state?.movie;
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) {
      console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOO")
    }else{
      dispatch(get)
    }
  }, []);

  return (
    <>
      <div>
        MovieInformationPage : {id}
        {console.log(movie)}
        {/* {movie.title} */}
        <div>--------------</div>
        {/* {console.log(movie.movie.title)} */}
      </div>
    </>
  );
}

export default MovieInfoPage;
