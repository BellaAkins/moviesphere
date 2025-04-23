import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.media_type || "Movie"}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
