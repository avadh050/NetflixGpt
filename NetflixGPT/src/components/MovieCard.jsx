import React from "react";
import { IMG_URL } from "../utils/contants.js";

const MovieCard = ({ backdrop_path }) => {
  return (
    <div className=" flex-shrink-0 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-60">
      <img
        src={IMG_URL + backdrop_path}
        alt="Movie Poster"
        className="w-full h-40 object-cover"
      />
    </div>
  );
};

export default MovieCard;
