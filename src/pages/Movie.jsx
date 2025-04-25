import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";


export default function MovieInfo() {
  const [movieData, setMovieData] = useState([]);

  const { id } = useParams();
  const movie = movieData[id];

  const routes = createMemoryRouter(routes,{
    initialEntries: [`/movie/${id}`],
    initialIndex: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}
