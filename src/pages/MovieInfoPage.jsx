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
          <div id="banner-section" className="h-128 w-full  bg-black ">
            <div className="xl:container mx-auto  w-full flex justify-center ">
              <div className="relative    h-128 w-full   ">
                <div id="image-background" className="h-128 w-full opacity-40">
                  <img
                    className="w-full h-full object-cover"
                    src={`${imageUrl}/${movieInfo.backdrop_path}`}
                    alt="Banner Image"
                  />
                </div>
                <div className="absolute top-0 h-full w-full   flex ">
                  <div className="  h-full w-2/6">
                    <div className="w-full h-full flex justify-center items-center   ">
                      <img
                        className="lg:h-112 md:h-96 sm:h-80 h-72  shadow-xl rounded-xl border-4 border-white"
                        src={`${imageUrl}/${movieInfo.poster_path}`}
                      />
                    </div>
                  </div>
                  <div className="pl-4 pr-2 lg:pt-10 md:pt-16 sm:pt-24 pt-28  h-full w-4/6   ">
                    <div className="   ">
                      <p className="text-white text-3xl font-semibold">
                        {movieInfo.title}
                      </p>
                    </div>
                    <div className=" text-white  ">
                      <p className=" text-2xl font-bold py-2">Overview</p>
                      <p
                        className={`${
                          movieInfo.overview.length >= 1380
                            ? "overflow-y-scroll"
                            : ""
                        } lg:h-86 md:h-80 sm:h-72 h-64 bg-red2  text-lg font-medium   `}
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
