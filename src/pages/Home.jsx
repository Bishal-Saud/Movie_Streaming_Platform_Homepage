import React, { useEffect, useState } from "react";
import AppLayout from "../layout";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovie } from "../redux/slice/MovieSlice";
import MovieCarousel from "../components/MovieCarousel";
import _ from "lodash";
import Search from "../components/Search";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
    console.log(movies);
  }, [dispatch]);

  const handleMovieSelect = (movie) => {
    dispatch(selectMovie(movie));
  };

  const handleSearch = _.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AppLayout>
      <Carousel movie={selectedMovie} />
      <Search handleSearch={handleSearch} />
      <div className="flex flex-wrap w-full gap-2  fixed top-[72%] ml-4">
        <MovieCarousel
          movies={filteredMovies}
          onMovieSelect={handleMovieSelect}
        />
      </div>
    </AppLayout>
  );
}

export default Home;
