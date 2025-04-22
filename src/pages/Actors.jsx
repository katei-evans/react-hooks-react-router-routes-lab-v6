import { useEffect, useState } from "react";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"],
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

const actorsList = actors.map((actor) => actor.name).join(", ");

function Actors() {
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Actors</h1>
      </header>
      <main>
        {/* Actor info here! */}
        <ul>
          {actors.map((actor) => (
            <li key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p>
          This is a list of actors and the movies they have starred in. Click on
          an actor's name to see more details about their filmography.
        </p>
      </main>
    </>
  );
};

export default Actors;
