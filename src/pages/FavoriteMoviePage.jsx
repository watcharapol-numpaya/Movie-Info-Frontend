import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendFavoriteMovieId } from "../storage/slices/userSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import axios from "axios";

const FavoriteMoviePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { favoriteMovieIdList } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
 
    dispatch(sendFavoriteMovieId(user.user_id))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
      });
    
    // getData();
  }, [user.user_id]); // Make sure to include user.user_id in the dependency array

  const getData = async () => {
    await axios
      .post(`${import.meta.env.VITE_API_USER}favorite_movie`,{
        user_id: user.user_
      })
      .then((res) => {
        setData(res);
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(true)
        console.log(err);
      });
  };

  const renderFavoriteMove = () => {
    return <div className="xl:container"> {console.log(favoriteMovieIdList)}</div>;
  };

  return (
    <div className="w-full h-full bg-red-200">
      {isLoading ? <OnLoadingScreen /> : renderFavoriteMove()}
    </div>
  );
};

export default FavoriteMoviePage;
