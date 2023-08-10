import React, { useEffect } from "react";
import {useLocation, useParams} from "react-router-dom"
function MovieInfoPage({  }) {
    const location = useLocation()
    const {movie} = location.state
    const {id} = useParams()

    useEffect(()=>{},[])


  return (
    <>
      <div>MovieInformationPage : {id} 
      {console.log(movie)}
      {movie.title}
      <div>--------------</div>
      {console.log(location)}
      </div>
    </>
  );
}

export default MovieInfoPage;
