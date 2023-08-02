import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { APIKey, APIKeyTMDB } from "../../services/MovieApiKey";
import { instance1, instance2 } from "../../services/MovieApi";

const initialState = {
  movies: [],
  trendingMovies: [],
  popularMovies: [],
  allMovie: [],
  genres: [],
  movieByGenre: [],
  totalPages: 0,
  isLoading: false,
  isSuccess: false,
  message: false,
};

export const getMovies = createAsyncThunk(
  "movieList/fetchMovie",
  async (arg, { rejectWithValue }) => {
    try {
      const searchKey = arg ? arg : "Thor";
      const res = await instance1.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      );
      // console.log(res)
      return [...res.data.Search];
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const getTrendingMovies = createAsyncThunk(
  "movieList/fetchTrendingMovie",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await instance2.get(`trending/movie/week`, {
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
      const res = await instance2.get(`movie/popular`, {
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
        params.with_genres = data.genre.join(',');
      }
      console.log(params);
      const res = await instance2.get(`discover/movie`, {
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
      const res = await instance2.get(`genre/movie/list`, {
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

export const getMovieByGenre = createAsyncThunk(
  "movieList/fetchMovieByGenre",
  async ({ page = 1, genre }, { rejectWithValue }) => {
    try {
      let params = {
        api_key: APIKeyTMDB,
      };

      if (genre) {
        params.with_genres = genre;
      }

      const res = await instance2.get(`discover/movie?page=${page}`, {
        params,
      });
      // console.log(res.data.genres
      //   );
      return {
        movies: [...res.data.results],
        totalPages: res.data.total_pages,
      };
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
      .addCase(getMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
        state.isSuccess = true;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
        // console.log(action);
      })
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
        // console.log(action);
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
        // console.log(action);
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
        // console.log(action);
      })
      .addCase(getMovieByGenre.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovieByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMovie = action.payload.movies;
        state.totalPages = action.payload.totalPages;
        state.isSuccess = true;
      })
      .addCase(getMovieByGenre.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = false;
        // console.log(action);
      });
  },
});

export default movieSlice.reducer;
