import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance2 } from "../../services/MovieApi";

const initialState = {
  favoriteMovieList: [],
  message: "",
  isLoading: false,
};



export const getFavoriteMovieId = createAsyncThunk(
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteMovieId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteMovieId.fulfilled, (state, action) => {
        state.favoriteMovieList = action.payload.favorite_movie;
        state.isLoading = false;
      })
      .addCase(getFavoriteMovieId.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
