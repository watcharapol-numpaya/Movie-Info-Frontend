import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMovie } from "../storage/slices/userSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";

const FavoriteMoviePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { favoriteMovieList } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getFavoriteMovie(user.user_id))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        console.log("pass")
      })
      .catch(() => {
        setIsLoading(true);
      });
  }, []);

  const renderFavoriteMove = () => {
    return (
      <div className="xl:container">   </div>
    );
  };

  return (
    <div className="w-full h-full bg-red-200">
      {isLoading ? <OnLoadingScreen /> : renderFavoriteMove()}
      
    </div>
  );
};

export default FavoriteMoviePage;
