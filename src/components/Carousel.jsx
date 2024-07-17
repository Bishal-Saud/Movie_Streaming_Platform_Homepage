import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaPlus, FaPlay } from "react-icons/fa";

const Carousel = ({ movie }) => {
  // console.log(movie, "movies");
  const staticData = {
    adult: false,
    backdrop_path: "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
    genre_ids: [0, 1, 2],
    id: 786892,
    original_language: "en",
    original_title: "Furiosa: A Mad Max Saga",
    overview:
      "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    popularity: 2145.649,
    poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    release_date: "2024-05-22",
    title: "Furiosa: A Mad Max Saga",
    video: false,
    vote_average: 7.652,
    vote_count: 2136,
  };

  const images = [
    `https://image.tmdb.org/t/p/w500/${staticData.backdrop_path}`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayImage = movie
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : images[currentIndex];

  return (
    <div className="w-full mx-auto -z-10 overflow-hidden rounded-xl absolute 2xl:h-screen">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>
      <img
        src={displayImage}
        alt="carousel slide"
        className="h-screen 2xl:h-fit w-full object-cover"
      />
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>
      {movie ? (
        <div className="absolute top-20 text-white flex flex-col w-[90%] md:w-[35rem] ml-4 md:ml-20 mt-10 gap-2 justify-center">
          <h2 className="text-4xl md:text-7xl">{movie.title}</h2>
          <div className="text-xl md:text-2xl flex">
            {Array.from({ length: movie.vote_average / 2 }, (_, i) => (
              <FaStar key={i} className="text-yellow-300" />
            ))}
          </div>
          <div className="flex">
            <p className="text-sm md:text-base">
              {movie.release_date} <span>| </span> {movie.genre_ids[0]}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-black flex justify-center items-center h-10 w-10">
              <FaPlus />
            </button>
            <button className="flex justify-center items-center h-10 w-10 bg-yellow-600">
              <FaPlay />
            </button>
          </div>
          <div>
            <p className="text-sm md:text-base w-full md:w-[80%]">
              {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <div className="absolute top-20 text-white flex flex-col w-[90%] md:w-[35rem] ml-4 md:ml-20 mt-10 gap-2 justify-center">
          <h2 className="text-4xl md:text-7xl">{staticData.title}</h2>
          <div className="text-xl md:text-2xl flex">
            {Array.from({ length: staticData.vote_average / 2 }, (_, i) => (
              <FaStar key={i} className="text-yellow-300" />
            ))}
          </div>
          <div className="flex">
            <p className="text-sm md:text-base">
              {staticData.release_date} <span>| </span>{" "}
              {staticData.genre_ids[0]}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-black flex justify-center items-center h-10 w-10">
              <FaPlus />
            </button>
            <button className="flex justify-center items-center h-10 w-10 bg-yellow-600">
              <FaPlay />
            </button>
          </div>
          <div>
            <p className="text-[10px] md:text-base w-full md:w-[80%]">
              {staticData.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;