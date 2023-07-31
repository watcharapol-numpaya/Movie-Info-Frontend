import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slides/movieSlice";

export const store =configureStore({
    reducer:{
        movies: movieSlice
    },
})


 