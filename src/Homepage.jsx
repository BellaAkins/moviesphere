import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=561bc012";

const Homepage = () => {
  const [theMovies, setTheMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setTheMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Barbie");
  }, []);
  return (
    <div className="homepage">
      <h1>MovieSphere</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {theMovies?.length > 0 ? (
        <div className="container">
          {theMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default Homepage;
