import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import castSlice from "./slices/castSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    cast: castSlice,
  },
});
