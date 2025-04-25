import React from "react";
import { createMemoryRouter, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import routes from "../routes";

// const actors = [
//   {
//     name: "Benedict Cumberbatch",
//     movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
//   },
//   {
//     name: "Justin Timberlake",
//     movies: ["Trolls", "Friends with Benefits", "The Social Network"],
//   },
//   {
//     name: "Anna Kendrick",
//     movies: ["Pitch Perfect", "Into The Wood"],
//   },
//   {
//     name: "Tom Cruise",
//     movies: [
//       "Jack Reacher: Never Go Back",
//       "Mission Impossible 4",
//       "War of the Worlds",
//     ],
//   },
// ];


export default function ActorsPage() {

  const routes = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
    initialIndex: 0,
  })

  const[actors,setActors]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(response => response.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }
  ,[])

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

