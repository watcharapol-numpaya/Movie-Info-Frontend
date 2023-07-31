import React, { useState } from 'react'

function GenreButton({ genre }) {
    const [isSelect, setIsSelect] = useState(false);


  return (
    <>
    
      <button  onClick={()=>{setIsSelect(!isSelect)}} className={`${isSelect?"bg-red-600":"bg-yellow-400"} rounded-full  p-1 px-3 cursor-pointer`}>
      <input type="checkbox"  />  {genre.name}
      </button>
    </>
  )
}

export default GenreButton