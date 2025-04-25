import React from "react";
import { useEffect, useState } from "react";
import routes from "../routes";

// const directors = [
//   {
//     name: "Scott Derrickson",
//     movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
//   },
//   {
//     name: "Mike Mitchell",
//     movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
//   },
//   {
//     name: "Edward Zwick",
//     movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
//   },
// ];


export default function DirectorsPage() {

  const routes = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
    initialIndex: 0,
  })

  const[directors, setDirectors] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(response => response.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  },[])

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
