import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=586efbcda4d7a32f6756e6335a366512";

const Homepage = () => {
  const [theMovies, setTheMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&query=${title}`);
      const data = await response.json();
      if (data.results) {
        setTheMovies(data.results);
      } else {
        setTheMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setTheMovies([]);
    }
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
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && searchTerm.trim() !== "") {
              searchMovies(searchTerm);
            }
          }}
        />
        <img
          src={SearchIcon || "/placeholder.svg"}
          alt="search"
          onClick={() => {
            if (searchTerm && searchTerm.trim() !== "") {
              searchMovies(searchTerm);
            }
          }}
        />
      </div>
      {theMovies?.length > 0 ? (
        <div className="container">
          {theMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
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
