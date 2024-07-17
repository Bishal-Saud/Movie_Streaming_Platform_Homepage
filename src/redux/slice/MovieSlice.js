import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "5fa7d14ab8dfcf5ffb154251dbe152ca";
const API_URL = "https://api.themoviedb.org/3/discover/movie";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);

  return response.data.results;
});
// fetchMovies();/
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    selectedMovie: null,
    status: null,
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { selectMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
