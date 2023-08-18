import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //alert("Reload");
    setCounter(100);
    // alert("You ve changed the counter to ", counter);
    // and add in depency counter
  }, []);
  // role of depandecy that the code going to only happen at the initial load of the component.
  //if we put [counter] in dependy => this code  is going to updata everytime this variable "counter" inside of this array changes.
  //==> so we got a infitve loop: bc we setcounter to something and keep changing

  return (
    <div className="app">
      <>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
          -
        </button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          +
        </button>
      </>

      {/* <!-------------  All up ligne for just test use state Testt!  ----------> */}
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
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
