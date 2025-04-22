import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Trolls" },
  { id: 3, title: "Pitch Perfect" },
  { id: 4, title: "Jack Reacher: Never Go Back" },
];

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}
