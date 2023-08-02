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
 

function HomePage2() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { trendingMovies, popularMovies, allMovie, totalPages, genres } =
    useSelector((state) => state.movies);

  const [page, setPage] = useState(1);
  const [banner, setBanner] = useState(
    "https://images7.alphacoders.com/112/1129455.jpg"
  );

  const [item, setItem] = useState(["1", "2", "3", "4", "5", "6"]);

  const colors = ["green-400", "green-700", "red-400"];
  const numberOfElements = 10;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 768 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 572 }, //640
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 572, min: 384 },
      items: 2,
      slidesToSlide: 3,
    },
    xs: {
      breakpoint: { max: 384, min: 0 },
      items: 2,
      slidesToSlide: 3,
    },
  };

  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(getPopularMovies());
    dispatch(getAllMovies(page));
    // dispatch(getAllGenre());
  }, [page]);

  return (
    <>
      <div className=" lg:container  mx-auto  ">
        <div className="w-full sm:h-96 h-56 lg:w-5/6 relative">
          <div className=" absolute inset-y-0 left-0  sm:w-1/4 w-1/12 bg-gradient-to-l from-transparent to-black"></div>
          <div className=" absolute inset-y-0 right-0 sm:w-1/4 w-1/12 bg-gradient-to-r from-transparent to-black"></div>
          <img
            className="w-full h-full object-cover"
            src={banner}
            alt="Banner Image"
          ></img>
        </div>
        <div className="flex lg:flex-row flex-col w-full h-full bg-white  flex-wrap   ">
          <div className=" lg:w-3/4 w-full ">
            <div id="trending-section">
              <div className="flex justify-between p-4 bg-gradient-to-r from-red-600 to-black text-white  ">
                <span className="font-semibold text-2xl   uppercase">
                  Trending
                </span>
                <button className="font-semibold text-xl  ">View More</button>
              </div>
              <div className="bg-gray-400  mx-auto">
                <Carousel
                  responsive={responsive}
                  autoPlaySpeed={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                >
                  {trendingMovies &&
                    trendingMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Carousel>
              </div>
            </div>
            <div id="popular-section">
              <div className="flex justify-between p-4   ">
                <span className="font-semibold text-2xl text-yellow-400 uppercase">
                  Popular
                </span>
                <button className="font-semibold text-xl text-yellow-400">
                  View More
                </button>
              </div>
              <div className="bg-gray-400  mx-auto">
                <Carousel
                  responsive={responsive}
                  autoPlaySpeed={1000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                >
                  {popularMovies &&
                    popularMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Carousel>
              </div>
            </div>
            <div id="all-movie   ">
              <div className="flex justify-between p-4 bg-red-600  ">
                <span className="font-semibold text-2xl text-yellow-400 uppercase  ">
                  Movies
                </span>
              </div>
              <div className=" flex justify-center w-full my-2 ">
                <AppPagination
                  setPage={setPage}
                  page={page}
                  numberOfPage={totalPages}
                />
              </div>
              <div
                id="item-container"
                className={`flex  flex-wrap gap-6  sm:justify-start justify-center  `}
              >
                {allMovie &&
                  allMovie.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                <div className=" flex justify-center w-full">
                  <AppPagination
                    setPage={setPage}
                    page={page}
                    numberOfPage={totalPages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden w-1/4    bg-blue-200 p-2">
           <GenreCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage2;
