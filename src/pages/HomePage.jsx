import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenre,
  getAllMovies,
  getPopularMovies,
  getTrendingMovies,
} from "../storage/slides/movieSlice";
import MovieCard from "../components/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import AppPagination from "../components/AppPagination";
import GenreCard from "../features/GenreCard";
import MovieCarouselCard from "../features/MovieCarouselCard";
import TuneIcon from "@mui/icons-material/Tune";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnLoadingScreen from "../components/OnLoadingScreen";

function HomePage() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { trendingMovies, popularMovies, allMovie, totalPages, genres } =
    useSelector((state) => state.movies);

  const [page, setPage] = useState(1);
  const [bannerUrl, setBannerUrl] = useState(
    "https://www.themoviedb.org/t/p/original"
  );
  const [isShowGenreCard, setIsShowGenreCard] = useState(false);
  const isLgScreen = useMediaQuery("(min-width:1024px)");
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Hide the genre card automatically when the screen size is greater than "lg"
    if (!isLgScreen) {
      setIsShowGenreCard(false);
    }
  }, [isLgScreen]);

  useEffect(() => {
    Promise.all([
      dispatch(getTrendingMovies()),
      dispatch(getPopularMovies()),
      handleGetMovie(),
    ])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  // Random backdrop image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(() =>
        Math.floor(Math.random() * trendingMovies.length)
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [trendingMovies]);

  const handleGetMovie = (genre) => {
    let data = { page: page };

    if (genre) {
      data.genre = genre;
    }

    dispatch(getAllMovies(data));
  };

  const renderHomePage = () => {
    return (
      <>
        <div className="w-full sm:h-112 h-56  relative">
          <div className=" absolute inset-y-0 left-0  sm:w-1/4 w-1/12 bg-gradient-to-l from-transparent to-black"></div>
          <div className=" absolute inset-y-0 right-0 sm:w-1/4 w-1/12 bg-gradient-to-r from-transparent to-black"></div>
 
          <div className="absolute sm:bottom-12 bottom-6 sm:pl-6 pl-3">
            <p style={{ textShadow: "3px 3px black" }} className="text-white cursor-pointer font-semibold sm:text-4xl  md:text-5xl text-xl drop-shadow-2xl  ">
              {trendingMovies[currentImageIndex].title}
            </p>
          </div>

          {popularMovies && (
            <img
              className="w-full h-full object-cover   "
              src={`${bannerUrl}/${trendingMovies[currentImageIndex].backdrop_path}`}
              alt="Banner Image"
            ></img>
          )}
        </div>
        <div className="flex lg:flex-row flex-col w-full h-full bg-white  flex-wrap mx-auto   ">
          <div className="w-full ">
            <MovieCarouselCard
              title={"trending"}
              movies={trendingMovies}
              link={"#"}
            />
            <MovieCarouselCard
              title={"popular"}
              movies={popularMovies}
              link={"#"}
            />
            <div>
              <div className="flex justify-between items-center p-4 bg-red-600 text-white relative ">
                <span className="font-semibold text-2xl  uppercase  ">
                  Movies
                </span>
                {/* Genre card mobile */}
                <button
                  className="lg:hidden block"
                  onClick={() => {
                    setIsShowGenreCard(!isShowGenreCard);
                  }}
                >
                  <TuneIcon />
                </button>

                <div
                  className={`absolute bg-white shadow-xl p-2 rounded-xl w-64 right-4 top-14 z-10 ${
                    isLgScreen ? "hidden" : isShowGenreCard ? "block" : "hidden"
                  }`}
                >
                  <GenreCard onSelectGenre={handleGetMovie} />
                </div>
              </div>
              <div className="flex">
                <div id="all-movie" className="lg:w-3/4 w-full ">
                  <div className=" flex justify-center w-full my-2 ">
                    <AppPagination
                      setPage={setPage}
                      page={page}
                      numberOfPage={totalPages}
                    />
                  </div>
                  <div
                    id="item-container"
                    className={`flex  flex-wrap xl:gap-6 gap-4   justify-center  `}
                  >
                    {allMovie &&
                      allMovie.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                      ))}
                    <div className=" flex justify-center w-full mb-4">
                      <AppPagination
                        setPage={setPage}
                        page={page}
                        numberOfPage={totalPages}
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="genre-card"
                  className="lg:block hidden w-1/4 bg-blue-200 p-2"
                >
                  <GenreCard onSelectGenre={handleGetMovie} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className=" h-full bg-black">
      <div className=" xl:container  mx-auto  ">
        {isLoading ? <OnLoadingScreen /> : renderHomePage()}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
