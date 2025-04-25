import React from "react";
import { useEffect, useState } from "react";
import { createMemoryRouter, Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import routes from "../routes";

const router = createMemoryRouter(routes);

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => consolele.error(error));
  }, []);

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


