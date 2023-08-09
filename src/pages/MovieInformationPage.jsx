import React from "react";
import {useLocation, useParams} from "react-router-dom"
function MovieInformationPage({  }) {
    const location = useLocation()
    const {item} = location.state
    const {id} = useParams()

  return (
    <>
      <div>MovieInformationPage : {id} {console.log(item)}
      {item.title}
      <div>--------------</div>
      {console.log(location)}
      </div>
    </>
  );
}

export default MovieInformationPage;
