import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCastInfo, getMovieRelateToCast } from "../storage/slices/castSlice";
import ImageNotFound from "../components/ImageNotFound";
import MovieCard from "../components/MovieCard";
import OnLoadingScreen from "./../components/OnLoadingScreen";
const CastInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );
  const [isLoading, setIsLoading] = useState(true);
  const { castInfo, movies, moviesHaveContribute } = useSelector(
    (state) => state.cast
  );
  useEffect(() => {
    Promise.all([dispatch(getCastInfo(id)), dispatch(getMovieRelateToCast(id))])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, dispatch]);

  const renderKnowAs = () => {
    if (!castInfo || !castInfo.also_known_as) {
      return null; // Return some fallback or loading indicator if desired
    }

    return castInfo.also_known_as.map((item) => (
      <p className="pl-2" key={item}>
        {item}
      </p>
    ));
  };

  const checkGender = () => {
    const gender = castInfo.gender;
    switch (gender) {
      case 0:
        return "Not set / not specified";
        break;
      case 1:
        return "Female";
        break;
      case 2:
        return "Male";
        break;
      case 3:
        return "Non-binary";
        break;
      default:
    }
  };

  const renderKnownForMovie = () => {
    return (
      <div>
        Performance
        <div>
          {console.log(moviesHaveContribute)}

          {/* {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))} */}
        </div>
      </div>
    );
  };
  const renderParticipateForMovie = () => {
    return <div>Participate in the creation of a movie </div>;
  };

  const renderCastSection = () => {
    return (
      <div className="xl:container mx-auto   ">
        <div className="flex sm:flex-row flex-col ">
          <div
            id="cast-image"
            className="bg-blue-400 lg:w-160 md:w-144 sm:w-128 w-full h-full"
          >
            <div className="flex justify-center mt-4">
              <div className="  rounded-2xl bg-white lg:w-86 lg:h-128  md:w-76 md:h-112 sm:w-64 sm:h-96 w-56 h-80 shadow-md overflow-hidden">
                {castInfo.profile_path ? (
                  <img
                    className="lg:w-86 lg:h-128  md:w-76 md:h-112 sm:w-64 sm:h-96 w-56 h-80  "
                    src={`${imageUrl}/${castInfo.profile_path}`}
                  ></img>
                ) : (
                  <ImageNotFound />
                )}
              </div>
            </div>
            <div className=" bg-white ">
              <div className="w-full flex justify-center pt-3 px-2">
                <p className="font-bold text-3xl">{castInfo.name}</p>
              </div>
              <hr className="my-2 border-gray-300 mx-1"></hr>

              <div className="w-full     ">
                <div className="pl-2 space-y-3 text-base font-normal">
                  <p className="text-xl font-bold  ">Personal info</p>
                  <div id="gender">
                    <p className="font-semibold">Gender</p>
                    <p className="pl-2">{checkGender()}</p>
                  </div>
                  <div id="birthday">
                    <p className="font-semibold">Birthday</p>
                    <p className="pl-2">
                      {castInfo.birthday ? castInfo.birthday : "-"}
                    </p>
                  </div>
                  <div id="deathday">
                    <p className="font-semibold">Deathday</p>
                    <p className="pl-2">
                      {castInfo.deathday ? castInfo.deathday : "-"}
                    </p>
                  </div>
                  <div id="place-of-birth">
                    <p className="font-semibold">Place of Birth</p>
                    <p className="pl-2">
                      {castInfo.place_of_birth ? castInfo.place_of_birth : "-"}
                    </p>
                  </div>
                  <div id="known-for">
                    <p className="font-semibold ">Known For</p>
                    <p className="pl-2">{castInfo.known_for_department}</p>
                  </div>
                  <div id="known-as">
                    <p className="font-semibold  ">Also Known As</p>
                    {renderKnowAs()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="sm:hidden block   my-2 mx-1 border-gray-300 "></hr>
          <div id="details" className="  w-full  h-auto   ">
            <div className="w-full  ">
              <div className="px-2  sm:pt-3">
                <div id="biography" className=" ">
                  <p className="text-xl font-bold  ">Biography</p>

                  <p className="pl-2">
                    {castInfo.biography ? castInfo.biography : "-"}
                  </p>
                </div>
                <div>{renderKnownForMovie()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-white">
      {isLoading ? <OnLoadingScreen /> : renderCastSection()}
    </div>
  );
};

export default CastInfo;
