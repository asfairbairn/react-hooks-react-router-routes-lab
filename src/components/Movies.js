import React from "react";
import { movies } from "../data";

function Movies() {
  const createMovieDivs = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h4>Length: {movie.time} minutes</h4>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return ( 
    <div>
      <h1>Movies Page</h1>
      {createMovieDivs}


    </div>
  )
}

export default Movies;
