import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OnLoadingScreen from "../components/OnLoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slices/movieSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MovieCard from "../components/MovieCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MovieListCard from "../components/MovieListCard";

const ViewAllSearchResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { searchList } = useSelector((state) => state.movies); //receive data from search
  const { keyword } = useParams();

  useEffect(() => {
 
    if (searchList.length !== 0) {
      setIsLoading(false);
    }
  }, []);
 
  return (
    <div className=" ">
      {isLoading ? <OnLoadingScreen /> : <MovieListCard movies={searchList} title="Result" notFoundTitle={keyword} />}
    </div>
  );
};

export default ViewAllSearchResultPage;
