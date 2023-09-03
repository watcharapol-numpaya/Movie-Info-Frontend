import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavoriteMovies,
  getFavoriteMovieId,
} from "../storage/slices/userSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import axios from "axios";
import { getMovieDetailByID } from "../storage/slices/movieSlice";

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
      favoriteMovies.forEach((movieDetail) =>
        dispatch(addMovieToFavoriteMovies(movieDetail))
      );

      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.error(error);
    }
  };

  const renderFavoriteMove = () => {
    return <div className="xl:container">{console.log(favoriteMovies)}</div>;
  };

  return (
    <div className="w-full h-full bg-red-200">
      {isLoading ? <OnLoadingScreen /> : renderFavoriteMove()}
    </div>
  );
};

export default FavoriteMoviePage;
