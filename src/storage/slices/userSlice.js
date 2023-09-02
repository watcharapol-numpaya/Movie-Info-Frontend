import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  favoriteMovieList: [],
};

const getFavoriteMovie = createAsyncThunk(
  "user/getFavoriteMovie",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await instance2.post(`$${userId}/favorite_movie`);

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
    builder.addCase(getFavoriteMovie.fulfilled, (state, action));
  },
});
