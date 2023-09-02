import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMovieId } from "../storage/slices/userSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import axios from "axios";

const FavoriteMoviePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { favoriteMovieList } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    // dispatch(getFavoriteMovieId(user.user_id))
    //   .unwrap()
    //   .then(() => {
    //     setIsLoading(false);
    //   })
    //   .catch(() => {
    //     setIsLoading(true);
    //   });
  }, []);

  const renderFavoriteMove = () => {
    return <div className="xl:container"> {console.log(favoriteMovieList)}</div>;
  };

  return (
    <div className="w-full h-full bg-red-200">
      {isLoading ? <OnLoadingScreen /> : renderFavoriteMove()}
    </div>
  );
};

export default FavoriteMoviePage;
