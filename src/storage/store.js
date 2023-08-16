import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slides/movieSlice";
import actorSlice from "./slides/actorSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    actors: actorSlice,
  },
});
