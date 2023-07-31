import React from "react";
import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/material";

 
const AppPagination = ({ setPage, page, numberOfPage }) => {
  const handleChange = (page) => {
    console.log(page)
    setPage(page);
  };

  return (
    <>
      <div>
        <Pagination color="primary"
          onChange={(e) => handleChange(e.target.textContent)}
          page={page}
          count={numberOfPage}
        />
      </div>
    </>
  );
};

export default AppPagination;
