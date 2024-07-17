import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slice/MovieSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default store;
