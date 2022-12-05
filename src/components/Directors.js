import React from "react";
import { directors } from "../data";

function Directors() {
  const createDirectorDiv = directors.map((director) => {
    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie) => {
            return <li key={movie}>{movie} </li> 
          })}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {createDirectorDiv}

    </div>
  )
}

export default Directors;
