import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import OnLoadingScreen from "./../components/OnLoadingScreen";
import {
  getPopularMovies,
  getTrendingMovies,
} from "../storage/slices/movieSlice";
import MovieCard from "../components/MovieCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ScrollToTop from "../components/ScrollToTop";
const ViewMoreMoviePage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const { trendingMovies, popularMovies } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    fetchData();
  }, [dispatch, title]);

  const fetchData = async () => {
    if (title === "trending") {
      await dispatch(getTrendingMovies());
      console.log(title);
    } else if (title === "popular") {
      await dispatch(getPopularMovies());
      console.log(title);
    }

    setIsLoading(false);
  };

  const renderPopular = () => {
    return (
      <>
        {popularMovies &&
          popularMovies.map((item) => (
            <div key={item.id}>
              <MovieCard movie={item} />
            </div>
          ))}
      </>
    );
  };

  const renderTrend = () => {
    return (
      <>
        {trendingMovies &&
          trendingMovies.map((item) => (
            <div key={item.id}>
              <MovieCard movie={item} />
            </div>
          ))}
      </>
    );
  };

  const renderViewMore = () => {
    return (
      <div className="xl:container mx-auto ">
        <div className="w-full bg-red">
          <div className="flex justify-start items-center p-4 text-black sm:mb-4  ">
            <Link className="  sm:block flex  " to="/">
              <ArrowBackIosIcon />
            </Link>
            <span className="font-semibold text-2xl uppercase   ">{title}</span>
          </div>

          <div className="w-full flex justify-center ">
            <div className="flex  flex-wrap xl:gap-6 gap-4 justify-center mb-4  ">
              {title === "trending" ? renderTrend() : ""}
              {title === "popular" ? renderPopular() : ""}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ScrollToTop />
      <div className=" ">
        {isLoading ? <OnLoadingScreen /> : renderViewMore()}
      </div>
    </>
  );
  
};

export default ViewMoreMoviePage;
