import React, { useEffect, useState } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=d0402411";

// const movie1 = {
//   Title: "Spiderman the Verse",
//   Year: "2019–",
//   imdbID: "tt12122034",
//   Type: "series",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    searchMovies(searchTerm);
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Titanic");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="search"
          placeholder="search for movies"
          value={searchTerm}
          onChange={handleSearchClick}
        />
        <img src={SearchIcon} alt="search" onClick={handleClick} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movies[0]} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
