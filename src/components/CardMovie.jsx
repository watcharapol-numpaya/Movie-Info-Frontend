import React from "react";

const CardMovie =({ data, limit })=> {
  if (!data || data.length === 0 || limit <= 0) {
    return null; // Render nothing if the data is empty or the limit is invalid
  }

  // Create a new array with a limited number of items using slice
  const limitedData = data.slice(0, limit);

  return (
    <ul>
      {console.log(data)}
      {limitedData.map((item, index) => (
        <li key={index}>{item}</li>
      
      ))}
    </ul>
  );
}

export default CardMovie;
