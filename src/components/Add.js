import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

// API KEY: 54da900eb024ae96561bb57b4a6a9ee5
const API_URL_UPCOMING = 'https://api.themoviedb.org/3/movie/550?api_key=54da900eb024ae96561bb57b4a6a9ee5'
//TOP RATED
const API_URL_TOP_RATED_TV_SHOWS = 'https://api.themoviedb.org/3/tv/top_rated?api_key=54da900eb024ae96561bb57b4a6a9ee5&language=en-US&page=1'


  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=54da900eb024ae96561bb57b4a6a9ee5&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">

            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
