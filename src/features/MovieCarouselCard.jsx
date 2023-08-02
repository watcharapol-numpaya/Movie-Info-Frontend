import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../components/MovieCard";

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


function MovieCarouselCard({title,movies,link}) {
  return (
    <>
      <div id="special-section">
        <div className="flex justify-between p-4 bg-gradient-to-r from-red-600 to-black text-white  ">
          <span className="font-semibold text-2xl   uppercase">{title}</span>
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
            {movies &&
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MovieCarouselCard;
