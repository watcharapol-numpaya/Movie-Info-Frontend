import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../components/MovieCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 6000, min: 1536 },
    items: 7,
    slidesToSlide: 3,
  },
  desktop2Xl: {
    breakpoint: { max: 1536, min: 1280 },
    items: 6,
    slidesToSlide: 3,
  },
  desktopXl: {
    breakpoint: { max: 1280, min: 1052 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1052, min: 840 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 840, min: 572 }, //640
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 572, min: 540 },
    items: 3,
    slidesToSlide: 1,
  },
  xs: {
    breakpoint: { max: 540, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

function MovieCarouselCard({ title, movies, link }) {
  return (
    <>
      <div id="special-section">
        <div className="flex justify-between p-4 bg-gradient-to-r from-red-600 to-black text-white  ">
          <span className="font-semibold text-2xl   uppercase">{title}</span>
          <button className="font-semibold text-xl  ">View More</button>
        </div>
        <div className="bg-gray-400  mx-auto">
          <Carousel
            className="py-2"
            responsive={responsive}
            autoPlaySpeed={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[ ]}
            dotListClass="custom-dot-list-style"
          >
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MovieCarouselCard;
