import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
 
import { useSelector } from "react-redux";

function TestPage() {
  const { trendingMovies } = useSelector((state) => state.movies);
  return (
    <div className="w-full h-full bg-fuchsia-300">
      <div className="h-128 container mx-auto bg-slate-500">
        {/* <Carousel>
         
            {trendingMovies &&
              trendingMovies.map((movie) => (
                <BaseMovieCard key={movie.id} movie={movie} />
              ))}
         
        </Carousel> */}
      </div>
    </div>
  );
}

export default TestPage;
