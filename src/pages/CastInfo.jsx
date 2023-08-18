import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCastInfo, getMovieRelateToCast } from "../storage/slices/castSlice";
import ImageNotFound from "../components/ImageNotFound";
const CastInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [imageUrl, setImageURL] = useState(
    "https://www.themoviedb.org/t/p/w780"
  );
  const [isLoading, setIsLoading] = useState(true);
  const { castInfo } = useSelector((state) => state.cast);
  useEffect(() => {
    Promise.all([dispatch(getCastInfo(id))])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, dispatch]);

  // const renderKnowAs = () => {
  //   return (
  //     <>
  //       {castInfo.also_known_as.map((item) => (
  //         <p>{item}</p>
  //       ))}
  //     </>
  //   );
  // };

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
      // code block
    }
  };

  const renderCastSection = () => {
    return (
      <>
        <div className="xl:container mx-auto   ">
          {console.log(castInfo)}

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
              <div className="w-full flex justify-center pt-2">
                <p className="font-semibold text-2xl">{castInfo.name}</p>
              </div>
              <div>
                <div>
                  <p className="font-semibold">Gender</p>
                  <p>{checkGender()}</p>
                </div>
              </div>
            </div>

            <div id="details" className="bg-yellow-600   w-full h-screen">
              <div className="pl-2">
                <p className="text-2xl font-bold">Personal info</p>
                <div>
                  <p className="font-semibold">Also Known As</p>
                  {/* {castInfo && renderKnowAs()} */}
                </div>
                <div>
                  <p className="font-semibold">Known For</p>
                  <p>{castInfo.known_for_department}</p>
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
      <div className="w-full h-full bg-white">{renderCastSection()}</div>
    </>
  );
};

export default CastInfo;
