import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OnLoadingScreen from "../components/OnLoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByKeyword } from "../storage/slices/movieSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MovieCard from "../components/MovieCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ViewAllSearchResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.movies); //receive data from search
  const { keyword } = useParams();

  useEffect(() => {
    // dispatch(getMovieByKeyword(keyword));
    if (searchList !== []) {
      setIsLoading(false);
    }
  }, []);

  const renderNotFound = () => {
    return (
      <div className="  h-144 flex   items-center ">
        <p className="text-black text-2xl font-semibold">
          Not Found : {searchList.length!==0?keyword:""}
        </p>
      </div>
    );
  };

  const renderShowMovie = () => {
    return (
      <>
        {searchList.length !== 0 ? (
          <>
            {searchList &&
              searchList.map((item) => (
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

  const renderViewAllResult = () => {
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
          {console.log(searchList)}
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
    <div className=" ">
      {isLoading ? <OnLoadingScreen /> : renderViewAllResult()}
    </div>
  );
};

export default ViewAllSearchResultPage;
