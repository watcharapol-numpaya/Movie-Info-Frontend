import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getMovieByID } from "../storage/slides/movieSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgressBar from "../components/CircularProgressBar";
import Youtube from "react-youtube";

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
          <div id="banner-section" className="h-full w-full   ">
            {renderTitleAndBannerSectionMobile()}
          </div>

          <div id="details" className=" ">
            {renderSecondSection()}
          </div>
        </div>
      </>
    );
  };

  const renderTitleAndBannerSection = () => {
    return (
      <>
        <div className="xl:container mx-auto  w-full flex justify-center ">
          <div className="relative   h-128 w-full   bg-black ">
            <div id="image-background" className="h-128 w-full opacity-40 ">
              <img
                className="w-full h-full object-cover"
                src={`${imageUrl}/${movieInfo.backdrop_path}`}
                alt="Banner Image"
              />
            </div>
            <div className="absolute top-0 h-full w-full  flex  ">
              <div id="poster" className="  h-full w-2/6">
                <div className="w-full h-full flex justify-center items-center   ">
                  <img
                    className="lg:h-112 md:h-96 sm:h-80 h-72 lg:w-76 md:w-64 sm:w-56 w-48 shadow-xl rounded-xl border-4 border-white bg-gray-200"
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
                <div className="w-full mt-2 flex items-center">
                  <CircularProgressBar percentage={voteAvgInPercentage} />
                  <div className="mx-1">
                    <button className="bg-black p-2 border-2 border-white text-white font-medium ">
                      Play Trailer
                    </button>
                  </div>
                </div>

                <div id="overview" className=" text-white    ">
                  <p className=" md:text-2xl sm:text-xl text-lg font-bold py-2   ">
                    Overview
                  </p>
                  <p
                    className={`${
                      movieInfo.overview.length >= 1380
                        ? "overflow-y-scroll "
                        : ""
                    } lg:h-64 md:h-48 sm:h-40 h-36   md:text-lg sm:text-base text-sm font-normal overflow-auto    `}
                  >
                    {movieInfo.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderSecondSection = () => {
    return (
      <>
        <div className="xl:container mx-auto bg-red-200 w-full h-full  ">
          <div className="flex  sm:flex-row flex-col-reverse ">
            <div className="w-full bg-green-200 ">
              <p className="text-lg font-semibold">details</p>
              <p>123</p>
              <p>123</p>
            </div>
            <div className="w-full "> {renderTrailerSection()}</div>
          </div>
        </div>
      </>
    );
  };

  const renderTrailerSection = () => {
    const trailer = movieInfo.videos.results.find(
      (vid) =>
        vid.name === "Official Trailer" ||
        vid.name === "Main Trailer" ||
        vid.name === "Teaser Trailer" ||
        vid.name === "Trailer"
    );

    return (
      <>
        <div className=" ">
          <div className="  w-full h-full flex justify-center items-center    ">
            {trailer && (
              <div className="h-full w-full   p-2 ">
                <Youtube
                  className=" sm:h-112 h-52  w-full "
                  videoId={trailer.key}
                  opts={{ height: "100%", width: "100%" }}
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  const renderTitleAndBannerSectionMobile = () => {
    return (
      <>
        <div className="xl:container mx-auto h-full  w-full flex justify-center ">
          <div className="relative h-176  w-full   bg-black ">
            <div id="image-background" className="h-128 w-full opacity-40 ">
              <img
                className="w-full  h-176 object-cover"
                src={`${imageUrl}/${movieInfo.backdrop_path}`}
                alt="Banner Image"
              />
            </div>
            <div className="absolute top-0 h-full w-full  flex flex-col ">
              <div id="poster" className=" pt-2">
                <div className="w-full h-full flex justify-center items-center   ">
                  <img
                    className="lg:h-112 md:h-96 sm:h-80 h-72 lg:w-76 md:w-64 sm:w-56 w-48 shadow-xl rounded-xl border-4 border-white bg-gray-200"
                    src={`${imageUrl}/${movieInfo.poster_path}`}
                  />
                </div>
              </div>
              <div id="content" className="px-2 pt-2  h-full    ">
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
                <div className="w-full mt-2 flex items-center">
                  <CircularProgressBar percentage={voteAvgInPercentage} />
                  <div className="mx-1">
                    <button className="bg-black p-2 border-2 border-white text-white font-medium ">
                      Play Trailer
                    </button>
                  </div>
                </div>

                <div id="overview" className=" text-white    ">
                  <p className=" md:text-2xl sm:text-xl text-lg font-bold py-2   ">
                    Overview
                  </p>
                  <p
                    className={`${
                      movieInfo.overview.length >= 1380
                        ? "overflow-y-scroll "
                        : ""
                    } lg:h-64 md:h-48 sm:h-40 h-36   md:text-lg sm:text-base text-sm font-normal overflow-auto    `}
                  >
                    {movieInfo.overview}
                  </p>
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
