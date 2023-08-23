import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OnLoadingScreen from "../components/OnLoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slices/movieSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MovieCard from "../components/MovieCard";
const ViewAllSearchResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.movies);
  const { keyword } = useParams();

  useEffect(() => {
    dispatch(getMovieByKeyword(keyword));
    setIsLoading(false);
  }, []);

  

  const renderViewAllResult = () => {
    return (
      <div className="xl:container mx-auto ">
        <div className="w-full bg-red">
          <div className="flex justify-start items-center p-4 text-black sm:mb-4  ">
            <Link className="  sm:block flex  " to="/">
              <ArrowBackIosIcon />
            </Link>
            <span className="font-semibold text-2xl uppercase   ">
              {keyword}
            </span>
          </div>
          {console.log(searchList)}
          <div className="w-full flex justify-center ">
            <div className="flex  flex-wrap xl:gap-6 gap-4 justify-center mb-4  ">
              {searchList &&
                searchList.map((item) => (
                  <div key={item.id}>
                    <MovieCard movie={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" ">
      {isLoading ? <OnLoadingScreen /> : renderViewAllResult()}
    </div>
  );
};

export default ViewAllSearchResultPage;
