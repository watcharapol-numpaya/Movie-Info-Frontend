import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getMovieByID } from "../storage/slides/movieSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieInfoPage = ({}) => {
  const { movieInfo } = useSelector((state) => state.movies);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/original"
  );
  const isSmScreen = useMediaQuery("(min-width:640px)");
  const voteAvgInPercentage = Math.round(movieInfo.vote_average * 10);

  useEffect(() => {
    dispatch(getMovieByID(id)).then(() => {
      setIsLoading(false);
    });
  }, [id]);

  const renderMovieInfo = () => {
    return (
      <>
        <div className=" h-full w-full ">
          <div id="banner-section" className="h-128 w-full  bg-black ">
            <div className="xl:container mx-auto  w-full flex justify-center ">
              <div className="relative   h-128 w-full   ">
                <div id="image-background" className="h-128 w-full opacity-40">
                  <img
                    className="w-full h-full object-cover"
                    src={`${imageUrl}/${movieInfo.backdrop_path}`}
                    alt="Banner Image"
                  />
                </div>
                <div className="absolute top-0 h-full w-full   flex ">
                  <div id="poster" className="  h-full w-2/6">
                    <div className="w-full h-full flex justify-center items-center   ">
                      <img
                        className="lg:h-112 md:h-96 sm:h-80 h-72  shadow-xl rounded-xl border-4 border-white"
                        src={`${imageUrl}/${movieInfo.poster_path}`}
                      />
                    </div>
                  </div>
                  <div
                    id="content"
                    className="pl-4 pr-2 lg:pt-10 md:pt-16 sm:pt-24 pt-28  h-full w-4/6   "
                  >
                    <div className="   ">
                      <p className="text-white md:text-4xl sm:text-3xl text-2xl font-semibold  ">
                        {movieInfo.title}
                      </p>
                    </div>
                    <hr className="border my-2 mt-3" />
                    <div className="text-white  flex flex-wrap  ">
                      {/* <span className="font-semibold">Genres :</span> */}
                      {movieInfo.genres.map((genre, index) => (
                        <span
                          className="md:text-base sm:text-sm text-xs bg-yellow-500 ml-1 rounded-lg p-1 cursor-pointer"
                          key={genre.id}
                        >
                          {genre.name}
                          {/* {index !== movieInfo.genres.length - 1 && ","} */}
                        </span>
                      ))}
                    </div>
                    <div className="w-full pt-2  ">
                      <CircularProgressBar percentage={voteAvgInPercentage} />
                    </div>

                    <div
                      id="overview"
                      className=" text-white    "
                    >
                      <p className=" md:text-2xl sm:text-xl text-lg font-bold py-2   ">
                        Overview
                      </p>
                      <p
                        className={`${
                          movieInfo.overview.length >= 1380
                            ? "overflow-y-scroll "
                            : ""
                        } lg:h-64 md:h-48 h-40 bg-red2 md:text-lg sm:text-base text-sm font-normal overflow-auto    `}
                      >
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
                  className="  "
                  src={`${imageUrl}/${movieInfo.backdrop_path}`}
                />
              </div>

              <div className="absolute w-full h-full flex items-center">
                <div className="pl-2 ">
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
