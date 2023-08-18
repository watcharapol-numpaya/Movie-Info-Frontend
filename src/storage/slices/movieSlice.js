import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKeyTMDB } from "../../services/MovieApiKey";
import { instance } from "../../services/MovieApi";

const initialState = {
  movies: [],
  trendingMovies: [],
  popularMovies: [],
  allMovie: [],
  genres: [],
  movieByGenre: [],
  searchList: [],
  movieInfo: [],
  totalPages: 0,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getTrendingMovies = createAsyncThunk(
  "movieList/fetchTrendingMovie",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await instance.get(`trending/movie/week`, {
        params: {
          api_key: APIKeyTMDB,
        },
      });
      return [...res.data.results];
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const getPopularMovies = createAsyncThunk(
  "movieList/fetchPopularMovie",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await instance.get(`movie/popular`, {
        params: {
          api_key: APIKeyTMDB,
        },
      });
      return [...res.data.results];
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const getAllMovies = createAsyncThunk(
  "movieList/fetchAllMovie",
  async (data, { rejectWithValue }) => {
    try {
      let params = {
        api_key: APIKeyTMDB,
        page: data.page ? data.page : 1,
      };

      if (data.genre) {
        params.with_genres = data.genre.join("|");
      }
      console.log(params);
      const res = await instance.get(`discover/movie`, {
        params,
      });

      return {
        movies: [...res.data.results],
        totalPages: res.data.total_pages,
      };
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const getAllGenre = createAsyncThunk(
  "movieList/fetchAllGenre",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await instance.get(`genre/movie/list`, {
        params: {
          api_key: APIKeyTMDB,
        },
      });
      // console.log(res.data.genres
      //   );
      return [...res.data.genres];
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const getMovieByKeyword = createAsyncThunk(
  "movieList/fetchMovieByKeyword",
  async (keyword, { rejectWithValue }) => {
    try {
      const res = await instance.get(`search/movie`, {
        params: {
          api_key: APIKeyTMDB,
          query: keyword,
        },
      });
      console.log(res);
      return [...res.data.results];
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const getMovieByID = createAsyncThunk(
  "movieList/fetchMovieByID",
  async (id, { rejectWithValue }) => {
    try {
      const res = await instance.get(`movie/${id}`, {
        params: {
          api_key: APIKeyTMDB,
          append_to_response: "videos",
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const movieSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trendingMovies = action.payload;
        state.isSuccess = true;
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
        // console.log(action);
      })
      .addCase(getPopularMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularMovies = action.payload;
        state.isSuccess = true;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getAllMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMovie = action.payload.movies;
        state.totalPages = action.payload.totalPages;
        state.isSuccess = true;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getAllGenre.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload;
        state.isSuccess = true;
      })
      .addCase(getAllGenre.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getMovieByKeyword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovieByKeyword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchList = action.payload;
        state.isSuccess = true;
      })
      .addCase(getMovieByKeyword.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getMovieByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovieByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movieInfo = action.payload;
        state.isSuccess = true;
      })
      .addCase(getMovieByID.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default movieSlice.reducer;
