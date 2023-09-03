import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  favoriteMovieIdList: [], //keep movie id
  favoriteMovies: [],
  message: "",
  isLoading: false,
};

export const sendFavoriteMovieId = createAsyncThunk(
  "user/sendFavoriteMovieId",
  async (data, { rejectWithValue }) => {
    try {
      const res = await instance2.put(`/add_favorite_movie`, {
        user_id: data.user_id,
        favorite_movie: [data.movieId],
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const removeFavoriteMovieId = createAsyncThunk(
  "user/removeFavoriteMovieId",
  async (data, { rejectWithValue }) => {
    try {
      const res = await instance2.put(`/remove_favorite_movie`, {
        user_id: data.user_id,
        favorite_movie: [data.movieId],
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getFavoriteMovieId = createAsyncThunk(
  "user/getFavoriteMovieId",
  async (user_id, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/favorite_movie`, {
        user_id: user_id,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action) => {
      const movieId = action.payload;

      state.favoriteMovieIdList.push(movieId);
    },
    removeFavoriteMovie: (state, action) => {
      const movieId = action.payload;
      state.favoriteMovieIdList = state.favoriteMovieIdList.filter(
        (id) => id !== movieId
      );
    },
    clearUserSliceState: (state, action) => {
      state.favoriteMovieIdList = [];
      state.favoriteMovies = [];
      state.message = "";
      state.isLoading = false;
    },
    addMovieToFavoriteMovies:(state,action)=>{
         const movieToAdd = action.payload;
      if (!state.favoriteMovies.some((movie) => movie.id === movieToAdd.id)) {
        state.favoriteMovies.push(movieToAdd);
      }
    },
    removeMovieFromFavoriteMovies:(state,action)=>{
      const movieId = action.payload;
      state.favoriteMovies = state.favoriteMovies.filter(
        (id) => id !== movieId
      );
    }
  

  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFavoriteMovieId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendFavoriteMovieId.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(sendFavoriteMovieId.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(removeFavoriteMovieId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(removeFavoriteMovieId.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(removeFavoriteMovieId.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(getFavoriteMovieId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteMovieId.fulfilled, (state, action) => {
        state.favoriteMovieIdList =
          action.payload.favorite_movie !== null
            ? action.payload.favorite_movie
            : [];
        state.isLoading = false;
      })
      .addCase(getFavoriteMovieId.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addFavoriteMovie, removeFavoriteMovie, clearUserSliceState ,addMovieToFavoriteMovies,removeMovieFromFavoriteMovies} =
  userSlice.actions;
export default userSlice.reducer;
