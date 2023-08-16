import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { APIKeyTMDB } from "../../services/MovieApiKey";
import { instance } from "../../services/MovieApi";

const initialState = {
  actors: [],
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getActors = createAsyncThunk(
  "actorList/fetchActors",
  async (movieId, { rejectWithValue }) => {
    try {
      const res = await instance.get(`movie/${movieId}/credits`, {
        params: {
          api_key: APIKeyTMDB,
        },
      });
      console.log(res.data.cast);
      return res.data.cast;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const actorSlice = createSlice({
  name: "actorList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActors.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getActors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.actors = action.payload;
        state.isSuccess = true;
      })
      .addCase(getActors.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default actorSlice.reducer;
