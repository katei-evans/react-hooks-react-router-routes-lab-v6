import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movieData = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Adventure", "Comedy"],
  },
  {
    id: 3,
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Thriller"],
  },
];
export default function MovieInfo() {
  const { id } = useParams();
  const movie = movieData[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
}
