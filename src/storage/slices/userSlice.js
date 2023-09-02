import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  favoriteMovieList: [],
  message: "",
  isLoading: false,
};

export const getFavoriteMovie = createAsyncThunk(
  "user/getFavoriteMovie",
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteMovie.fulfilled, (state, action) => {
        console.log(action.payload);
        state.favoriteMovieList = action.payload.favorite_movie;
        state.isLoading = false;
      })
      .addCase(getFavoriteMovie.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
