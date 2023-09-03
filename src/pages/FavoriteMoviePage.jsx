import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavoriteMovies,
  getFavoriteMovieId,
} from "../storage/slices/userSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import axios from "axios";
import { getMovieDetailByID } from "../storage/slices/movieSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";


const FavoriteMoviePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { favoriteMovies } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   dispatch(getFavoriteMovieId(user.user_id))
  //     .unwrap()
  //     .then((res) => {
  //       let movies = res.favorite_movie;
  //       dispatch(getMovieDetailByID(movies[i]))
  //         .unwrap()
  //         .then((res) => {
  //           dispatch(addMovieToFavoriteMovies(res));
  //         });

  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setIsLoading(true);
  //     });

  // }, [user.user_id]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, [dispatch, user.user_id]);

  const fetchFavoriteMovies = async () => {
    try {
      const results = await dispatch(getFavoriteMovieId(user.user_id));
      const favoriteMovieIds = results.payload.favorite_movie;

      //Receive promise, create array of promise
      const moviePromises = favoriteMovieIds.map((movieId) =>
        dispatch(getMovieDetailByID(movieId))
      );

      const favoriteMovies = await Promise.all(moviePromises);

      // add favorite movie to state
      favoriteMovies.forEach((movieDetail) => {
        dispatch(addMovieToFavoriteMovies(movieDetail.payload));
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.error(error);
    }
  };
  
  const renderNotFound = () => {
    return (
      <div className="  h-144 flex   items-center ">
        <p className="text-black text-2xl font-semibold">
          Not Found  
        </p>
      </div>
    );
  };

  const renderShowMovie = () => {
    return (
      <>
        {favoriteMovies.length !== 0 ? (
          <>
            {favoriteMovies &&
              favoriteMovies.map((item) => (
                <div key={item.id}>
                  <MovieCard movie={item} />
                </div>
              ))}
          </>
        ) : (
          <>{renderNotFound()}</>
        )}
      </>
    );
  };

  const renderFavoriteMove = () => {
    return (
      <div className="xl:container mx-auto ">
        <div className="w-full bg-red">
          <div className="flex  p-4 text-black sm:mb-4  ">
            <Link className=" flex  items-center  " to="/">
              <span className="sm:block flex">
                <ArrowBackIosIcon />
              </span>
            </Link> 
            <span id="Back" className="font-semibold text-2xl  uppercase ">
              Result
            </span>
          </div>
          {console.log(favoriteMovies)}
          <div className="w-full flex justify-center ">
            <div className="flex  flex-wrap xl:gap-6 gap-4 justify-center mb-4  ">
              {renderShowMovie()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-red-200">
      {isLoading ? <OnLoadingScreen /> : renderFavoriteMove()}
    </div>
  );
};

export default FavoriteMoviePage;
