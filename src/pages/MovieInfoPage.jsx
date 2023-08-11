import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getMovieByID } from "../storage/slides/movieSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";

const MovieInfoPage = ({}) => {
  const { movieInfo } = useSelector((state) => state.movies);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );
  useEffect(() => {
    dispatch(getMovieByID(id)).then(() => {
      setIsLoading(false);
    });
  }, [id]);

  const renderMovieInfo = () => {
    return (
      <>
        <div className=" h-full w-full ">
          <div id="banner-section" className="h-128 w-full bg-gray-400">
            <div className="xl:container mx-auto  w-full flex justify-center ">
              <div className="relative  bg-blue-400 h-128 w-full   ">
                <div id="image-background" className="h-128 w-full opacity-40">
                  <img
                    className="w-full h-full object-cover"
                    src={`${imageUrl}/${movieInfo.backdrop_path}`}
                    alt="Banner Image"
                  />
                </div>
                <div className="absolute top-0 h-full w-full bg-fuchsia-300 flex ">
                  <div className=" bg-red-200 h-full w-2/6">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        className="h-112 "
                        src={`${imageUrl}/${movieInfo.poster_path}`}
                      />
                    </div>
                  </div>
                  <div className=" bg-red-400 h-full w-4/6">
                    <div className=" p-8 bg-blue-200">
                      <p className="text-white text-3xl font-semibold">
                        {movieInfo.title}
                      </p>
                    </div>
                    <div className="px-8 text-white">
                      <p className="text-xl font-bold">Overview</p>
                      <p className=" text-lg font-normal">
                        {movieInfo.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderMovieInfoMobile = () => {
    return (
      <>
        <div className="xl:container mx-auto  ">
          <div className="w-full h-full   flex items-center justify-center">
            <div className=" relative h-full w-full flex justify-center  ">
              <div id="background-image" className="opacity-70">
                <img
                  className=" "
                  src={`${imageUrl}/${movieInfo.backdrop_path}`}
                />
              </div>

              <div className="absolute w-full h-full flex items-center">
                <div className="pl-2">
                  <img
                    className=" w-32 "
                    src={`${imageUrl}/${movieInfo.poster_path}`}
                  />
                </div>
                <div className="  h-full pt-3 p-1 text-white">
                  <p className="font-semibold">{movieInfo.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {console.log(movieInfo)}
      <div className="  w-full h-full ">
        {isLoading ? <OnLoadingScreen /> : renderMovieInfo()}
      </div>
    </>
  );
};

export default MovieInfoPage;
