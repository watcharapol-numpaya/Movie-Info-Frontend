import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { APIKeyTMDB } from "../../services/MovieApiKey";
import { instance } from "../../services/MovieApi";

const initialState = {
  allCast: [],
  castInfo: [],
  movies: [],
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getCast = createAsyncThunk(
  "castList/fetchCast",
  async (movieId, { rejectWithValue }) => {
    try {
      const res = await instance.get(`movie/${movieId}/credits`, {
        params: {
          api_key: APIKeyTMDB,
        },
      });
      // console.log(res.data.cast);
      return [...res.data.cast];
    } catch (err) {
      return  rejectWithValue(err.response.data);
    }
  }
);

export const getCastInfo = createAsyncThunk(
  "castList/getCastInfo",
  async (id, { rejectWithValue }) => {
    try {
      const res = await instance.get(`person/${id}`, {
        params: {
          api_key: APIKeyTMDB,
        },
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMovieRelateToCast = createAsyncThunk(
  "castList/getMovieRelateToCast",
  async (name, { rejectWithValue }) => {
    try {
      const res = await instance.get(`search/person`, {
        params: {
          api_key: APIKeyTMDB,
          query: name,
        },
      });
      // console.log(res.data.cast);
      return [...res.data.results];
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

// export const getMovieCredits =createAsyncThunk("castList/getMovieCredits")

const castSlice = createSlice({
  name: "castList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCast.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCast.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCast = action.payload;
        state.isSuccess = true;
      })
      .addCase(getCast.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getMovieRelateToCast.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovieRelateToCast.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
        state.isSuccess = true;
      })
      .addCase(getMovieRelateToCast.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getCastInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCastInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.castInfo = action.payload;
        state.isSuccess = true;
      })
      .addCase(getCastInfo.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default castSlice.reducer;
