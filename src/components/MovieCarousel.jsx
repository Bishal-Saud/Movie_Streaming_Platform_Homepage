import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = ({ movies, onMovieSelect }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Settings for screen width below 1024px
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Settings for screen width below 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Settings for screen width below 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, // Settings for screen width below 320px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-full h-full ">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card  border-black h-[14rem] w-10 outline-none  "
          onClick={() => onMovieSelect(movie)}
        >
          <img
            className="h-[12rem] w-[10rem] cursor-pointer transform transition duration-300 hover:-translate-y-10  rounded-lg shadow-lg shadow-black "
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </Slider>
  );
};

export default MovieCarousel;
