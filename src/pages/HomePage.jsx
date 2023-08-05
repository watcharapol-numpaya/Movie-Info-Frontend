import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenre,
  getAllMovies,
  getMovies,
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

function HomePage2() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { trendingMovies, popularMovies, allMovie, totalPages, genres } =
    useSelector((state) => state.movies);

  const [page, setPage] = useState(1);
  const [banner, setBanner] = useState(
    "https://images7.alphacoders.com/112/1129455.jpg"
  );
  const [isShowGenreCard, setIsShowGenreCard] = useState(false);
  const isLgScreen = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    // Hide the genre card automatically when the screen size is greater than "lg"
    if (!isLgScreen) {
      setIsShowGenreCard(false);
    }
  }, [isLgScreen]);

  useEffect(() => {
    // dispatch(getTrendingMovies());
    // dispatch(getPopularMovies());
    // handleGetMovie();
    // dispatch(getAllGenre());
  }, [page]);

  const handleGetMovie = (genre) => {
    let data = { page: page };

    if (genre) {
      data.genre = genre;
    }

    dispatch(getAllMovies(data));
  };

  return (
    <>
      <div className=" xl:container  mx-auto  ">
        <div className="w-full sm:h-96 h-56 lg:w-5/6 relative">
          <div className=" absolute inset-y-0 left-0  sm:w-1/4 w-1/12 bg-gradient-to-l from-transparent to-black"></div>
          <div className=" absolute inset-y-0 right-0 sm:w-1/4 w-1/12 bg-gradient-to-r from-transparent to-black"></div>
          <img
            className="w-full h-full object-cover"
            src={banner}
            alt="Banner Image"
          ></img>
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
      </div>
    </>
  );
}

export default HomePage2;
