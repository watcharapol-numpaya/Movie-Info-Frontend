import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  favoriteMovieList: [],
  favoriteMovieIdList: [],
  myFavoriteMovieIdList: [],
 
  favoriteMovie: [],
  message: "",
  isLoading: false,
};

export const sendMyFavoriteMovieId = createAsyncThunk(
  "user/addFavoriteMovie",
  async (id, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/add_favorite_movie`, {
        user_id: id,
        favorite_movie: myFavoriteMovieIdList,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMyFavoriteMovieId = createAsyncThunk(
  "user/getFavoriteMovieId",
  async (id, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`/favorite_movie`, {
        user_id: id,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action) => {
      const movieId = action.payload;
      state.myFavoriteMovieIdList.push(movieId);
    },
    removeFavoriteMovie: (state, action) => {
      const movieId = action.payload;
      state.myFavoriteMovieIdList = state.myFavoriteMovieIdList.filter(
        (id) => id !== movieId
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMyFavoriteMovieId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendMyFavoriteMovieId.fulfilled, (state, action) => {
        state.myFavoriteMovieIdList = action.payload.favorite_movie;
        state.isLoading = false;
      })
      .addCase(sendMyFavoriteMovieId.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {addFavoriteMovie,removeFavoriteMovie} = userSlice.actions;
export default userSlice.reducer;
